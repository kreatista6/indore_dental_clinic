import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { smtpConfig, clinicEmail } from "@/lib/env";
import * as z from "zod";

const appointmentSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  treatment: z.string().min(1),
  date: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validatedData = appointmentSchema.parse(body);

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: {
        user: smtpConfig.auth.user,
        pass: smtpConfig.auth.pass,
      },
    });

    // Determine recipient (fallback to SMTP user if clinicEmail not set)
    const toEmail = clinicEmail || smtpConfig.auth.user;

    // Verify connection configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("SMTP Connection Error:", verifyError);
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    // Prepare email HTML
    const htmlContent = `
      <h2>New Appointment Request</h2>
      <p><strong>Name:</strong> ${validatedData.name}</p>
      <p><strong>Phone:</strong> ${validatedData.phone}</p>
      <p><strong>Treatment:</strong> ${validatedData.treatment}</p>
      <p><strong>Preferred Date:</strong> ${validatedData.date}</p>
      <p><strong>Message/Notes:</strong><br/> ${validatedData.message || "N/A"}</p>
    `;

    // Send email
    await transporter.sendMail({
      from: `"${smtpConfig.fromName}" <${smtpConfig.fromEmail || smtpConfig.auth.user}>`,
      to: toEmail,
      subject: `New Appointment: ${validatedData.name} - ${validatedData.treatment}`,
      html: htmlContent,
      replyTo: validatedData.name, // Optional: might want patient's email if collected
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Appointment submission error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: (error as any).errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
