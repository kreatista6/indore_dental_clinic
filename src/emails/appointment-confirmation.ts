export interface AppointmentConfirmationProps {
  patientName: string;
  treatment: string;
  appointmentDate: string;
  appointmentTime: string;
  referenceId: string;
}

export function appointmentConfirmationHtml({
  patientName,
  treatment,
  appointmentDate,
  appointmentTime,
  referenceId,
}: AppointmentConfirmationProps): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f2f2f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;background-color:#f2f2f0;">
<tr><td align="center" style="padding:24px 16px;">
<table role="presentation" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

<!-- Header -->
<tr>
<td style="padding:24px 32px;background-color:#FAFAF8;border-bottom:1px solid #e8e8e4;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
<tr>
<td style="vertical-align:middle;width:48px;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:44px;height:44px;background-color:#0D7377;border-radius:10px;">
<tr><td align="center" style="font-size:16px;font-weight:800;color:#ffffff;letter-spacing:1px;">IDH</td></tr>
</table>
</td>
<td style="vertical-align:middle;padding-left:14px;font-size:13px;color:#6b7280;line-height:1.4;">
Indore Dental Hospital<br />Dental &middot; Aesthetics &middot; Implants &middot; Aligners
</td>
</tr>
</table>
</td>
</tr>

<!-- Hero -->
<tr>
<td style="padding:48px 32px 32px;text-align:center;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
<tr>
<td align="center" style="padding-bottom:20px;">
<table role="presentation" cellpadding="0" cellspacing="0" style="background-color:#E8F4F4;border-radius:100px;padding:6px 20px;">
<tr><td style="font-size:13px;font-weight:600;color:#0D7377;">Appointment Confirmed</td></tr>
</table>
</td>
</tr>
<tr><td style="font-size:32px;font-weight:700;color:#1f2937;line-height:1.2;padding-bottom:16px;">Your smile is in expert hands.</td></tr>
<tr><td style="font-size:15px;color:#6b7280;line-height:1.6;padding-bottom:8px;">
We&rsquo;ve reserved your time with Dr. Sugandh Shrivastava. Below are your appointment details &mdash; please keep this for your records.
</td></tr>
</table>
</td>
</tr>

<!-- Appointment Details Card -->
<tr>
<td style="padding:0 32px;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;background-color:#FAFAF8;border-radius:16px;border:1px solid #e8e8e4;overflow:hidden;">
<tr><td style="padding:20px 24px;border-bottom:1px solid #e8e8e4;font-size:14px;font-weight:700;color:#1f2937;letter-spacing:0.3px;">APPOINTMENT DETAILS</td></tr>
<tr><td style="padding:16px 24px;border-bottom:1px solid #e8e8e4;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
<tr>
<td style="font-size:14px;color:#6b7280;padding:8px 0;">Patient Name</td>
<td style="font-size:14px;font-weight:600;color:#1f2937;padding:8px 0;text-align:right;">${patientName}</td>
</tr>
<tr>
<td style="font-size:14px;color:#6b7280;padding:8px 0;">Treatment</td>
<td style="font-size:14px;font-weight:600;color:#1f2937;padding:8px 0;text-align:right;">${treatment}</td>
</tr>
<tr>
<td style="font-size:14px;color:#6b7280;padding:8px 0;">Date</td>
<td style="font-size:14px;font-weight:600;color:#1f2937;padding:8px 0;text-align:right;">${appointmentDate}</td>
</tr>
<tr>
<td style="font-size:14px;color:#6b7280;padding:8px 0;">Time</td>
<td style="font-size:14px;font-weight:600;color:#1f2937;padding:8px 0;text-align:right;">${appointmentTime}</td>
</tr>
<tr>
<td style="font-size:14px;color:#6b7280;padding:8px 0;">Doctor</td>
<td style="font-size:14px;font-weight:600;color:#1f2937;padding:8px 0;text-align:right;">Dr. Sugandh Shrivastava</td>
</tr>
<tr>
<td style="font-size:14px;color:#6b7280;padding:8px 0;">Ref. No.</td>
<td style="font-size:14px;font-weight:600;color:#1f2937;padding:8px 0;text-align:right;"><span style="font-family:monospace;color:#C9A96E;">${referenceId}</span></td>
</tr>
</table>
</td></tr>
</table>
</td>
</tr>

<!-- Info Grid -->
<tr>
<td style="padding:24px 32px 0;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
<tr>
<td style="width:33.33%;padding:0 6px;vertical-align:top;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;background-color:#FAFAF8;border-radius:12px;border:1px solid #e8e8e4;">
<tr><td align="center" style="padding:16px 12px 12px;font-size:22px;">📍</td></tr>
<tr><td align="center" style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;padding-bottom:4px;">Location</td></tr>
<tr><td align="center" style="font-size:13px;color:#1f2937;padding:0 12px 16px;line-height:1.4;">Luvkush Market, Near Aurobindo Hospital, Indore</td></tr>
</table>
</td>
<td style="width:33.33%;padding:0 6px;vertical-align:top;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;background-color:#FAFAF8;border-radius:12px;border:1px solid #e8e8e4;">
<tr><td align="center" style="padding:16px 12px 12px;font-size:22px;">🕐</td></tr>
<tr><td align="center" style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;padding-bottom:4px;">Hours</td></tr>
<tr><td align="center" style="font-size:13px;color:#1f2937;padding:0 12px 16px;line-height:1.4;">Mon&ndash;Sat: 9am&ndash;8pm<br />Sun: 10am&ndash;2pm</td></tr>
</table>
</td>
<td style="width:33.33%;padding:0 6px;vertical-align:top;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;background-color:#FAFAF8;border-radius:12px;border:1px solid #e8e8e4;">
<tr><td align="center" style="padding:16px 12px 12px;font-size:22px;">📞</td></tr>
<tr><td align="center" style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;padding-bottom:4px;">Contact</td></tr>
<tr><td align="center" style="font-size:13px;color:#1f2937;padding:0 12px 16px;line-height:1.4;">+91 99777 88837</td></tr>
</table>
</td>
</tr>
</table>
</td>
</tr>

<!-- Divider -->
<tr><td style="padding:0 32px;"><hr style="border:none;border-top:1px solid #e8e8e4;margin:28px 0 0;" /></td></tr>

<!-- Checklist -->
<tr>
<td style="padding:32px 32px 0;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
<tr><td style="font-size:16px;font-weight:700;color:#1f2937;padding-bottom:16px;">Before Your Visit</td></tr>
<tr><td style="font-size:14px;color:#4b5563;padding:6px 0;line-height:1.5;">&checkmark; Arrive 10 minutes early for paperwork and a brief pre-consultation.</td></tr>
<tr><td style="font-size:14px;color:#4b5563;padding:6px 0;line-height:1.5;">&checkmark; Bring any previous dental records or X-rays if you have them.</td></tr>
<tr><td style="font-size:14px;color:#4b5563;padding:6px 0;line-height:1.5;">&checkmark; Eat a light meal before your appointment &mdash; avoid heavy food 1 hour prior.</td></tr>
<tr><td style="font-size:14px;color:#4b5563;padding:6px 0;line-height:1.5;">&checkmark; If you have any allergies or are on medication, please inform the front desk on arrival.</td></tr>
</table>
</td>
</tr>

<!-- Divider -->
<tr><td style="padding:0 32px;"><hr style="border:none;border-top:1px solid #e8e8e4;margin:28px 0 0;" /></td></tr>

<!-- Quote -->
<tr>
<td style="padding:32px 32px 0;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;background-color:#FAFAF8;border-radius:16px;border:1px solid #e8e8e4;">
<tr><td style="padding:24px;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
<tr><td style="font-size:15px;color:#4b5563;line-height:1.7;font-style:italic;padding-bottom:12px;">
&ldquo;My goal is simple &mdash; to give every patient the healthy, beautiful smile they deserve, without fear, without pain, and without compromise.&rdquo;
</td></tr>
<tr><td style="font-size:13px;font-weight:700;color:#1f2937;">Dr. Sugandh Shrivastava</td></tr>
<tr><td style="font-size:12px;color:#6b7280;padding-top:4px;">M.D.S. &middot; F.A.G.E. (Karnataka) &middot; F.W.C.L.I. (USA) &middot; P.G.C.O.I. (Israel)</td></tr>
</table>
</td></tr>
</table>
</td>
</tr>

<!-- CTA -->
<tr>
<td style="padding:32px;text-align:center;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
<tr>
<td align="center" style="padding-bottom:16px;">
<table role="presentation" cellpadding="0" cellspacing="0">
<tr>
<td style="background-color:#0D7377;border-radius:100px;padding:14px 32px;">
<a href="https://wa.me/919977788837?text=Hello%21+I%27d+like+to+confirm+my+appointment." style="color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;display:inline-block;">Confirm via WhatsApp</a>
</td>
</tr>
</table>
</td>
</tr>
<tr><td style="font-size:14px;color:#6b7280;">Need to reschedule? <a href="tel:+919977788837" style="color:#0D7377;text-decoration:underline;">Call +91 99777 88837</a></td></tr>
<tr><td style="font-size:14px;color:#6b7280;padding-top:4px;">or email <a href="mailto:indoredentalhospital@gmail.com" style="color:#0D7377;text-decoration:underline;">indoredentalhospital@gmail.com</a></td></tr>
</table>
</td>
</tr>

<!-- Footer -->
<tr>
<td style="background-color:#1f2937;padding:32px;text-align:center;">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
<tr><td style="font-size:16px;font-weight:700;color:#ffffff;padding-bottom:16px;">Indore Dental Hospital</td></tr>
<tr>
<td style="padding-bottom:20px;">
<a href="https://indore-dental-clinic.vercel.app/" style="color:#9ca3af;text-decoration:none;font-size:13px;padding:0 10px;">Home</a>
<a href="https://indore-dental-clinic.vercel.app/services" style="color:#9ca3af;text-decoration:none;font-size:13px;padding:0 10px;">Services</a>
<a href="https://indore-dental-clinic.vercel.app/smile-gallery" style="color:#9ca3af;text-decoration:none;font-size:13px;padding:0 10px;">Gallery</a>
<a href="https://indore-dental-clinic.vercel.app/contact" style="color:#9ca3af;text-decoration:none;font-size:13px;padding:0 10px;">Contact</a>
</td>
</tr>
<tr><td style="font-size:13px;color:#9ca3af;line-height:1.6;padding-bottom:20px;">
Luvkush Market, Near Aurobindo Hospital, Indore, M.P.<br />
<a href="tel:+919977788837" style="color:#9ca3af;text-decoration:underline;">+91 99777 88837</a> &middot; <a href="mailto:indoredentalhospital@gmail.com" style="color:#9ca3af;text-decoration:underline;">indoredentalhospital@gmail.com</a>
</td></tr>
<tr><td style="font-size:12px;color:#6b7280;line-height:1.6;border-top:1px solid #374151;padding-top:20px;">
You&rsquo;re receiving this because you booked an appointment at Indore Dental Hospital.<br />
&copy; 2026 Indore Dental Hospital. All rights reserved.<br />
<a href="https://indore-dental-clinic.vercel.app/privacy-policy" style="color:#6b7280;text-decoration:underline;">Privacy Policy</a> &middot; <a href="https://indore-dental-clinic.vercel.app/terms" style="color:#6b7280;text-decoration:underline;">Terms of Service</a>
</td></tr>
</table>
</td>
</tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}
