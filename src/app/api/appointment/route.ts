import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

const appointmentSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  treatment: z.string().min(1),
  date: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  // Rate limit: 3 submissions per IP per 15 minutes
  const ip = getClientIp(req);
  const limit = rateLimit(ip, { limit: 3, windowMs: 15 * 60 * 1000 });

  if (!limit.success) {
    const retryAfterSecs = Math.ceil((limit.resetAt - Date.now()) / 1000);
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes before trying again." },
      { status: 429, headers: { "Retry-After": String(retryAfterSecs) } }
    );
  }

  try {
    const body = await req.json();
    const formData = appointmentSchema.parse(body);

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail = process.env.CLINIC_EMAIL || "indoredentalhospital@gmail.com";

    console.log("Sending appointment email to:", toEmail);

    const { data: emailData, error } = await resend.emails.send({
      from: "Indore Dental Hospital <onboarding@resend.dev>",
      to: toEmail,
      subject: `New Appointment: ${formData.name} — ${formData.treatment}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">
          <h2 style="color:#0d7377;margin-top:0;">New Appointment Request</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6b7280;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;">${formData.name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Phone</td><td style="padding:8px 0;font-weight:600;">${formData.phone}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Treatment</td><td style="padding:8px 0;font-weight:600;">${formData.treatment}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Preferred Date</td><td style="padding:8px 0;font-weight:600;">${formData.date}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;vertical-align:top;">Notes</td><td style="padding:8px 0;">${formData.message || "—"}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
          <p style="color:#9ca3af;font-size:12px;margin:0;">Sent from Indore Dental Hospital website</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json({ error: "Failed to send email", details: error.message }, { status: 500 });
    }

    console.log("Appointment email sent:", emailData?.id);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Appointment submission error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
