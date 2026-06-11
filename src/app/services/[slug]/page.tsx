import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/lib/services-data";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { CLINIC_NAME, CLINIC_PHONE } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

const ACTIVE_SLUGS = ["dental-implants", "root-canal", "teeth-whitening", "braces-orthodontics", "pediatric-dentistry", "tooth-extraction", "dentures", "gum-treatment"];

export function generateStaticParams() {
  return ACTIVE_SLUGS.map((slug) => ({ slug }));
}

// ── Unique title + description per service page ───────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} in Indore | ${CLINIC_NAME}`,
    description: `${service.shortDescription} Get expert ${service.title.toLowerCase()} treatment in Indore at ${CLINIC_NAME}. Book a consultation today.`,
    openGraph: {
      title: `${service.title} in Indore | ${CLINIC_NAME}`,
      description: service.shortDescription,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) notFound();
  if (!ACTIVE_SLUGS.includes(service.slug)) notFound();

  const relatedServices = SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 5);

  // ── Structured data ────────────────────────────────────────────────────────
  const faqSchema = service.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: `${service.title} in Indore`,
    description: service.description,
    procedureType: "https://schema.org/TherapeuticProcedure",
    status: "https://schema.org/ActiveActionStatus",
    followup: "Contact Indore Dental Hospital for post-treatment care.",
    preparation: "Consultation and X-ray assessment required before treatment.",
    howPerformed: service.procedure.map((s) => s.description).join(" "),
    provider: {
      "@type": "Dentist",
      name: CLINIC_NAME,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        addressCountry: "IN",
      },
      telephone: CLINIC_PHONE,
    },
  };

  return (
    <div className="pb-0">

      {/* ── Schema markup ─────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end">
        <Image
          src={service.heroImage}
          alt={`${service.title} in Indore`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8 pb-12 text-white">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Treatments</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary)] text-xs font-semibold uppercase tracking-widest mb-4">
            {service.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-3 max-w-3xl leading-tight">
            {service.title} <span className="text-white/70 text-2xl md:text-3xl font-medium">in Indore</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">{service.shortDescription}</p>
        </div>
      </section>

      {/* ── Main content + sidebar ────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* ── Left: Main content ──────────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-5">
                What is {service.title}?
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                {service.description}
              </p>
            </section>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-6">
                Key Benefits of {service.title} in Indore
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--color-primary-light)] border border-[var(--color-border)]">
                    <CheckCircle2 className="shrink-0 text-[var(--color-success)] mt-0.5" size={20} />
                    <span className="font-medium text-[var(--color-text-primary)]">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Procedure */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-8">
                How is {service.title} Done at {CLINIC_NAME}?
              </h2>
              <div className="flex flex-col gap-6">
                {service.procedure.map((step) => (
                  <div key={step.step} className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">{step.title}</h3>
                      <p className="text-[var(--color-text-muted)] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-8">
                  {service.title} — Frequently Asked Questions
                </h2>
                <div className="flex flex-col divide-y divide-[var(--color-border)]">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="py-6">
                      <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">{faq.question}</h3>
                      <p className="text-[var(--color-text-muted)] leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* ── Right: Sidebar ──────────────────────────────────────────── */}
          <aside className="w-full lg:w-[300px] xl:w-[340px] shrink-0 flex flex-col gap-6 lg:self-start lg:sticky lg:top-28">

            <div className="rounded-3xl bg-[var(--color-primary)] text-white p-8 flex flex-col gap-5">
              <h3 className="text-xl font-bold leading-snug">
                Book {service.title} Consultation in Indore
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Our specialists will evaluate your case and create a personalised treatment plan.
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-xl bg-white text-[var(--color-primary)] font-bold py-3 px-6 hover:bg-white/90 transition-colors"
              >
                Book Appointment <ArrowRight size={16} />
              </Link>
              <a
                href={getWhatsAppUrl(CLINIC_PHONE, `Hello! I'd like to book a consultation for ${service.title} at Indore Dental Hospital. Please let me know the available slots.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/30 text-white font-semibold py-3 px-6 hover:bg-white/10 transition-colors text-sm"
              >
                <Phone size={16} /> {CLINIC_PHONE}
              </a>
            </div>

            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
              <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-wide">
                Other Treatments
              </h3>
              <nav className="flex flex-col divide-y divide-[var(--color-border)]">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center justify-between py-3 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors group"
                  >
                    <span>{s.title}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
                <Link href="/services" className="flex items-center justify-between pt-4 text-sm font-bold text-[var(--color-primary)] hover:underline">
                  View All Treatments <ArrowRight size={14} />
                </Link>
              </nav>
            </div>

          </aside>
        </div>
      </div>

      <AppointmentCTA />
    </div>
  );
}
