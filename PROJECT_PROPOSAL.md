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
| Icons | Lucide React + Phosphor Icons |
| Forms | React Hook Form + Zod validation |
| Email | Nodemailer (SMTP) |
| Font | Plus Jakarta Sans + DM Sans (Google Fonts) |
| Deployment-ready | Vercel / any Node.js host |

---

## Pages Delivered

### 1. Home Page (`/`)
The homepage is a full marketing landing page with the following sections in order:

- **Hero** — Full-screen section with animated 3D interactive tooth model (Three.js), headline, CTA buttons, and a floating social proof badge (4.9/5 rating)
- **Trust Stats** — Animated counters: 14+ Years Experience, 15k+ Happy Patients, 25k+ Treatments, 100+ Tech Equipped
- **Why Choose Us** — 6-card grid highlighting Advanced 3D Technology, Sterilization, Pain-Free Approach, Premium Materials, Zero Wait Time, Emergency Care
- **Comprehensive Dental Solutions** — Scroll-driven pinned section (desktop) / swipeable carousel (mobile) showcasing 5 featured services with animated image transitions
- **Real Patient Results** — Before/after smile comparison slider preview (2 cases) with link to full gallery
- **Meet The Doctor** — Dr. Sugandh's profile with credentials, bio, and floating quote badge
- **Testimonials** — Patient review cards with name, treatment, rating, and avatar
- **Book Appointment CTA** — Full appointment request form with treatment selector and date picker
- **Location & Timings** — Clinic address, operating hours, phone, email, and embedded Google Maps

### 2. Services Listing (`/services`)
- Grid of all 12 treatment cards with image, title, short description, and "Learn More" link
- Compact layout with minimal whitespace

### 3. Service Detail Pages (`/services/[slug]`) — 12 pages
Each treatment has a dedicated SEO-optimised page with:
- Full-width hero image with breadcrumb navigation and category badge
- **What is [Treatment]?** — Full description
- **Key Benefits** — 2-column benefit cards with checkmarks
- **How is it Done?** — Numbered step-by-step procedure
- **FAQs** — 6 real patient questions with detailed answers (covering cost in ₹, pain, duration, alternatives)
- **Sticky Sidebar** — Book consultation CTA card + WhatsApp link + Other Treatments navigation
- Appointment booking form at the bottom

**All 12 treatments covered:**
1. Dental Implants
2. Digital Smile Makeover
3. Painless Root Canal
4. Advanced Teeth Whitening
5. Braces / Orthodontics
6. Pediatric Dentistry
7. Tooth Extraction
8. Veneers
9. Dentures
10. Gum Treatment
11. Cosmetic Dentistry
12. Fixed Teeth Placement

### 4. Smile Gallery (`/smile-gallery`)
- Before/after comparison sliders for patient cases
- Drag-to-compare interaction — slider starts at 30% to showcase the "after" result
- Category labels per case (Implants, Smile Makeover, Whitening, Veneers)
- Ready to replace with real patient photos

### 5. About (`/about`)
- Clinic story and founding philosophy
- Clinic interior image
- Expandable with team, awards, and milestones

### 6. Contact (`/contact`)
- Full appointment booking form (name, phone, treatment, date, message)
- Location map, address, phone, email, operating hours
- Form submits via email to clinic inbox

### 7. Blog (`/blog` + `/blog/[slug]`)
- Blog listing page with post cards (cover image, category, author, read time)
- Individual post pages with hero image, author info, and content area
- Ready to connect to a CMS (Sanity, Contentful, WordPress)

---

## Key Features & Functionality

### Lead Generation
- **Appointment Booking Form** — Collects name, phone, treatment preference, preferred date, and message. Sends email notification to clinic via SMTP.
- **WhatsApp Float Button** — Fixed floating button on all pages. Opens WhatsApp with a pre-filled message. Includes pulse animation.
- **E-Consultation Float Button** — Slide-in panel form for remote consultations. Fields: name, phone, email, dental concern description, and **selfie/smile photo upload**. Photo is sent as an email attachment to the clinic.
- **Service-specific WhatsApp** — On each treatment page, the sidebar CTA opens WhatsApp with a pre-filled message mentioning the specific treatment.

### SEO
- **Structured Data (Schema.org)** — `LocalBusiness` / `Dentist` schema markup with name, address, phone, coordinates, opening hours, and aggregate rating
- **Metadata API** — Title and description set per page via Next.js Metadata API
- **Favicon** — Clinic logo used as browser tab icon and Apple touch icon
- **All 12 service pages linked in footer** — Every page on the site links to all treatment pages, passing link equity and aiding Google crawl
- **Semantic HTML** — Proper heading hierarchy (H1 → H2 → H3) on all pages
- **Sitemap** — Auto-generated via `sitemap.ts`

### Design & UX
- **Fully Responsive** — Mobile-first design, tested across all breakpoints
- **Scroll Animations** — Fade-in, slide-in, and stagger animations on scroll using Framer Motion
- **Animated Counters** — Trust stats count up when scrolled into view
- **3D Interactive Tooth** — Three.js model in the hero, loaded dynamically (no SSR penalty)
- **Before/After Slider** — Custom drag-to-compare image slider component
- **Sticky Sidebar** — On service detail pages, the booking card and related treatments stay visible while scrolling
- **Glass Morphism** — Frosted glass panels used for floating badges and overlays
- **Custom Color System** — CSS variables for primary, accent, background, border, text, and shadow tokens

### Performance
- Next.js Image component with lazy loading and automatic format optimisation on all images
- Dynamic import for Three.js (code-split, no SSR)
- Google Fonts loaded with `display: swap`
- Draco-compressed 3D model for fast load

---

## Content Structure

All site content is managed from two central files — no hardcoding across components:

### `src/lib/constants.ts`
- Clinic name, address, phone, email, Google Maps URL
- Operating hours (Monday–Saturday 9AM–8PM, Sunday 10AM–2PM by appointment)
- Navigation links
- Trust stats (years, patients, treatments, tech)
- Patient testimonials
- Common FAQs

### `src/lib/services-data.ts`
- All 12 services with: slug, title, short description, full description, hero image, category, featured flag, benefits (4 per service), procedure steps (4 per service), FAQs (6 per service)

---

## What the Client Needs to Provide

### Critical (site incomplete without these)
| Item | Details |
|---|---|
| Google Maps listing | Clinic not yet listed — must be created at business.google.com for the map embed to show the exact location |
| SMTP credentials | Gmail app password or business email SMTP for contact form and e-consultation emails to work |
| WhatsApp number confirmation | Currently set to +91 9977788837 — confirm this is correct |

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
| Production domain | Final domain name for `NEXT_PUBLIC_SITE_URL` and sitemap |
| Blog content | Article text for the 3 existing blog posts |

---

## Suggestions for the Client

1. **Google Maps listing is the highest priority action.** Most patients in Indore search "dentist near me" on Google Maps before booking. Getting listed is free, takes 1–2 weeks for verification, and will also unlock Google Reviews which can replace the placeholder testimonials on the site.

2. **Professional photography session** — A single half-day shoot covering the doctor's portrait, clinic interior, treatment rooms, and a few patient smile shots will dramatically increase the site's credibility and conversion rate.

3. **Start collecting Google Reviews immediately** — Even 15–20 genuine reviews will outperform any placeholder content and directly improve local search ranking.

4. **E-consultation is a strong differentiator** — The site already has a free e-consultation feature with photo upload. Promote this actively on social media as it lowers the barrier for new patients who are hesitant to visit in person.

5. **Blog content** — Publishing 1–2 articles per month on dental topics (e.g. "Cost of dental implants in Indore", "How to know if you need a root canal") will build organic search traffic over time.

---

## Environment Variables Required

```env
# Email (for contact form + e-consultation)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_NAME=Indore Dental Hospital
SMTP_FROM_EMAIL=your-gmail@gmail.com
CLINIC_EMAIL=indoredentalhospital@gmail.com

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
│   ├── services/
│   │   ├── page.tsx                # All treatments listing
│   │   └── [slug]/page.tsx         # Individual treatment detail
│   ├── smile-gallery/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── api/
│       ├── appointment/route.ts    # Appointment form email
│       └── econsultation/route.ts  # E-consultation with photo attachment
├── components/
│   ├── home/                       # All homepage sections
│   ├── layout/                     # Navbar, Footer, WhatsApp float, E-consult float
│   ├── seo/                        # Schema.org structured data
│   └── ui/                         # Reusable components (Button, ImageSlider, etc.)
└── lib/
    ├── constants.ts                # All clinic data (single source of truth)
    ├── services-data.ts            # All 12 treatment data
    ├── blog-data.ts
    ├── env.ts
    └── utils.ts
```

---

*Document generated: May 2026*
*Project: Indore Dental Hospital Website*
