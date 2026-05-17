"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { Star } from "lucide-react";

// Dynamically imported — Three.js must run client-side only
const ToothModel = dynamic(
  () => import("@/components/ui/ToothModel").then((m) => m.ToothModel),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative min-h-[90dvh] w-full pt-12 md:pt-0 flex items-center bg-[var(--color-bg)] overflow-hidden">
      {/* Soft colour blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/4 translate-x-1/4 rounded-full bg-[var(--color-primary-light)] blur-[120px] opacity-60" />
        <div className="absolute left-0 bottom-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/4 rounded-full bg-[var(--color-accent-light)] blur-[100px] opacity-40" />
      </div>

      {/* 3D Tooth — sits behind content, right-side biased on desktop */}
      <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none">
        <div className="w-full h-full lg:w-[55%] opacity-30 lg:opacity-40">
          <ToothModel />
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left: Content */}
        <StaggerContainer className="flex flex-col gap-8 max-w-2xl items-center text-center lg:items-start lg:text-left" delayChildren={0.1}>
          <StaggerItem>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-[var(--color-border)]">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                    <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-[var(--color-text-primary)] pl-2">
                <Star className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                <span>4.9/5 from 1,200+ Reviews</span>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-balance text-5xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-6xl lg:text-7xl leading-[1.1]">
              Complete <span className="text-[var(--color-primary)]">Dental & Oral Care.</span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-balance text-lg text-[var(--color-text-muted)] md:text-xl max-w-[45ch]">
              Experience world-class dentistry in Indore. We combine advanced 3D technology with a compassionate approach to give you the perfect smile you deserve.
            </p>
          </StaggerItem>

          <StaggerItem className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center lg:justify-start">
            <Button asChild size="lg" className="w-full sm:w-auto text-base">
              <Link href="/contact">Book Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-base">
              <Link href="/services">Explore Treatments</Link>
            </Button>
          </StaggerItem>
        </StaggerContainer>

        {/* Right: Image / Visual */}
        <ScrollReveal direction="left" delay={0.3} className="relative h-full w-full hidden lg:block">
          <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-float)] border-[6px] border-white bg-gray-100">
            <Image 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop" 
              alt="Indore Dental Hospital Premium Care"
              fill
              className="object-cover"
              priority
              fetchPriority="high"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-[-2rem] glass-panel rounded-2xl p-4 flex items-center gap-4 animate-[bounce_3s_ease-in-out_infinite]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[var(--color-text-primary)]">ISO Certified</span>
                <span className="text-sm text-[var(--color-text-muted)]">Global Standards</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
