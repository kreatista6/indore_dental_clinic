"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { Star, ShieldCheck } from "lucide-react";
import { CLINIC_NAME, CLINIC_TAGLINE, CLINIC_SINCE, DOCTOR } from "@/lib/constants";

const ToothModel = dynamic(
  () => import("@/components/ui/ToothModel").then((m) => m.ToothModel),
  { ssr: false, loading: () => null }
);

export function Hero() {
  return (
    <section className="relative min-h-[85dvh] w-full flex items-start md:items-center bg-[var(--color-bg)] overflow-hidden">
      {/* Mobile background image — real clinic home photo */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src="/clinic/home.jpg"
          alt="Indore Dental Hospital"
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/70" />
      </div>

      {/* Colour blobs — desktop only, not needed when image is showing */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        <div className="absolute right-0 top-0 h-[700px] w-[700px] -translate-y-1/4 translate-x-1/4 rounded-full bg-[var(--color-primary-light)] blur-[100px] opacity-60" />
        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] translate-y-1/3 -translate-x-1/4 rounded-full bg-[var(--color-accent-light)] blur-[80px] opacity-40" />
      </div>

      {/* 3D Tooth — desktop only */}
      <div className="absolute inset-0 z-0 hidden lg:flex items-center justify-end pointer-events-none">
        <div className="w-[55%] h-full opacity-40">
          <ToothModel />
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 relative z-10 py-8 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Left: Content ─────────────────────────────────────── */}
          <StaggerContainer
            className="flex flex-col gap-5 items-center text-center lg:items-start lg:text-left"
            delayChildren={0.05}
            staggerChildren={0.07}
          >
            {/* Clinic name + tagline pill */}
            <StaggerItem>
              <div className="inline-flex flex-col items-center lg:items-start gap-0.5">
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-primary)] opacity-80">
                  {CLINIC_NAME}
                </span>
                <span className="text-xs tracking-widest text-[var(--color-text-muted)] uppercase">
                  {CLINIC_TAGLINE}
                </span>
              </div>
            </StaggerItem>

            {/* Headline */}
            <StaggerItem>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.05]">
                Precision Dentistry{" "}
                <span className="text-[var(--color-primary)]">Since {CLINIC_SINCE}.</span>
              </h1>
            </StaggerItem>

            {/* Doctor credential strip */}
            <StaggerItem>
              <div className="flex flex-col items-center lg:items-start gap-1.5">
                <p className="hindi text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
                  {DOCTOR.name}
                </p>
                <p className="text-base text-[var(--color-text-muted)]">{DOCTOR.title}</p>
                <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start mt-1">
                  {DOCTOR.credentials.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-semibold border border-[var(--color-primary)]/20"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>

            {/* Social proof */}
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-[var(--color-border)]">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                      <Image src={`https://i.pravatar.cc/60?img=${i + 10}`} alt="" fill className="object-cover" sizes="24px" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm md:text-base font-medium text-[var(--color-text-primary)] pl-1">
                  <Star className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                  <span>4.9/5 · 1,200+ Patients</span>
                </div>
              </div>
            </StaggerItem>

            {/* CTAs */}
            <StaggerItem className="flex flex-col sm:flex-row gap-3 w-full justify-center lg:justify-start">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/services">Explore Treatments</Link>
              </Button>
            </StaggerItem>
          </StaggerContainer>

          {/* ── Right: Clinic image — desktop only ────────────────── */}
          <div className="relative h-full w-full hidden lg:block">
            <div className="relative h-[560px] w-full rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-float)] border-[6px] border-white bg-gray-100">
              <Image
                src="/clinic/home.jpg"
                alt="Indore Dental Hospital"
                fill
                className="object-cover"
                priority
                fetchPriority="high"
                sizes="(max-width: 1280px) 50vw, 600px"
              />

              {/* Doctor credential badge — bottom left */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="hindi font-bold text-base text-[var(--color-text-primary)] leading-tight">{DOCTOR.name}</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{DOCTOR.title}</p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {DOCTOR.credentials.map((c) => (
                        <span key={c} className="text-[10px] font-semibold text-[var(--color-primary)] bg-[var(--color-primary-light)] px-1.5 py-0.5 rounded-full">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
