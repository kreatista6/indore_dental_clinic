import { CLINIC_NAME, CLINIC_ADDRESSES, CLINIC_PHONE, CLINIC_EMAIL, DOCTOR, CLINIC_TIMINGS } from "@/lib/constants";

export interface AppointmentConfirmationProps {
  patientName: string;
  phone: string;
  email: string;
  treatment: string;
  appointmentDate: string;
  appointmentTime: string;
  message?: string;
  siteUrl: string;
}

export interface ClinicNotificationProps {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  date: string;
  time: string;
  message?: string;
  referenceId: string;
  siteUrl: string;
}

const hoursText = CLINIC_TIMINGS.map(t => `${t.days}: ${t.hours}`).join("<br>");
const credentialsText = DOCTOR.credentials.join(" · ");
const phoneDigits = CLINIC_PHONE.replace(/\s+/g, "");
const whatsappUrl = `https://wa.me/${phoneDigits.replace(/[^0-9]/g, "")}?text=Hello%21+I%27d+like+to+confirm+my+appointment.`;

export function appointmentConfirmationHtml({
  patientName,
  phone,
  email,
  treatment,
  appointmentDate,
  appointmentTime,
  message,
  siteUrl,
}: AppointmentConfirmationProps): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Appointment Confirmed – ${CLINIC_NAME}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Inter', Arial, sans-serif;
    background-color: #0d0d0d;
    color: #e8e0d5;
    -webkit-font-smoothing: antialiased;
  }
  .email-wrapper { background-color: #0d0d0d; padding: 40px 16px; }
  .email-container { max-width: 600px; margin: 0 auto; background-color: #141414; border: 1px solid #2a2520; border-radius: 4px; overflow: hidden; }
  .header { background-color: #0f0f0f; border-bottom: 1px solid #2a2520; padding: 32px 40px 28px; text-align: center; }
  .logo-mark { display: inline-block; width: 48px; height: 48px; background: linear-gradient(135deg, #c9a96e 0%, #a07840 100%); border-radius: 50%; margin-bottom: 16px; line-height: 48px; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 22px; font-weight: 700; color: #0f0f0f; }
  .logo-name { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 20px; font-weight: 600; color: #e8e0d5; letter-spacing: 0.06em; display: block; }
  .logo-sub { font-size: 10px; font-weight: 500; color: #7a6e63; letter-spacing: 0.18em; text-transform: uppercase; display: block; margin-top: 4px; }
  .hero { background: linear-gradient(160deg, #1a1510 0%, #0f1a18 60%, #101a14 100%); padding: 44px 40px 40px; text-align: center; border-bottom: 1px solid #1e2e2a; }
  .hero::before { content: ''; display: block; width: 60px; height: 2px; background: linear-gradient(90deg, transparent, #c9a96e, transparent); margin: 0 auto 28px; }
  .hero-badge { display: inline-block; background-color: rgba(201, 169, 110, 0.1); border: 1px solid rgba(201, 169, 110, 0.3); color: #c9a96e; font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; padding: 5px 14px; border-radius: 2px; margin-bottom: 20px; }
  .hero-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 36px; font-weight: 700; color: #f0e8db; line-height: 1.2; margin-bottom: 12px; letter-spacing: -0.01em; }
  .hero-subtitle { font-size: 14px; font-weight: 300; color: #7a6e63; line-height: 1.7; max-width: 400px; margin: 0 auto; }
  .appt-card { margin: 0 40px; background-color: #1a1a1a; border: 1px solid #2a2520; border-top: 2px solid #c9a96e; border-radius: 3px; padding: 28px; margin-top: -1px; }
  .appt-card-label { font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: #c9a96e; margin-bottom: 20px; }
  .appt-row { display: table; width: 100%; padding: 12px 0; border-bottom: 1px solid #222; }
  .appt-row:last-child { border-bottom: none; }
  .appt-key { display: table-cell; font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #5a5048; width: 40%; vertical-align: middle; }
  .appt-val { display: table-cell; font-size: 14px; font-weight: 400; color: #d4c9bc; vertical-align: middle; text-align: right; }
  .appt-val strong { font-weight: 600; color: #e8e0d5; }
  .body-section { padding: 36px 40px; }
  .body-text { font-size: 14px; font-weight: 300; color: #8a7e73; line-height: 1.75; }
  .info-grid { padding: 24px 40px 0; }
  .info-grid-inner { display: table; width: 100%; border-spacing: 0; }
  .info-card { display: table-cell; width: 33.33%; background-color: #181818; border: 1px solid #242424; border-radius: 3px; padding: 18px 16px; vertical-align: top; }
  .info-card + .info-card { border-left: none; }
  .info-icon { font-size: 20px; margin-bottom: 10px; display: block; }
  .info-card-label { font-size: 10px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #5a5048; margin-bottom: 6px; }
  .info-card-value { font-size: 12px; font-weight: 400; color: #c4b8ab; line-height: 1.5; }
  .divider { margin: 0 40px; border: none; border-top: 1px solid #1e1e1e; }
  .cta-section { padding: 36px 40px; text-align: center; }
  .cta-button { display: inline-block; background: linear-gradient(135deg, #c9a96e 0%, #a07840 100%); color: #0f0f0f; font-family: 'Inter', Arial, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; padding: 14px 36px; border-radius: 2px; margin-bottom: 16px; }
  .cta-secondary { display: block; font-size: 12px; color: #5a5048; margin-top: 12px; }
  .cta-secondary a { color: #c9a96e; text-decoration: none; }
  .footer { background-color: #0f0f0f; border-top: 1px solid #1e1e1e; padding: 32px 40px; text-align: center; }
  .footer-logo { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 16px; font-weight: 600; color: #4a4038; letter-spacing: 0.06em; margin-bottom: 16px; }
  .footer-links { margin-bottom: 20px; }
  .footer-links a { font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #5a5048; text-decoration: none; margin: 0 10px; }
  .footer-contact { font-size: 12px; color: #3a342e; line-height: 1.7; margin-bottom: 20px; }
  .footer-contact a { color: #5a5048; text-decoration: none; }
  .footer-legal { font-size: 11px; color: #2e2a25; line-height: 1.6; }
  .footer-legal a { color: #3a342e; text-decoration: underline; }
  @media only screen and (max-width: 500px) {
    .header, .hero, .body-section, .cta-section, .info-grid, .footer { padding-left: 20px !important; padding-right: 20px !important; }
    .appt-card { margin-left: 20px !important; margin-right: 20px !important; padding: 20px !important; }
    .hero-title { font-size: 28px !important; }
    .info-grid-inner { display: block !important; }
    .info-card { display: block !important; width: 100% !important; border-left: 1px solid #242424 !important; margin-bottom: 8px !important; }
    .divider { margin-left: 20px !important; margin-right: 20px !important; }
  }
</style>
</head>
<body>
<div class="email-wrapper">
<div class="email-container">

  <div class="header">
    <div class="logo-mark">I</div>
    <span class="logo-name">${CLINIC_NAME}</span>
    <span class="logo-sub">Dental · Aesthetics · Implants · Aligners</span>
  </div>

  <div class="hero">
    <div class="hero-badge">Appointment Confirmed</div>
    <div class="hero-title">Your smile is<br>in expert hands.</div>
    <p class="hero-subtitle">We've reserved your time with ${DOCTOR.nameEn}. Below are your appointment details — please keep this for your records.</p>
  </div>

  <div class="appt-card">
    <div class="appt-card-label">Appointment Details</div>

    <div class="appt-row">
      <span class="appt-key">Patient Name</span>
      <span class="appt-val"><strong>${patientName}</strong></span>
    </div>
    <div class="appt-row">
      <span class="appt-key">Phone</span>
      <span class="appt-val">${phone}</span>
    </div>
    <div class="appt-row">
      <span class="appt-key">Email</span>
      <span class="appt-val">${email}</span>
    </div>
    <div class="appt-row">
      <span class="appt-key">Treatment</span>
      <span class="appt-val">${treatment}</span>
    </div>
    <div class="appt-row">
      <span class="appt-key">Date</span>
      <span class="appt-val"><strong>${appointmentDate}</strong></span>
    </div>
    <div class="appt-row">
      <span class="appt-key">Time</span>
      <span class="appt-val"><strong>${appointmentTime}</strong></span>
    </div>
    ${message ? `
    <div class="appt-row">
      <span class="appt-key">Notes</span>
      <span class="appt-val">${message}</span>
    </div>` : ''}
    <div class="appt-row">
      <span class="appt-key">Doctor</span>
      <span class="appt-val">${DOCTOR.nameEn}</span>
    </div>
  </div>

  <div class="info-grid">
    <div class="info-grid-inner">
      <div class="info-card">
        <span class="info-icon">📍</span>
        <div class="info-card-label">Location</div>
        <div class="info-card-value">${CLINIC_ADDRESSES.map(l => `${l.name}: ${l.address}`).join("<br>")}</div>
      </div>
      <div class="info-card">
        <span class="info-icon">🕐</span>
        <div class="info-card-label">Hours</div>
        <div class="info-card-value">${hoursText}</div>
      </div>
      <div class="info-card">
        <span class="info-icon">📞</span>
        <div class="info-card-label">Contact</div>
        <div class="info-card-value">${CLINIC_PHONE}</div>
      </div>
    </div>
  </div>

  <hr class="divider" />

  <div class="cta-section">
    <a href="${whatsappUrl}" class="cta-button">Confirm via WhatsApp</a>
    <p class="cta-secondary">Need to reschedule? <a href="tel:${phoneDigits}">Call ${CLINIC_PHONE}</a></p>
    <p class="cta-secondary" style="margin-top: 6px;">or email <a href="mailto:${CLINIC_EMAIL}">${CLINIC_EMAIL}</a></p>
  </div>

  <div class="footer">
    <div class="footer-logo">${CLINIC_NAME}</div>
    <div class="footer-links">
      <a href="${siteUrl}/">Home</a>
      <a href="${siteUrl}/services">Services</a>
      <a href="${siteUrl}/smile-gallery">Gallery</a>
      <a href="${siteUrl}/contact">Contact</a>
    </div>
    <div class="footer-contact">
      ${CLINIC_ADDRESSES.map(l => l.address).join(" | ")}<br>
      <a href="tel:${phoneDigits}">${CLINIC_PHONE}</a> &nbsp;·&nbsp;
      <a href="mailto:${CLINIC_EMAIL}">${CLINIC_EMAIL}</a>
    </div>
    <div class="footer-legal">
      You're receiving this because you booked an appointment at ${CLINIC_NAME}.<br>
      © 2026 ${CLINIC_NAME}. All rights reserved.<br>
      <a href="${siteUrl}/privacy-policy">Privacy Policy</a> &nbsp;·&nbsp;
      <a href="${siteUrl}/terms">Terms of Service</a>
    </div>
  </div>

</div>
</div>
</body>
</html>`;
}

export function clinicNotificationHtml({
  name,
  phone,
  email,
  treatment,
  date,
  time,
  message,
  referenceId,
  siteUrl,
}: ClinicNotificationProps): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Appointment – ${CLINIC_NAME}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Inter', Arial, sans-serif;
    background-color: #0d0d0d;
    color: #e8e0d5;
    -webkit-font-smoothing: antialiased;
  }
  .wrapper { background-color: #0d0d0d; padding: 32px 16px; }
  .container { max-width: 520px; margin: 0 auto; background-color: #141414; border: 1px solid #2a2520; border-radius: 4px; overflow: hidden; }
  .header { background-color: #0f0f0f; border-bottom: 1px solid #2a2520; padding: 24px 32px 20px; text-align: center; }
  .logo-mark {
    display: inline-block; width: 40px; height: 40px;
    background: linear-gradient(135deg, #c9a96e 0%, #a07840 100%);
    border-radius: 50%; line-height: 40px;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 18px; font-weight: 700; color: #0f0f0f; margin-bottom: 12px;
  }
  .logo-name { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 17px; font-weight: 600; color: #e8e0d5; letter-spacing: 0.06em; display: block; }
  .hero { padding: 32px 32px 28px; text-align: center; border-bottom: 1px solid #1e2e2a; }
  .hero-badge {
    display: inline-block;
    background-color: rgba(201, 169, 110, 0.1);
    border: 1px solid rgba(201, 169, 110, 0.3);
    color: #c9a96e;
    font-size: 9px; font-weight: 600; letter-spacing: 0.2em;
    text-transform: uppercase; padding: 4px 12px; border-radius: 2px; margin-bottom: 14px;
  }
  .hero-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 28px; font-weight: 700; color: #f0e8db;
    line-height: 1.2; margin-bottom: 8px;
  }
  .hero-subtitle { font-size: 13px; font-weight: 300; color: #7a6e63; }
  .card { margin: 0 32px; background-color: #1a1a1a; border: 1px solid #2a2520; border-top: 2px solid #c9a96e; border-radius: 3px; padding: 24px; margin-top: -1px; }
  .row { display: table; width: 100%; padding: 10px 0; border-bottom: 1px solid #222; }
  .row:last-child { border-bottom: none; }
  .key { display: table-cell; font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #5a5048; width: 38%; vertical-align: middle; }
  .val { display: table-cell; font-size: 13px; font-weight: 400; color: #d4c9bc; vertical-align: middle; text-align: right; }
  .val strong { font-weight: 600; color: #e8e0d5; }
  .consent-badge {
    display: inline-block;
    font-size: 9px; font-weight: 600; letter-spacing: 0.1em;
    color: #4a9e6b; border: 1px solid rgba(74, 158, 107, 0.3);
    background-color: rgba(74, 158, 107, 0.08);
    padding: 2px 8px; border-radius: 2px;
  }
  .footer { background-color: #0f0f0f; border-top: 1px solid #1e1e1e; padding: 20px 32px; text-align: center; }
  .footer-ref { font-family: 'Courier New', monospace; font-size: 11px; color: #4a4038; letter-spacing: 0.03em; margin-bottom: 12px; }
  .footer-meta { font-size: 10px; color: #2e2a25; }
  @media only screen and (max-width: 500px) {
    .header, .hero, .card, .footer { padding-left: 20px !important; padding-right: 20px !important; }
    .card { margin-left: 20px !important; margin-right: 20px !important; }
  }
</style>
</head>
<body>
<div class="wrapper">
<div class="container">

  <div class="header">
    <div class="logo-mark">I</div>
    <span class="logo-name">${CLINIC_NAME}</span>
  </div>

  <div class="hero">
    <div class="hero-badge">New Booking</div>
    <div class="hero-title">A patient just booked in.</div>
    <p class="hero-subtitle">Review the details below and reach out to confirm the appointment.</p>
  </div>

  <div class="card">
    <div class="row">
      <span class="key">Name</span>
      <span class="val"><strong>${name}</strong></span>
    </div>
    <div class="row">
      <span class="key">Phone</span>
      <span class="val"><strong>${phone}</strong></span>
    </div>
    <div class="row">
      <span class="key">Email</span>
      <span class="val">${email}</span>
    </div>
    <div class="row">
      <span class="key">Treatment</span>
      <span class="val">${treatment}</span>
    </div>
    <div class="row">
      <span class="key">Date</span>
      <span class="val"><strong>${date}</strong></span>
    </div>
    <div class="row">
      <span class="key">Time</span>
      <span class="val"><strong>${time}</strong></span>
    </div>
    ${message ? `
    <div class="row">
      <span class="key">Notes</span>
      <span class="val">${message}</span>
    </div>` : ''}
    <div class="row">
      <span class="key">Consent</span>
      <span class="val"><span class="consent-badge">&#10003; Obtained</span></span>
    </div>
  </div>

  <div class="footer">
    <div class="footer-ref">${referenceId}</div>
    <div class="footer-meta">Booked via ${siteUrl.replace(/https?:\/\//, "")}</div>
  </div>

</div>
</div>
</body>
</html>`;
}
