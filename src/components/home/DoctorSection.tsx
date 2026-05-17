"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { CheckCircle2 } from "lucide-react";

export function DoctorSection() {
  const credentials = [
    "MDS (Master of Dental Surgery)",
    "Member of American Academy of Implant Dentistry",
    "14+ Years Clinical Experience",
    "Specialist in Full Mouth Rehabilitation"
  ];

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image (Doctor) */}
          <ScrollReveal direction="right" width="100%">
            <div className="relative">
              {/* Decorative block behind image */}
              <div className="absolute -inset-4 md:-inset-6 bg-[var(--color-primary-light)] rounded-[3rem] -z-10 rotate-[-3deg] transform-gpu" />
              
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-float)] border-[8px] border-white bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                  alt="Dr. Sugandh - Principal Dentist"
                  fill
                  className="object-cover object-top"
                />
              </div>
              
              {/* Floating Quote Badge */}
              <div className="absolute -bottom-8 -right-4 md:right-8 glass-panel p-6 rounded-3xl max-w-[280px] shadow-xl">
                <p className="text-sm font-medium italic text-[var(--color-text-primary)] relative z-10">
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
                title="Dr. Sugandh"
                description="Principal Dentist & Implantologist"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="mt-8">
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
                With over a decade of dedicated clinical practice, Dr. Sugandh is renowned in Indore for her meticulous attention to detail and exceptionally gentle approach. She believes that a great smile is a powerful tool for confidence, and every treatment plan is custom-architected for the individual.
              </p>
            </ScrollReveal>

            <StaggerContainer className="flex flex-col gap-4 items-center">
              {credentials.map((cred, i) => (
                <StaggerItem key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)]">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[var(--color-text-primary)] font-medium">{cred}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  );
}
