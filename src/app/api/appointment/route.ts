import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { appointmentConfirmationHtml, clinicNotificationHtml } from "@/emails/appointment-confirmation";
import { CLINIC_NAME } from "@/lib/constants";

export const runtime = "nodejs";

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

    if (!process.env.RESEND_FROM_EMAIL) {
      console.error("RESEND_FROM_EMAIL is not set");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const clinicEmail = process.env.CLINIC_EMAIL;
    if (!clinicEmail) {
      console.error("CLINIC_EMAIL is not set");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const sender = `${CLINIC_NAME} <${process.env.RESEND_FROM_EMAIL}>`;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const referenceId = generateReferenceId();

    const formattedDate = new Date(formData.date).toLocaleDateString("en-IN", {
      weekday: "long", year: "numeric", month: "long", day: "numeric",
    });

    // Send confirmation to the patient
    const patientHtml = appointmentConfirmationHtml({
      patientName: formData.name,
      phone: formData.phone,
      email: formData.email,
      treatment: formData.treatment,
      appointmentDate: formattedDate,
      appointmentTime: formData.time,
      message: formData.message,
      siteUrl,
    });

    const { error: patientError } = await resend.emails.send({
      from: sender,
      to: formData.email,
      subject: `Appointment Confirmed — Indore Dental Hospital`,
      html: patientHtml,
    });

    if (patientError) {
      console.error("Error sending patient email:", JSON.stringify(patientError));
    }

    // Send notification to the clinic
    const clinicHtml = clinicNotificationHtml({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      treatment: formData.treatment,
      date: formData.date,
      time: formData.time,
      message: formData.message,
      referenceId,
      siteUrl,
    });

    const { error: clinicError } = await resend.emails.send({
      from: sender,
      to: clinicEmail,
      subject: `New Appointment: ${formData.name} — ${formData.treatment}`,
      html: clinicHtml,
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
