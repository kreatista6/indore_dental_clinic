"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Star } from "lucide-react";

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    let animationId: number;
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      // Pause if hovered or currently dragging (swiping)
      if (!isHovered && !isDragging) {
        container.scrollLeft += 1; // Speed
        
        // The container has 3 identical sets. 
        // We seamlessly loop back when we've scrolled exactly one set (1/3 of scrollWidth)
        if (container.scrollLeft >= container.scrollWidth / 3) {
          container.scrollLeft -= container.scrollWidth / 3;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isDragging]);

  // Handle drag for desktop (native touch swiping works automatically via overflow-x-auto)
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2; // scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg)] overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 mb-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Patient Stories"
            title="Smiles That Speak"
          />
        </ScrollReveal>
      </div>

      <div className="relative w-full max-w-full">
        {/* Fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

        <div 
          ref={containerRef}
          className="flex gap-6 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden select-none cursor-grab active:cursor-grabbing w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            onMouseUpOrLeave();
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUpOrLeave}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* 3 identical sets for flawless infinite scrolling illusion */}
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
            <div 
              key={`${testimonial.id}-${i}`} 
              className="w-[320px] md:w-[400px] shrink-0 bg-white rounded-3xl p-8 shadow-sm border border-[var(--color-border)]/50 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star 
                    key={idx} 
                    className={`h-5 w-5 ${idx < testimonial.rating ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-[var(--color-text-primary)] text-lg mb-8 italic whitespace-normal">
                &quot;{testimonial.review}&quot;
              </p>
              <div className="flex flex-col items-center gap-4 mt-auto">
                <div className="h-16 w-16 rounded-full overflow-hidden relative bg-gray-100 shadow-sm">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text-primary)]">{testimonial.name}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{testimonial.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
