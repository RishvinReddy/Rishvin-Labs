import { NextResponse } from 'next/server';
import { resend } from '@/lib/email/resend';
import { generateInquiryId } from '@/lib/leads/inquiry-id';
import { calculateLeadScore } from '@/lib/leads/scoring';
import { classifyLead } from '@/lib/leads/classification';
import { validateContactPayload, parseProjectLinks } from '@/lib/validation/contact';
import { NewLeadEmail } from '@/emails/NewLeadEmail';
import { InquiryConfirmationEmail } from '@/emails/InquiryConfirmationEmail';

export async function POST(req: Request) {
  try {
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
    const { data, error } = await resend.batch.send([
      {
        from: `Rishvin Labs <${fromEmail}>`,
        to: [internalEmail],
        replyTo: [clientEmail],
        subject: `New Lead: ${projectName} [${inquiryId}]`,
        react: NewLeadEmail({
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
        }),
      },
      {
        from: `Rishvin Labs <${fromEmail}>`,
        to: [clientEmail], 
        subject: `We've received your project inquiry (${inquiryId})`,
        react: InquiryConfirmationEmail({
          clientName: body.from_name,
          inquiryId,
          projectName,
          services,
          timeline,
        }),
      }
    ]);

    if (error) {
      console.error("Resend Delivery Error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to dispatch email. Please contact us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, inquiry_id: inquiryId, message: "Email sent successfully" });

  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
