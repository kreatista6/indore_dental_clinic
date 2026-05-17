"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { Star } from "lucide-react";

// Only load Three.js on desktop — it's the #1 mobile performance killer
const ToothModel = dynamic(
  () => import("@/components/ui/ToothModel").then((m) => m.ToothModel),
  { ssr: false, loading: () => null }
);

export function Hero() {
  return (
    <section className="relative min-h-[85dvh] w-full flex items-center bg-[var(--color-bg)] overflow-hidden pt-20 md:pt-0">
      {/* Colour blobs — reduced blur radius on mobile for perf */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] md:h-[700px] md:w-[700px] -translate-y-1/4 translate-x-1/4 rounded-full bg-[var(--color-primary-light)] blur-[60px] md:blur-[100px] opacity-60" />
        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] translate-y-1/3 -translate-x-1/4 rounded-full bg-[var(--color-accent-light)] blur-[60px] md:blur-[80px] opacity-40" />
      </div>

      {/* 3D Tooth — desktop only (ToothModel itself also bails on mobile) */}
      <div className="absolute inset-0 z-0 hidden lg:flex items-center justify-end pointer-events-none">
        <div className="w-[55%] h-full opacity-40">
          <ToothModel />
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left: Content */}
          <StaggerContainer
            className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left"
            delayChildren={0.05}
            staggerChildren={0.07}
          >
            {/* Social proof pill */}
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-sm border border-[var(--color-border)]">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-5 w-5 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                      <Image src={`https://i.pravatar.cc/60?img=${i + 10}`} alt="" fill className="object-cover" sizes="20px" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs md:text-sm font-medium text-[var(--color-text-primary)] pl-1">
                  <Star className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  <span>4.9/5 · 1,200+ Reviews</span>
                </div>
              </div>
            </StaggerItem>

            {/* Headline */}
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.1]">
                Complete{" "}
                <span className="text-[var(--color-primary)]">Dental &amp; Oral Care.</span>
              </h1>
            </StaggerItem>

            {/* Subtext */}
            <StaggerItem>
              <p className="text-base md:text-lg text-[var(--color-text-muted)] max-w-[42ch] leading-relaxed">
                Experience world-class dentistry in Indore. Advanced 3D technology with a compassionate approach to give you the perfect smile.
              </p>
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

          {/* Right: Clinic image — desktop only */}
          <div className="relative h-full w-full hidden lg:block">
            <div className="relative h-[560px] w-full rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-float)] border-[6px] border-white bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
                alt="Indore Dental Hospital Premium Care"
                fill
                className="object-cover"
                priority
                fetchPriority="high"
                sizes="(max-width: 1280px) 50vw, 600px"
              />
              {/* Badge — kept inside parent so no overflow */}
              <div className="absolute bottom-6 left-6 glass-panel rounded-2xl p-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <span className="font-bold text-sm text-[var(--color-text-primary)]">ISO Certified</span>
                  <p className="text-xs text-[var(--color-text-muted)]">Global Standards</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
