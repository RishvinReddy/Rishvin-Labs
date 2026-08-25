import { NextResponse } from 'next/server';
import { resend } from '@/lib/email/resend';
import { generateInquiryId } from '@/lib/leads/inquiry-id';
import { calculateLeadScore } from '@/lib/leads/scoring';
import { classifyLead } from '@/lib/leads/classification';
import { validateContactPayload, parseProjectLinks } from '@/lib/validation/contact';
import { render } from '@react-email/render';
import { NewLeadEmail } from '@/emails/NewLeadEmail';
import { InquiryConfirmationEmail } from '@/emails/InquiryConfirmationEmail';

// Temporary basic in-memory rate limiting (Replace with Redis/Vercel KV for production)
const rateLimitMap = new Map<string, { count: number, resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const rateData = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };
    
    if (now > rateData.resetTime) {
      rateData.count = 1;
      rateData.resetTime = now + RATE_LIMIT_WINDOW_MS;
    } else {
      rateData.count++;
    }
    rateLimitMap.set(ip, rateData);

    if (rateData.count > RATE_LIMIT_MAX) {
      return NextResponse.json({ success: false, message: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json();

    // 1. Validation & Sanitization
    const validation = validateContactPayload(body);
    if (!validation.valid) {
      if (validation.error === "Spam detected") {
        console.warn("Honeypot triggered, ignoring submission.");
        return NextResponse.json({ success: true, message: "Request received" });
      }
      return NextResponse.json(
        { success: false, message: validation.error },
        { status: 400 }
      );
    }

    if (!resend) {
      console.error("Resend API key is missing.");
      return NextResponse.json(
        { success: false, message: "Server configuration error. Please contact rishvinreddy@gmail.com directly." },
        { status: 500 }
      );
    }

    // 2. Generate Lead Intelligence
    const inquiryId = generateInquiryId();
    const { score, reasons } = calculateLeadScore(body);
    const { category, priority } = classifyLead(body);
    const formattedLinks = parseProjectLinks(body.project_links);
    
    const submittedAt = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    const source = body.source ? body.source.charAt(0).toUpperCase() + body.source.slice(1) : "Website";
    const projectName = body.project_name || body.serviceName || "New Project";
    const services = body.serviceName || "Not specified";
    const timeline = body.timeline || "Not specified";
    const budget = body.budget || "Not specified";

    const fromEmail = process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev";
    const internalEmail = process.env.CONTACT_EMAIL_TO || "rishvinreddy@gmail.com";
    const clientEmail = body.from_email;

    // 3. Dispatch Emails via Resend
    // We send two emails: one internal notification and one client auto-reply.
    const emailPropsNewLead = {
      inquiryId,
      leadScore: score,
      leadScoreReasons: reasons,
      classificationCategory: category,
      classificationPriority: priority,
      clientName: body.from_name,
      clientEmail,
      clientPhone: body.phone || "Not provided",
      clientRole: body.role || "Not specified",
      clientCompany: body.company || "Not specified",
      clientWebsite: body.company_website || "Not specified",
      projectName,
      services,
      budget,
      timeline,
      businessProblem: body.business_problem || body.message || "No details provided.",
      projectLinks: formattedLinks,
      source,
      submittedAt
    };

    const emailPropsConfirmation = {
      clientName: body.from_name,
      inquiryId,
      projectName,
      services,
      timeline,
    };

    const textNewLead = await render(NewLeadEmail(emailPropsNewLead), { plainText: true });
    const textConfirmation = await render(InquiryConfirmationEmail(emailPropsConfirmation), { plainText: true });

    const { data, error } = await resend.batch.send([
      {
        from: `Rishvin Labs <${fromEmail}>`,
        to: [internalEmail],
        replyTo: [clientEmail],
        subject: `New Lead: ${projectName} [${inquiryId}]`,
        react: NewLeadEmail(emailPropsNewLead),
        text: textNewLead,
      },
      {
        from: `Rishvin Labs <${fromEmail}>`,
        to: [clientEmail], 
        subject: `We've received your project inquiry (${inquiryId})`,
        react: InquiryConfirmationEmail(emailPropsConfirmation),
        text: textConfirmation,
      }
    ], {
      idempotencyKey: `contact-inquiry-${inquiryId}`,
    });

    if (error) {
      console.error("Resend Delivery Error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to dispatch email. Please contact us directly." },
        { status: 500 }
      );
    }

    const internalEmailId = data?.data?.[0]?.id || "unknown";
    const clientEmailId = data?.data?.[1]?.id || "unknown";

    return NextResponse.json({ 
      success: true, 
      inquiryId: inquiryId, 
      internalEmailId,
      clientEmailId
    });

  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
