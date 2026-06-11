"use client";

import { ShieldCheck } from "lucide-react";

export function FreeConsultationBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-accent)] py-6 pb-8 md:py-3">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none" />
      <div className="mx-auto flex items-start justify-center gap-2 md:gap-3 px-5 text-center md:text-left text-sm md:text-base font-medium text-[#4a3f2a]">
        <ShieldCheck className="h-5 w-5 shrink-0 mt-0.5" />
        <span className="max-w-lg md:max-w-none">
          Completely Free Consultation for Indian Armed Forces Personnel, Police Personnel, and Senior Citizens.
        </span>
      </div>
    </section>
  );
}
