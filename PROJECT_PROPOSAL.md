# Indore Dental Hospital — Website Project Proposal

---

## Project Overview

A fully custom, production-ready dental clinic website built for **Indore Dental Hospital**, Indore, Madhya Pradesh. The website is designed to establish a premium digital presence, generate patient leads, and rank on Google for local dental searches.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 16** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS v4** |
| Animations | **Framer Motion / Motion** |
| 3D Graphics | **Three.js** via React Three Fiber & Drei |
| Icons | Lucide React + Phosphor Icons (ssr) |
| Forms | React Hook Form + Zod validation |
| Email | **Resend** (transactional email API) |
| Font | Plus Jakarta Sans + DM Sans (Google Fonts) |
| Deployment-ready | Vercel / any Node.js host |

---

## Pages Delivered

### 1. Home Page (`/`)
The homepage is a full marketing landing page with the following sections in order:

- **Hero** — Full-screen section with animated 3D interactive tooth model (Three.js), headline, CTA buttons, and a floating social proof badge (4.9/5 rating)
- **Free Consultation Banner** — Gold ribbon with shimmer animation offering a free consultation, placed between Hero and TrustStats
- **Trust Stats** — Animated counters: 14+ Years Experience, 15k+ Happy Patients, 25k+ Treatments, 100+ Tech Equipped
- **Why Choose Us** — 6-card grid highlighting Advanced 3D Technology, Sterilization, Pain-Free Approach, Premium Materials, Zero Wait Time, Emergency Care
- **Services Overview** — 8 service cards with mobile swipe gesture (touchStart/touchEnd with 50px threshold), "View all 8 treatments" link
- **Meet The Doctor** — Dr. Sugandh's profile with credentials, bio, and floating quote badge
- **Real Patient Results** — Before/after smile comparison slider preview (2 cases) with link to full gallery
- **Testimonials** — Patient review cards with name, treatment, rating, and avatar
- **Book Appointment CTA** — Full appointment request form with treatment selector, date picker, time picker, email field, and privacy consent checkbox
- **FAQ Section** — Common patient questions with expandable answers
- **Location & Timings** — Clinic address, operating hours, phone, email, and embedded Google Maps

### 2. Services Listing (`/services`)
- Grid of **8 treatment cards** with image, title, short description, and "Learn More" link
- **Flexbox centered last row** — uses `flex flex-wrap justify-center` with calc-based widths so the final row is centered (no excessive empty space)
- Bigger text sizes (`text-xl` title, `text-base` description)

### 3. Service Detail Pages (`/services/[slug]`) — 8 pages
Each treatment has a dedicated SEO-optimised page with:
- Full-width hero image with breadcrumb navigation and category badge
- **What is [Treatment]?** — Full description
- **Key Benefits** — 2-column benefit cards with checkmarks
- **How is it Done?** — Numbered step-by-step procedure
- **FAQs** — 6 real patient questions with detailed answers (covering cost in ₹, pain, duration, alternatives)
- **Sticky Sidebar** — Book consultation CTA card + WhatsApp link + Other Treatments navigation
- Appointment booking form at the bottom

**All 8 treatments covered:**
1. Dental Implants
2. Painless Root Canal
3. Advanced Teeth Whitening
4. Braces / Orthodontics
5. Pediatric Dentistry
6. Painless Tooth Extraction
7. Implant-Supported Complete Dentures
8. Gum Treatment

### 4. Smile Gallery (`/smile-gallery`)
- Before/after comparison sliders for patient cases
- Drag-to-compare interaction — slider starts at 30% to showcase the "after" result
- Category labels per case (Implants, Smile Makeover, Whitening, Veneers)
- Ready to replace with real patient photos

### 5. About (`/about`)
- **Hero Banner** — Dark blue section (`#235b7a`) with:
  - **Mobile**: Circular doctor avatar (left) + name in gold accent, title, credential pills (MDS, FWCLI, PGCOI, PGCAE, FAGE), experience text below
  - **Desktop**: Text block (name, title, badges, experience) with a large floating photo card (`h-64 w-64`, rounded-2xl, bordered) positioned independently on the right
- Clinic story and founding philosophy with interior image
- Meet The Doctor section with full credentials and clinic gallery
- CTA section linking to contact page

### 6. Contact (`/contact`)
- Full appointment booking form (name, phone, email, treatment, date, time, message, consent checkbox)
- "Need immediate help?" tappable call card (entire card is a tel: link, hover changes color)
- Location map, address, phone, email, operating hours
- Form submits via Resend email to clinic inbox

### 7. Privacy Policy (`/privacy-policy`)
- Comprehensive privacy policy covering data collection, GDPR legal bases, data sharing, retention, user rights, cookies, security
- Contact section with clinic address, phone, email

### 8. Terms of Use (`/terms`)
- Terms covering medical disclaimer, appointment booking rules, user conduct, intellectual property, liability limitation, governing law (India / Indore jurisdiction)
- Contact section with clinic details

### 9. Blog (`/blog` + `/blog/[slug]`)
- Blog listing page with post cards (cover image, category, author, read time)
- Individual post pages with hero image, author info, and content area
- Ready to connect to a CMS (Sanity, Contentful, WordPress)

---

## Key Features & Functionality

### Lead Generation
- **Appointment Booking Form** — Collects name, phone, **email**, treatment preference, preferred date, **preferred time**, message, and **consent checkbox**. Generates a unique reference ID (`IDH-YYMMDD-RRRR`). Sends a confirmation email to the patient (dark premium template) and a notification to the clinic. Rate-limited to 3 submissions per IP per 15 minutes.
- **WhatsApp Float Button** — Fixed floating button on all pages. Opens WhatsApp with a pre-filled message. Includes pulse animation.
- **E-Consultation Float Button** — Slide-in panel form for remote consultations. Fields: name, phone, email, dental concern description, and **selfie/smile photo upload**. Photo is sent as an email attachment to the clinic.
- **Service-specific WhatsApp** — On each treatment page, the sidebar CTA opens WhatsApp with a pre-filled message mentioning the specific treatment.

### Email System (Resend)
- **Patient Confirmation Email** — Dark premium design (black background, gold accents, Cormorant Garamond + Inter fonts) with appointment details card, clinic info cards, WhatsApp confirm button, reschedule CTA. Sent to the patient's email after booking.
- **Clinic Notification Email** — Same dark/gold design family, stripped down to essential booking data (name, phone, email, treatment, date, time, notes, consent status, reference ID). Sent to CLINIC_EMAIL.
- **Sender address** — Configurable via `RESEND_FROM_EMAIL` env var (requires verified domain in Resend).
- **No hardcoded values** — All clinic info (name, address, phone, email, doctor name, credentials, timings) imported from `@/lib/constants`. All URLs use `siteUrl` parameter.

### Compliance
- **Opt-in Consent Checkbox** — Required checkbox on appointment form: "I consent to Indore Dental Hospital using my details to contact me regarding my appointment and for related communication." Validated via Zod. Blocks submission without consent.
- **Clinic notification** includes "Consent: ✓ Obtained" row.
- **Privacy Policy** page with GDPR information (data collection, legal bases, user rights, data retention, cookies, security).
- **Terms of Use** page with medical disclaimer, appointment terms, governing law.

### SEO
- **Structured Data (Schema.org)** — `LocalBusiness` / `Dentist` schema markup with name, address, phone, coordinates, opening hours, and aggregate rating
- **Metadata API** — Title and description set per page via Next.js Metadata API
- **Favicon** — Clinic logo used as browser tab icon and Apple touch icon
- **All 8 service pages linked in footer** — Every page on the site links to all treatment pages, passing link equity and aiding Google crawl
- **Semantic HTML** — Proper heading hierarchy (H1 → H2 → H3) on all pages
- **Sitemap** — Auto-generated via `sitemap.ts`

### Design & UX
- **Fully Responsive** — Mobile-first design, tested across all breakpoints
- **Scroll Animations** — Fade-in, slide-in, and stagger animations on scroll using Framer Motion / ScrollReveal
- **Swipe Gestures** — Mobile service cards support touch swipe (50px threshold)
- **Animated Counters** — Trust stats count up when scrolled into view
- **3D Interactive Tooth** — Three.js model in the hero, loaded dynamically (no SSR penalty)
- **Before/After Slider** — Custom drag-to-compare image slider component
- **Sticky Sidebar** — On service detail pages, the booking card and related treatments stay visible while scrolling
- **Shimmer Animation** — Gold ribbon banner uses `animate-shimmer` keyframe for a moving light effect
- **Date Input** — Calendar icon on left side, `min` attribute set to today's date (prevents past dates), native picker overlay covers full input area
- **Navbar Scroll-to-Top** — Clicking logo or current page nav link scrolls smoothly to top
- **Glass Morphism** — Frosted glass panels used for floating badges and overlays
- **Custom Color System** — CSS variables for primary, accent, background, border, text, and shadow tokens
- **Typography** — Plus Jakarta Sans (headings) + DM Sans (body), with tracking-tight on headings, tracking-wide on sublabels, controlled line heights

### Performance
- Next.js Image component with lazy loading and automatic format optimisation on all images
- Dynamic import for Three.js (code-split, no SSR)
- Google Fonts loaded with `display: swap`
- Draco-compressed 3D model for fast load
- `overflow-x: clip` on html/body to prevent horizontal scroll
- `contain: layout style` on sections to isolate paint areas
- `prefers-reduced-motion` media query for accessibility

---

## Content Structure

All site content is managed from two central files:

### `src/lib/constants.ts`
- Clinic name, address, phone, email, Google Maps URL
- Operating hours (Monday–Saturday 9AM–8PM, Sunday 10AM–2PM by appointment)
- Doctor details (name, title, credentials)
- Navigation links
- Trust stats (years, patients, treatments, tech)
- Patient testimonials
- Common FAQs

### `src/lib/services-data.ts`
- All 8 services with: slug, title, short description, full description, hero image, category, featured flag, benefits (4 per service), procedure steps (4 per service), FAQs (6 per service)

---

## Email Templates

### `src/emails/appointment-confirmation.ts`
Two exported template functions:

| Function | Purpose | Key Content |
|---|---|---|
| `appointmentConfirmationHtml()` | Patient confirmation email | Appointment details card, clinic info (location, hours, contact), WhatsApp confirm button, reschedule CTA, footer with Privacy/Terms links |
| `clinicNotificationHtml()` | Clinic notification email | All form fields + consent status + reference ID, minimal design |

Both use inline styles (email-client safe), dark/gold premium design, and import all clinic data from constants (no hardcoded values).

---

## What the Client Needs to Provide

### Critical (site incomplete without these)
| Item | Details |
|---|---|
| **Resend account + API key** | Sign up at resend.com, create an API key, verify the domain by adding TXT/CNAME records to DNS |
| **Domain DNS access** | Needed for Resend domain verification (3 records) and for pointing the domain to Vercel |
| **Verified sender email** | After domain verification in Resend, set `RESEND_FROM_EMAIL` to any address at the domain (e.g. `appointments@domain.com`) |
| **Clinic email inbox** | Set `CLINIC_EMAIL` to the address where staff will receive appointment notifications |
| **Google Maps listing** | Clinic not yet listed — must be created at business.google.com for the map embed to show the exact location |
| **WhatsApp number** | Confirm `NEXT_PUBLIC_WHATSAPP_NUMBER` (+91 9977788837) is correct |

### High Priority (visible placeholders currently)
| Item | Details |
|---|---|
| Doctor photo | Professional portrait of Dr. Sugandh (3:4 ratio, clinic or white background) |
| Doctor full name & qualifications | Last name, exact degrees, memberships to verify accuracy |
| Clinic interior/exterior photos | 2–3 real photos for About page and Hero section |
| Before/after patient photos | Minimum 4–6 cases with patient consent (landscape orientation preferred) |
| Real patient testimonials | Name, treatment, review text (to replace placeholder reviews) |

### Nice to Have
| Item | Details |
|---|---|
| Logo (done) | ✅ Provided and integrated |
| Social media links | Facebook, Instagram, Twitter/X URLs for footer icons |
| Google Analytics ID | For traffic tracking (`NEXT_PUBLIC_GA_ID`) |
| Production domain | Final domain name for `NEXT_PUBLIC_SITE_URL` and sitemap / email footer links |
| Blog content | Article text for the 3 existing blog posts |
| Google Maps API key | For the embedded map (`NEXT_PUBLIC_GOOGLE_MAPS_KEY`) |

---

## Suggestions for the Client

1. **Google Maps listing is the highest priority action.** Most patients in Indore search "dentist near me" on Google Maps before booking. Getting listed is free, takes 1–2 weeks for verification, and will also unlock Google Reviews which can replace the placeholder testimonials on the site.

2. **Set up Resend + verify domain** before going live. The appointment form and e-consultation form both rely on Resend to send emails. Without a verified domain, emails will only deliver to the account owner's inbox.

3. **Professional photography session** — A single half-day shoot covering the doctor's portrait, clinic interior, treatment rooms, and a few patient smile shots will dramatically increase the site's credibility and conversion rate.

4. **Start collecting Google Reviews immediately** — Even 15–20 genuine reviews will outperform any placeholder content and directly improve local search ranking.

5. **E-consultation is a strong differentiator** — The site already has a free e-consultation feature with photo upload. Promote this actively on social media as it lowers the barrier for new patients who are hesitant to visit in person.

6. **Blog content** — Publishing 1–2 articles per month on dental topics (e.g. "Cost of dental implants in Indore", "How to know if you need a root canal") will build organic search traffic over time.

---

## Environment Variables Required

```env
# Resend (transactional email — required)
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM_EMAIL=appointments@yourdomain.com

# Clinic email (where notifications arrive)
CLINIC_EMAIL=clinic@example.com

# Public
NEXT_PUBLIC_WHATSAPP_NUMBER=+919977788837
NEXT_PUBLIC_GOOGLE_MAPS_KEY=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Project File Structure

```
src/
├── app/
│   ├── page.tsx                    # Home
│   ├── layout.tsx                  # Root layout (Navbar, Footer, Floats)
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx     # Compliance
│   ├── terms/page.tsx              # Terms of Use
│   ├── services/
│   │   ├── page.tsx                # All 8 treatments listing
│   │   └── [slug]/page.tsx         # Individual treatment detail
│   ├── smile-gallery/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── api/
│       ├── appointment/route.ts    # Appointment form → Resend (patient + clinic)
│       └── econsultation/route.ts  # E-consultation with photo attachment
├── components/
│   ├── home/                       # All homepage sections
│   │   ├── Hero.tsx
│   │   ├── FreeConsultationBanner.tsx
│   │   ├── TrustStats.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── DoctorSection.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── SmileGalleryPreview.tsx
│   │   ├── Testimonials.tsx
│   │   ├── AppointmentCTA.tsx
│   │   ├── FAQSection.tsx
│   │   └── LocationSection.tsx
│   ├── layout/                     # Navbar, Footer, WhatsApp float, E-consult float, MobileBottomNav
│   ├── seo/                        # Schema.org structured data
│   └── ui/                         # Reusable components (Button, Input, Textarea, SectionHeading, etc.)
├── emails/
│   └── appointment-confirmation.ts # Both email templates (patient + clinic)
└── lib/
    ├── constants.ts                # All clinic data (single source of truth)
    ├── services-data.ts            # All 8 treatment data
    ├── blog-data.ts
    ├── env.ts
    ├── rate-limit.ts
    └── utils.ts
```

---

## Key Changes Since Initial Build

| Change | Details |
|---|---|
| Services reduced | 12 → 8 services; removed smile-makeover, veneers, cosmetic-dentistry, fixed-teeth-placement |
| Email switched to Resend | Replaced Nodemailer/SMTP with Resend transactional email API |
| Email templates | Two dark premium templates (patient confirmation + clinic notification), all hardcoded values replaced with constants/env vars |
| Consent checkbox | Added required opt-in for email communication (compliance) |
| Privacy Policy + Terms | Two new static pages for legal compliance |
| Free Consultation Banner | Gold shimmer ribbon on home page |
| About page redesigned | Text-based banner with floating desktop photo card |
| Appointment form enhanced | Added email, time picker, consent checkbox, reference IDs |
| Date input | Calendar icon on left, past dates blocked |
| Navbar | Scroll-to-top on logo / current nav link click |
| Mobile swipe | Service cards support touch swipe gesture |
| About page desktop photo | Removed full-width image banner, replaced with floating card |
| All hardcoded values removed | Clinic info → constants, sender email → env var, URLs → siteUrl param |
| Service cards layout | Flexbox with centered last row, bigger text, no excessive min-h |

---

*Document updated: June 2026*
*Project: Indore Dental Hospital Website*
