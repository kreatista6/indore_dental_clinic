"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Star } from "lucide-react";

// Duplicate once for seamless CSS loop — 2× is enough
const ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg)] overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 mb-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Patient Stories"
            title="Smiles That Speak"
          />
        </ScrollReveal>
      </div>

      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

        {/* CSS-driven marquee — no JS, no rAF, GPU composited */}
        <div
          className="flex gap-5 w-max"
          style={{
            animation: "marquee 40s linear infinite",
            willChange: "transform",
          }}
        >
          {ITEMS.map((testimonial, i) => (
            <div
              key={`${testimonial.id}-${i}`}
              className="w-[300px] md:w-[360px] shrink-0 bg-white rounded-3xl p-6 shadow-sm border border-[var(--color-border)]/50 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${idx < testimonial.rating ? "fill-[#F59E0B] text-[#F59E0B]" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-[var(--color-text-primary)] text-sm leading-relaxed mb-6 italic">
                &quot;{testimonial.review}&quot;
              </p>
              <div className="flex flex-col items-center gap-3 mt-auto">
                <div className="h-12 w-12 rounded-full overflow-hidden relative bg-gray-100 shadow-sm">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[var(--color-text-primary)]">{testimonial.name}</h3>
                  <p className="text-xs text-[var(--color-text-muted)]">{testimonial.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*="marquee"] { animation: none; }
        }
      `}</style>
    </section>
  );
}
