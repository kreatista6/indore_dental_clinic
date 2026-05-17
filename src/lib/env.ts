/* =============================================
   Indore Dental Hospital — Environment Config
   =============================================
   Centralized, validated access to all env vars.
   Never access process.env directly elsewhere.
   ============================================= */

function getEnvVar(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(
      `Missing required environment variable: ${key}. ` +
        `Check your .env.local file against .env.example.`
    );
  }
  return value;
}

function getOptionalEnvVar(key: string, fallback: string = ""): string {
  return process.env[key] ?? fallback;
}

/** SMTP configuration for Nodemailer — server-only */
export const smtpConfig = {
  host: getEnvVar("SMTP_HOST", "smtp.gmail.com"),
  port: parseInt(getEnvVar("SMTP_PORT", "587"), 10),
  secure: getEnvVar("SMTP_SECURE", "false") === "true",
  auth: {
    user: getEnvVar("SMTP_USER", ""),
    pass: getEnvVar("SMTP_PASSWORD", ""),
  },
  fromName: getEnvVar("SMTP_FROM_NAME", "Indore Dental Hospital"),
  fromEmail: getEnvVar("SMTP_FROM_EMAIL", ""),
} as const;

/** Clinic notification email */
export const clinicEmail = getEnvVar("CLINIC_EMAIL", "");

/** Rate limiting config */
export const rateLimitConfig = {
  maxRequests: parseInt(
    getOptionalEnvVar("RATE_LIMIT_MAX_REQUESTS", "5"),
    10
  ),
  windowMs: parseInt(
    getOptionalEnvVar("RATE_LIMIT_WINDOW_MS", "900000"),
    10
  ),
} as const;

/** Public client-safe env vars */
export const publicConfig = {
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+919XXXXXXXXX",
  googleMapsKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
