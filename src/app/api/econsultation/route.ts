import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { smtpConfig, clinicEmail } from "@/lib/env";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name    = (formData.get("name")    as string) ?? "";
    const phone   = (formData.get("phone")   as string) ?? "";
    const email   = (formData.get("email")   as string) ?? "";
    const concern = (formData.get("concern") as string) ?? "";
    const selfie  = formData.get("selfie") as File | null;

    if (!name || name.length < 2)  return NextResponse.json({ error: "Name is required" },    { status: 400 });
    if (!phone || phone.length < 10) return NextResponse.json({ error: "Valid phone required" }, { status: 400 });
    if (!concern)                  return NextResponse.json({ error: "Concern is required" },  { status: 400 });

    const transporter = nodemailer.createTransport({
      host:   smtpConfig.host,
      port:   smtpConfig.port,
      secure: smtpConfig.secure,
      auth:   { user: smtpConfig.auth.user, pass: smtpConfig.auth.pass },
    });

    try {
      await transporter.verify();
    } catch {
      return NextResponse.json({ error: "Email service configuration error" }, { status: 500 });
    }

    const toEmail = clinicEmail || smtpConfig.auth.user;

    // Build attachments array if selfie was uploaded
    const attachments: nodemailer.SendMailOptions["attachments"] = [];
    if (selfie && selfie.size > 0) {
      const buffer = Buffer.from(await selfie.arrayBuffer());
      attachments.push({
        filename: selfie.name || "selfie.jpg",
        content:  buffer,
        contentType: selfie.type || "image/jpeg",
      });
    }

    const htmlContent = `
      <h2 style="color:#0d6e6e;">New E-Consultation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || "Not provided"}</p>
      <p><strong>Dental Concern:</strong><br/>${concern}</p>
      ${selfie && selfie.size > 0 ? "<p><strong>Selfie:</strong> Attached below</p>" : "<p><strong>Selfie:</strong> Not provided</p>"}
    `;

    await transporter.sendMail({
      from:        `"${smtpConfig.fromName}" <${smtpConfig.fromEmail || smtpConfig.auth.user}>`,
      to:          toEmail,
      subject:     `E-Consultation Request: ${name}`,
      html:        htmlContent,
      attachments,
      replyTo:     email || undefined,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("E-consultation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
