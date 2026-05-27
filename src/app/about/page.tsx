import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DOCTOR, CLINIC_NAME, TRUST_STATS } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pb-12">

      {/* ── Hero banner ─────────────────────────────────────────────────── */}
      <section className="relative h-[32vh] md:h-[50vh] min-h-[240px] flex items-end overflow-hidden">
      <Image
          src="/doctor/banner.jpg"
          alt={`${DOCTOR.nameEn} — ${CLINIC_NAME}`}
          fill
          className="object-cover md:object-cover object-[center_top] md:object-top"
          priority
          sizes="100vw"
      />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8 pb-8 text-white">
          {/* <h1 className="text-3xl md:text-6xl font-bold mb-1">{CLINIC_NAME}</h1>
          <p className="text-base md:text-lg text-white/80">Setting the standard for premium, pain-free dental care in Central India.</p> */}
        </div>
      </section>

      {/* ── Stats strip ─────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {TRUST_STATS.map((stat, i) => (
              <div
                key={i}
                className={[
                  "flex flex-col items-center text-center py-8 px-4",
                  i % 2 === 0 ? "border-r border-[var(--color-border)]" : "",
                  i < 2 ? "border-b border-[var(--color-border)] md:border-b-0" : "",
                  i < 3 ? "md:border-r md:border-[var(--color-border)]" : "",
                ].join(" ")}
              >
                <span className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] tabular-nums">{stat.value}{stat.suffix}</span>
                <span className="text-xs md:text-sm text-[var(--color-text-muted)] mt-1 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ───────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 section-teal-wash">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal width="100%">
              <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-lg">
                <Image src="/clinic/reception.jpg" alt="Indore Dental Hospital Reception" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <SectionHeading eyebrow="Our Story" title="A Legacy of Excellence" />
              <div className="mt-5 space-y-4 text-lg text-[var(--color-text-muted)]">
                <p>Founded in 2012 with a vision to revolutionize dental care in Indore, {CLINIC_NAME} combines state-of-the-art technology with compassionate, patient-first care.</p>
                <p>We understand that visiting the dentist can be daunting. That&apos;s why we&apos;ve engineered every aspect of our clinic — from the soothing ambiance to the painless injection systems — to ensure your complete comfort.</p>
                <p>Today, with over 25,000 successful treatments and 15,000+ happy patients, we are Indore&apos;s most trusted destination for advanced dental care.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Meet the Doctor ─────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 section-gold-wash">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal>
              <SectionHeading eyebrow="Meet The Expert" title={DOCTOR.nameEn} description={DOCTOR.title} />
              <p className="hindi text-lg text-[var(--color-text-muted)] mt-2 mb-5">{DOCTOR.name} — {DOCTOR.titleHi}</p>
              <div className="space-y-3 mb-6">
                {DOCTOR.credentials.map((c) => (
                  <div key={c} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[var(--color-success)] shrink-0" />
                    <span className="font-semibold text-[var(--color-text-primary)]">{c}</span>
                  </div>
                ))}
              </div>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                With over a decade of dedicated clinical practice, Dr. Sugandh is renowned in Indore for her meticulous attention to detail and exceptionally gentle approach. She specialises in full-mouth rehabilitation, dental implants, and cosmetic smile transformations.
              </p>
            </ScrollReveal>
            <ScrollReveal width="100%">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[2/4] rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/doctor/doctor-1.jpg" alt={DOCTOR.nameEn} fill className="object-cover object-top" sizes="300px" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
                    <Image src="/doctor/portrait.jpg" alt={DOCTOR.nameEn} fill className="object-cover object-top" sizes="200px" />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
                    <Image src="/clinic/treatment-room.jpg" alt="Treatment Room" fill className="object-cover" sizes="200px" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Clinic Gallery ──────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 section-teal-wash">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="Our Clinic" title="World-Class Facilities" alignment="center" className="mb-10" />
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {([
              { src: "/clinic/interior-1.jpg", alt: "Clinic Interior", tall: true },
              { src: "/clinic/equipment.jpg", alt: "Advanced Equipment", tall: false },
              { src: "/clinic/patient.jpg", alt: "Patient Care", tall: true },
              { src: "/clinic/pharmacy.jpg", alt: "Pharmacy", tall: false },
            ] as { src: string; alt: string; tall: boolean }[]).map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05} width="100%" className={img.tall ? "row-span-2" : ""}>
                <div className={`relative w-full rounded-2xl overflow-hidden shadow-sm ${img.tall ? "h-full min-h-[300px]" : "aspect-square"}`}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-[var(--color-primary)] text-white text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-white/80 mb-8 text-lg">Book a consultation with Dr. Sugandh and experience the difference.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors text-base">
            Book Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
