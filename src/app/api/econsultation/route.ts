import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

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
    const formData = await req.formData();

    const name    = (formData.get("name")    as string) ?? "";
    const phone   = (formData.get("phone")   as string) ?? "";
    const email   = (formData.get("email")   as string) ?? "";
    const concern = (formData.get("concern") as string) ?? "";
    const selfie  = formData.get("selfie") as File | null;

    if (!name || name.length < 2)    return NextResponse.json({ error: "Name is required" },    { status: 400 });
    if (!phone || phone.length < 10) return NextResponse.json({ error: "Valid phone required" }, { status: 400 });
    if (!concern)                    return NextResponse.json({ error: "Concern is required" },  { status: 400 });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail = process.env.CLINIC_EMAIL || "indoredentalhospital@gmail.com";

    // Build attachments if selfie provided
    const attachments: { filename: string; content: Buffer }[] = [];
    if (selfie && selfie.size > 0) {
      const buffer = Buffer.from(await selfie.arrayBuffer());
      attachments.push({ filename: selfie.name || "selfie.jpg", content: buffer });
    }

    await resend.emails.send({
      from: "Indore Dental Hospital <onboarding@resend.dev>",
      to: toEmail,
      ...(email ? { replyTo: email } : {}),
      subject: `E-Consultation Request: ${name}`,
      attachments,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">
          <h2 style="color:#0d7377;margin-top:0;">New E-Consultation Request</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6b7280;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Phone</td><td style="padding:8px 0;font-weight:600;">${phone}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Email</td><td style="padding:8px 0;">${email || "Not provided"}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;vertical-align:top;">Concern</td><td style="padding:8px 0;">${concern}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Photo</td><td style="padding:8px 0;">${selfie && selfie.size > 0 ? "Attached" : "Not provided"}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
          <p style="color:#9ca3af;font-size:12px;margin:0;">Sent from Indore Dental Hospital website — E-Consultation form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("E-consultation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
