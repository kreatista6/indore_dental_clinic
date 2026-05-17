"use client";

import { TRUST_STATS } from "@/lib/constants";
import { Counter } from "@/components/ui/Counter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TrustStats() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-[var(--color-border)]/50 relative z-20 -mt-10 lg:mt-0 lg:mx-8 lg:rounded-3xl lg:border lg:shadow-[var(--shadow-card)]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-4 md:divide-x divide-[var(--color-border)]">
          {TRUST_STATS.map((stat, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 0.1}
              width="100%"
              className="flex flex-col items-center justify-center text-center px-2 md:px-4"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-1 flex tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-medium text-[var(--color-text-muted)] max-w-[140px] leading-snug">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
