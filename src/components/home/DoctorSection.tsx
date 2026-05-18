"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CheckCircle2 } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

export function DoctorSection() {
  return (
    <section className="py-14 md:py-24 section-gold-wash overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left: Image */}
          <ScrollReveal width="100%">
            <div className="relative pb-10 md:pb-0">
              <div className="absolute -inset-3 md:-inset-6 bg-[var(--color-primary-light)] rounded-[2.5rem] -z-10 rotate-[-2deg] transform-gpu" />
              <div className="relative aspect-[3/4] w-full max-w-xs mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-[var(--shadow-float)] border-[6px] border-white bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                  alt={DOCTOR.nameEn}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 320px, 400px"
                />
              </div>
              <div className="mx-4 mt-4 md:absolute md:-bottom-8 md:right-4 md:mx-0 md:mt-0 glass-panel p-4 rounded-2xl shadow-lg">
                <p className="text-xs md:text-sm font-medium italic text-[var(--color-text-primary)]">
                  &quot;My philosophy is simple: treat every patient as if they were my own family. Honesty, precision, and zero pain.&quot;
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <div className="flex flex-col items-center text-center">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Meet The Expert"
                title={DOCTOR.name}
                description={DOCTOR.title}
              />
            </ScrollReveal>

            {/* Hindi specialisation only — name is already the heading */}
            <ScrollReveal delay={0.05} className="mt-1 mb-2">
              <p className="hindi text-base text-[var(--color-text-muted)]">{DOCTOR.titleHi}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="mt-4">
              <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed mb-6">
                With over a decade of dedicated clinical practice, Dr. Sugandh is renowned in Indore for her meticulous attention to detail and exceptionally gentle approach. She believes that a great smile is a powerful tool for confidence, and every treatment plan is custom-architected for the individual.
              </p>
            </ScrollReveal>

            <StaggerContainer className="flex flex-col gap-3 items-center">
              {DOCTOR.credentials.map((cred) => (
                <StaggerItem key={cred} className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)]">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[var(--color-text-primary)] font-semibold">{cred}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  );
}
