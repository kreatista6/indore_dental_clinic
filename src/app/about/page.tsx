import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DOCTOR, CLINIC_NAME, TRUST_STATS } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>

      {/* ── Hero banner ─────────────────────────────────────────────────── */}
<section className="-mt-24 pt-24 max-md:-mt-14 max-md:pt-14 bg-[#235b7a]">
  {/* Desktop banner */}
  <div className="hidden md:block relative w-full h-[50vh]">
    <Image
      src="/doctor/banner.jpg"
      alt={`${DOCTOR.nameEn} — ${CLINIC_NAME}`}
      fill
      className="object-contain object-center"
      priority
      sizes="100vw"
    />
  </div>

  {/* Mobile custom text banner */}
  <div className="md:hidden px-5 pt-4 pb-6 text-white">
    <div className="flex items-start gap-4 mb-4">
      <div className="h-16 w-16 shrink-0 rounded-full border-[3px] border-white overflow-hidden shadow-lg bg-white">
        <Image
          src="/doctor/face_banner.jpg"
          alt={DOCTOR.nameEn}
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="pt-1">
        <h1 className="text-lg font-bold leading-tight text-[var(--color-accent)]">{DOCTOR.nameEn}</h1>
        <p className="text-sm text-[var(--color-accent)]/90 mt-0.5 font-medium">Maxillofacial Prosthodontist &amp; Implantologist</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-1.5 mb-3">
      {["MDS", "FWCLI (USA)", "PGCOI (Israel)", "PGCAE (New Delhi)", "FAGE"].map((badge) => (
        <span
          key={badge}
          className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white/90 border border-white/15"
        >
          {badge}
        </span>
      ))}
    </div>

    <div className="space-y-1 text-xs text-white/75 leading-relaxed border-t border-white/10 pt-3">
      <p>Former PGMO, District Hospital, Ujjain &middot; Assistant Professor, RKDF Dental College, Bhopal</p>
      <p>Consultant at Health Plus Medical Centre (New Delhi), Shri Ram Dental Centre (New Delhi), Om Sai Dental Centre (Ghaziabad) &middot; Former Consultant at Ratra Dental Centre (Noida)</p>
    </div>
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
              <p className="text-lg font-bold text-[var(--color-text-muted)] mt-2 mb-5">{DOCTOR.name} — {DOCTOR.titleHi}</p>
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
      <section className="py-14 md:py-20 bg-[var(--color-bg)] relative overflow-hidden">
        <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-bl from-[var(--color-primary-light)] to-transparent opacity-50 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-5 md:px-8 relative z-10">
          <div className="bg-[var(--color-primary)] text-white text-center rounded-[2rem] p-8 md:p-14 shadow-[var(--shadow-float)] border border-[var(--color-primary-dark)]/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Smile?</h2>
            <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">Book a consultation with Dr. Sugandh and experience the difference.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors text-base shadow-lg">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
