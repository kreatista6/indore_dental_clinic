"use client";

import { TRUST_STATS } from "@/lib/constants";
import { Counter } from "@/components/ui/Counter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TrustStats() {
  return (
    <section className="py-10 md:py-16 bg-white border-y border-[var(--color-border)]/50 relative z-20 -mt-6 lg:mt-0 lg:mx-8 lg:rounded-3xl lg:border lg:shadow-[var(--shadow-card)]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {TRUST_STATS.map((stat, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.05}
              width="100%"
              className={[
                "flex flex-col items-center justify-center text-center py-6 px-4",
                // right border on all except last in each row
                index % 2 === 0 ? "border-r border-[var(--color-border)]" : "",
                // bottom border on first row (mobile 2-col)
                index < 2 ? "border-b border-[var(--color-border)] md:border-b-0" : "",
                // desktop: right border on all except last
                index < 3 ? "md:border-r md:border-[var(--color-border)]" : "",
              ].join(" ")}
            >
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-1 tabular-nums tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm font-medium text-[var(--color-text-muted)] leading-snug">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
