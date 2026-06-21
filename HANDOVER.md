# Indore Dental Hospital — Project Handover

> **Version:** 1.0.0 (Initial Production Release)
> **Date:** June 2026
> **Developer:** Kreatista6

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Live URLs](#2-live-urls)
3. [Technology Stack](#3-technology-stack)
4. [Source Code & GitHub](#4-source-code--github)
5. [Environment Variables](#5-environment-variables)
6. [Service Accounts & Access](#6-service-accounts--access)
7. [Project File Structure](#7-project-file-structure)
8. [How to Make Common Changes](#8-how-to-make-common-changes)
9. [Deployment Process](#9-deployment-process)
10. [Credentials Summary](#10-credentials-summary)

---

## 1. Project Overview

A fully custom, production-ready dental clinic website built for **Indore Dental Hospital**, Indore, Madhya Pradesh. The website includes:

- **11 pages**: Home, About, Services (listing + 8 detail pages), Smile Gallery, Blog (listing + 3 articles), Contact, Privacy Policy, Terms of Use
- **Lead generation**: Appointment booking form, e-consultation with photo upload, WhatsApp float button
- **Email system**: Patient confirmation emails + clinic notifications via Resend
- **SEO optimized**: Schema.org structured data, metadata API, auto-generated sitemap

---

## 2. Live URLs

| Resource | URL |
|----------|-----|
| **Production website** | `https://indoredental.co.in` |
| **Vercel preview** | `https://indore-dental-clinic.vercel.app` |
| **GitHub repository** | `https://github.com/kreatista6/indore_dental_clinic` |

---

## 3. Technology Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 16** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS v4** |
| Animations | **Framer Motion** |
| 3D Graphics | **Three.js** via React Three Fiber & Drei |
| Icons | Lucide React + Phosphor Icons |
| Forms | React Hook Form + Zod validation |
| Email | **Resend** (transactional email API) |
| Fonts | Plus Jakarta Sans + DM Sans (Google Fonts) |
| Hosting | **Vercel** (auto-deploys from GitHub) |
| Domain | **GoDaddy** (`indoredental.co.in`) |
| Email subdomain | **Resend** verified (`mail.indoredental.co.in`) |

---

## 4. Source Code & GitHub

### Repository
- **URL:** `https://github.com/kreatista6/indore_dental_clinic`
- **Branch:** `main` — production branch, auto-deploys to Vercel
- **Tag:** `v1.0.0` — initial production release

### Cloning the Project
```bash
git clone https://github.com/kreatista6/indore_dental_clinic.git
cd indore_dental_clinic
npm install
```

### Running Locally
```bash
npm run dev
# Opens at http://localhost:3000
```

### Building for Production
```bash
npm run build
npm start
```

---

## 5. Environment Variables

These must be set in **Vercel Dashboard → Project → Environment Variables** and in a local `.env.local` file for development.

| Variable | Required | Purpose | Where to Get It |
|---|---|---|---|
| `RESEND_API_KEY` | ✅ Yes | Sends transactional emails | Resend Dashboard → API Keys |
| `RESEND_FROM_EMAIL` | ✅ Yes | Sender address for all emails | Must be at a domain verified in Resend (currently `appointments@mail.indoredental.co.in`) |
| `CLINIC_EMAIL` | ✅ Yes | Where clinic notifications are sent | The clinic's actual inbox (currently `indoredentalhospital@gmail.com`) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | ✅ Yes | WhatsApp float button number | With country code, no spaces (currently `+919977788837`) |
| `NEXT_PUBLIC_SITE_URL` | ⚠️ Optional | Used in email footer links / sitemap | Production URL (`https://indoredental.co.in`) |
| `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | ⚠️ Optional | Embedded Google Maps | Google Cloud Console → APIs & Services |
| `NEXT_PUBLIC_GA_ID` | ⚠️ Optional | Google Analytics tracking | Google Analytics → Admin → Data Streams |

### Example `.env.local`
```env
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM_EMAIL=appointments@mail.indoredental.co.in
CLINIC_EMAIL=indoredentalhospital@gmail.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+919977788837
NEXT_PUBLIC_SITE_URL=https://indoredental.co.in
NEXT_PUBLIC_GOOGLE_MAPS_KEY=
NEXT_PUBLIC_GA_ID=
```

---

## 6. Service Accounts & Access

### 6.1 Vercel
- **Purpose:** Hosts the website, manages env vars, auto-deploys from GitHub
- **Access needed:** Login credentials or add as team member
- **Key actions:**
  - View deployment logs: Dashboard → Project → Functions → select API route
  - Update env vars: Dashboard → Project → Settings → Environment Variables
  - Add custom domain: Dashboard → Project → Settings → Domains
  - Trigger manual deploy: Dashboard → Project → Deployments → Redeploy

### 6.2 Resend
- **Purpose:** Sends transactional emails (appointment confirmations, clinic notifications, e-consultation)
- **Access needed:** Login credentials or add as team member
- **Key actions:**
  - View email logs: Dashboard → Logs
  - Create API key: Dashboard → API Keys
  - Add/verify domain: Dashboard → Domains
  - Check email delivery status: Dashboard → Logs

### 6.3 GoDaddy
- **Purpose:** Domain registration (`indoredental.co.in`) and DNS management
- **Access needed:** Login credentials
- **Key actions:**
  - Manage DNS records: My Products → Domain → DNS
  - Current DNS records:
    - `mail` subdomain TXT + CNAME records (for Resend verification)
    - `@` CNAME pointing to `cname.vercel.com` (for website hosting)

### 6.4 GitHub
- **Purpose:** Source code repository
- **Access needed:** Add as collaborator or transfer repo
- **Key actions:**
  - Push code changes: `git push origin main`
  - View commit history: Repository → Insights → Network

---

## 7. Project File Structure

```
indore_dental_clinic/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Home page
│   │   ├── layout.tsx                  # Root layout (all pages share this)
│   │   ├── globals.css                 # Global styles, CSS variables, animations
│   │   ├── about/page.tsx              # About page
│   │   ├── contact/page.tsx            # Contact page
│   │   ├── privacy-policy/page.tsx     # Privacy Policy
│   │   ├── terms/page.tsx              # Terms of Use
│   │   ├── services/
│   │   │   ├── page.tsx                # All 8 services listing
│   │   │   └── [slug]/page.tsx         # Individual service detail (8 pages)
│   │   ├── smile-gallery/page.tsx      # Before/after comparison gallery
│   │   ├── blog/
│   │   │   ├── page.tsx                # Blog listing
│   │   │   └── [slug]/page.tsx         # Individual blog post (3 articles)
│   │   ├── sitemap.ts                  # Auto-generated sitemap
│   │   └── api/
│   │       ├── appointment/route.ts    # Appointment form → Resend
│   │       └── econsultation/route.ts  # E-consultation + photo upload → Resend
│   │
│   ├── components/
│   │   ├── home/                       # Homepage sections (Hero, TrustStats, etc.)
│   │   ├── layout/                     # Navbar, Footer, WhatsApp float, e-consult float
│   │   ├── seo/                        # Schema.org structured data
│   │   └── ui/                         # Reusable: Button, Input, SectionHeading, etc.
│   │
│   ├── emails/
│   │   └── appointment-confirmation.ts # Both email templates (patient + clinic)
│   │
│   └── lib/
│       ├── constants.ts                ★ ALL clinic content (single source of truth)
│       ├── services-data.ts            ★ ALL 8 service content
│       ├── blog-data.ts                ★ Blog post content
│       ├── env.ts                      # Environment config
│       ├── rate-limit.ts               # Rate limiting for API routes
│       └── utils.ts                    # Utility functions (cn helper)
│
├── public/
│   ├── logo.png                        # Clinic logo
│   ├── molar_tooth.glb                 # 3D tooth model (Three.js)
│   ├── doctor/                         # Doctor photos
│   ├── clinic/                         # Clinic interior photos
│   ├── services/                       # Service images
│   ├── gallery/                        # Before/after patient photos
│   └── blog/                           # Blog post images
│
├── .env.example                        # Environment variable template
├── PROJECT_PROPOSAL.md                 ★ Full project specification
├── HANDOVER.md                         # This document
├── AGENTS.md / CLAUDE.md               # AI assistant configuration
└── next.config.ts                      # Next.js configuration
```

### Key Files Marked ★

These are the files you'll edit most often:

| File | What to Change |
|---|---|
| `src/lib/constants.ts` | Clinic name, address, phone, email, doctor details, testimonials, FAQs |
| `src/lib/services-data.ts` | Service titles, descriptions, benefits, procedure steps, images |
| `src/lib/blog-data.ts` | Blog post content, authors, images |
| `src/emails/appointment-confirmation.ts` | Email design and content for patient + clinic emails |

---

## 8. How to Make Common Changes

### 8.1 Update Clinic Phone Number
1. Open `src/lib/constants.ts`
2. Change `CLINIC_PHONE` value
3. Push to GitHub → Vercel auto-deploys

### 8.2 Update Doctor Details
1. Open `src/lib/constants.ts`
2. Edit the `DOCTOR` object (name, title, credentials)
3. Replace photo in `public/doctor/` folder
4. Push to GitHub

### 8.3 Add / Edit a Service
1. Open `src/lib/services-data.ts`
2. Add/modify an entry in the `SERVICES_DATA` array
3. Add a new image to `public/services/`
4. Push to GitHub
5. The service will automatically appear on `/services` and in the footer

### 8.4 Remove a Service
1. Open `src/lib/services-data.ts`
2. Remove the entry from the `SERVICES_DATA` array
3. Open `src/app/services/[slug]/page.tsx`
4. Remove the slug from the `ACTIVE_SLUGS` array
5. Push to GitHub

### 8.5 Change Email Template Design
1. Open `src/emails/appointment-confirmation.ts`
2. Edit the HTML/CSS in the template functions
3. Push to GitHub
4. **Important:** Email templates use inline styles (not classes) for email client compatibility

### 8.6 Update Testimonials or FAQs
1. Open `src/lib/constants.ts`
2. Edit the `TESTIMONIALS` or `COMMON_FAQS` array
3. Push to GitHub

### 8.7 Replace Before/After Photos
1. Add images to `public/gallery/`
2. Open `src/app/smile-gallery/page.tsx`
3. Update the image paths in the gallery cases
4. Push to GitHub

### 8.8 Change Colors or Fonts
1. Open `src/app/globals.css`
2. Edit the `@theme` block (`--color-primary`, `--font-heading`, etc.)
3. Push to GitHub

---

## 9. Deployment Process

### Automatic (Recommended)
The site is connected to Vercel via GitHub. Any push to the `main` branch triggers an automatic deployment:

```bash
git add .
git commit -m "Description of changes"
git push origin main
# Vercel auto-deploys in ~2 minutes
```

### Manual via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) → Dashboard → indore-dental-clinic
2. Click **Deployments** → latest deployment → **Redeploy**

### Manual via CLI
```bash
npx vercel --prod
```

### Checking Deployment Status
- Vercel Dashboard → **Deployments** — shows each deploy with status (Building, Ready, Failed)
- On failure, click the deployment → **Functions** → find the failed route → **Logs**

---

## 10. Credentials Summary

| Service | Username / Email | Password | URL |
|---|---|---|---|
| Vercel | _[client to fill]_ | _[client to fill]_ | https://vercel.com |
| Resend | _[client to fill]_ | _[client to fill]_ | https://resend.com |
| GoDaddy | _[client to fill]_ | _[client to fill]_ | https://godaddy.com |
| GitHub | _[client to fill]_ | _[client to fill]_ | https://github.com/kreatista6/indore_dental_clinic |

> ⚠️ **Security Best Practice:** After handover, all passwords should be changed to values only the client knows. Use a password manager (1Password, Bitwarden, or LastPass) to share credentials securely instead of sending them via email or chat.

---

## Appendix: DNS Records Summary

These records are currently set in GoDaddy DNS for `indoredental.co.in`:

| Type | Name | Value | Purpose |
|---|---|---|---|
| CNAME | `@` | `cname.vercel.com` | Points website to Vercel hosting |
| TXT | `mail` | `resend-verification=...` | Resend domain verification |
| CNAME | `resend-dkim-1.mail` | `resend-dkim-1.resend.com` | Resend DKIM signature |
| CNAME | `resend-dkim-2.mail` | `resend-dkim-2.resend.com` | Resend DKIM signature |

---

*Document prepared for: Indore Dental Hospital*
*Prepared by: Kreatista6*
*Date: June 2026*
*Version: 1.0.0*
