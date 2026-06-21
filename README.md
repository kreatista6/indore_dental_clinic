# Indore Dental Hospital — Official Website

Premium dental clinic website built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4**, and **Resend** for transactional emails.

**Live:** [https://indoredental.co.in](https://indoredental.co.in)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| 3D | Three.js / React Three Fiber |
| Email | Resend API |
| Hosting | Vercel (auto-deploy from GitHub) |

---

## Getting Started

```bash
git clone https://github.com/kreatista6/indore_dental_clinic.git
cd indore_dental_clinic
cp .env.example .env.local   # fill in your env vars
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

See `.env.example` for all required variables. At minimum you need:

- `RESEND_API_KEY` — from [resend.com](https://resend.com)
- `RESEND_FROM_EMAIL` — verified sender domain
- `CLINIC_EMAIL` — where clinic notifications go
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — with country code (e.g. `+919977788837`)

---

## Project Structure

```
src/
├── app/              # Pages & API routes (App Router)
├── components/       # React components (home/, layout/, ui/)
├── emails/           # Transactional email templates (inline styles)
└── lib/
    ├── constants.ts  # ★ All clinic info (single source of truth)
    ├── services-data.ts  # ★ All 8 service content
    └── blog-data.ts      # ★ Blog posts
```

---

## Key Files to Edit

| File | What to Change |
|---|---|
| `src/lib/constants.ts` | Clinic name, phone, address, doctor details, testimonials, FAQs |
| `src/lib/services-data.ts` | Service names, descriptions, procedures, pricing |
| `src/lib/blog-data.ts` | Blog articles |
| `src/emails/appointment-confirmation.ts` | Email templates (patient + clinic notifications) |
| `src/app/globals.css` | Theme colors, fonts (`--color-primary`, `--color-accent`) |

---

## Deployment

Any push to `main` auto-deploys to Vercel:

```bash
git push origin main
```

---

## Handover

See [`HANDOVER.md`](./HANDOVER.md) for complete project documentation including service access, credentials, DNS records, and step-by-step maintenance guides.

---

## License

Custom — developed for Indore Dental Hospital, Indore.
