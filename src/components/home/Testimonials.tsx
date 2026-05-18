"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Star } from "lucide-react";

const ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const dragStart = useRef<{ x: number; scrollLeft: number } | null>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsPaused(true);
    dragStart.current = { x: e.pageX, scrollLeft: containerRef.current.scrollLeft };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragStart.current || !containerRef.current) return;
    const dx = e.pageX - dragStart.current.x;
    containerRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const onMouseUp = () => {
    dragStart.current = null;
    setIsPaused(false);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsPaused(true);
    dragStart.current = { x: e.touches[0].pageX, scrollLeft: containerRef.current.scrollLeft };
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragStart.current || !containerRef.current) return;
    const dx = e.touches[0].pageX - dragStart.current.x;
    containerRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const onTouchEnd = () => {
    dragStart.current = null;
    setIsPaused(false);
  };

  return (
    <section className="py-16 md:py-24 section-gold-wash overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 mb-10">
        <ScrollReveal>
          <SectionHeading eyebrow="Patient Stories" title="Smiles That Speak" />
        </ScrollReveal>
      </div>

      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

        {/* Scrollable container — overflow-x-auto enables native touch scroll */}
        <div
          ref={containerRef}
          className="flex gap-5 overflow-x-auto cursor-grab active:cursor-grabbing select-none [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Inner track — CSS marquee animation, paused when user drags */}
          <div
            className="flex gap-5 w-max px-5"
            style={{
              animation: "marquee 40s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
              willChange: "transform",
            }}
          >
            {ITEMS.map((testimonial, i) => (
              <div
                key={`${testimonial.id}-${i}`}
                className="w-[280px] md:w-[340px] shrink-0 bg-white rounded-3xl p-6 shadow-sm border border-[var(--color-border)]/50 flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className={`h-4 w-4 ${idx < testimonial.rating ? "fill-[#F59E0B] text-[#F59E0B]" : "text-gray-300"}`} />
                  ))}
                </div>
                <p className="text-[var(--color-text-primary)] text-sm leading-relaxed mb-6 italic">
                  &quot;{testimonial.review}&quot;
                </p>
                <div className="flex flex-col items-center gap-3 mt-auto">
                  <div className="h-12 w-12 rounded-full overflow-hidden relative bg-gray-100 shadow-sm">
                    <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" sizes="48px" />
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
      </div>
    </section>
  );
}
