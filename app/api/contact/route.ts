import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Spam protection: honeypot
    // If the hidden field is filled, we assume it's a bot and silently reject
    if (body.honeypot) {
      console.warn("Honeypot triggered, ignoring submission.");
      return NextResponse.json({ success: true, message: "Request received" });
    }

    // Basic server-side validation
    if (!body.from_name || !body.from_email) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: name or email" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.from_email)) {
       return NextResponse.json(
        { success: false, message: "Invalid email address format" },
        { status: 400 }
      );
    }

    // Rate limiting could be implemented here with Vercel KV or Edge Middleware

    // EmailJS configurations
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      return NextResponse.json(
        { success: false, message: "Server configuration error. Please contact rishvinreddy@gmail.com directly." },
        { status: 500 }
      );
    }

    // Construct EmailJS API payload
    const emailJsPayload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: body.from_name,
        from_email: body.from_email,
        company: body.company || "Not provided",
        phone: body.phone || "Not provided",
        serviceId: body.serviceId || "none",
        serviceName: body.serviceName || "None selected",
        source: body.source || "direct",
        budget: body.budget || "Not specified",
        timeline: body.timeline || "Not specified",
        contact_channel: body.contact_channel || "Email",
        message: body.message || "No description provided.",
        timestamp: new Date().toISOString(),
      }
    };

    // Forward the validated request to EmailJS REST API
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailJsPayload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("EmailJS Delivery Error:", text);
      return NextResponse.json(
        { success: false, message: "Failed to dispatch email. Please contact us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
