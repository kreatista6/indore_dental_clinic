import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { appointmentConfirmationHtml } from "@/emails/appointment-confirmation";

const appointmentSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  treatment: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  message: z.string().optional(),
  consent: z.literal(true),
});

function generateReferenceId(): string {
  const datePart = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `IDH-${datePart}-${randomPart}`;
}

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
    const clinicEmail = process.env.CLINIC_EMAIL || "indoredentalhospital@gmail.com";
    const referenceId = generateReferenceId();

    const formattedDate = new Date(formData.date).toLocaleDateString("en-IN", {
      weekday: "long", year: "numeric", month: "long", day: "numeric",
    });

    // Send confirmation to the patient
    const patientHtml = appointmentConfirmationHtml({
      patientName: formData.name,
      treatment: formData.treatment,
      appointmentDate: formattedDate,
      appointmentTime: formData.time,
      referenceId,
    });

    const { error: patientError } = await resend.emails.send({
      from: "Indore Dental Hospital <onboarding@resend.dev>",
      to: formData.email,
      subject: `Appointment Confirmed — Indore Dental Hospital`,
      html: patientHtml,
    });

    if (patientError) {
      console.error("Error sending patient email:", JSON.stringify(patientError));
    }

    // Send notification to the clinic
    const { error: clinicError } = await resend.emails.send({
      from: "Indore Dental Hospital <onboarding@resend.dev>",
      to: clinicEmail,
      subject: `New Appointment: ${formData.name} — ${formData.treatment}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">
          <h2 style="color:#0d7377;margin-top:0;">New Appointment Request</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6b7280;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;">${formData.name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Phone</td><td style="padding:8px 0;font-weight:600;">${formData.phone}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Email</td><td style="padding:8px 0;font-weight:600;">${formData.email}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Treatment</td><td style="padding:8px 0;font-weight:600;">${formData.treatment}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Preferred Date</td><td style="padding:8px 0;font-weight:600;">${formData.date}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Preferred Time</td><td style="padding:8px 0;font-weight:600;">${formData.time}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;vertical-align:top;">Notes</td><td style="padding:8px 0;">${formData.message || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Consent</td><td style="padding:8px 0;font-weight:600;color:#059669;">&#10003; Obtained</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
          <p style="color:#9ca3af;font-size:12px;margin:0;">Sent from Indore Dental Hospital website — Ref: ${referenceId}</p>
        </div>
      `,
    });

    if (clinicError) {
      console.error("Error sending clinic email:", JSON.stringify(clinicError));
      return NextResponse.json({ error: "Failed to send notification", details: clinicError.message }, { status: 500 });
    }

    console.log("Appointment emails sent. Ref:", referenceId);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Appointment submission error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
