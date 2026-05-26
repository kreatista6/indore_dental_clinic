"use client";

import { useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const ITEMS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);

  const applyTransform = useCallback((px: number) => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translateX(${px}px)`;
  }, []);

  // RAF loop
  useEffect(() => {
    const speed = 0.6;
    const tick = () => {
      if (!isPaused.current && trackRef.current) {
        const halfWidth = trackRef.current.scrollWidth / 2;
        offsetRef.current -= speed;
        if (Math.abs(offsetRef.current) >= halfWidth) {
          offsetRef.current += halfWidth;
        }
        applyTransform(offsetRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [applyTransform]);

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    isPaused.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    offsetRef.current = dragStartOffset.current + (e.clientX - dragStartX.current);
    applyTransform(offsetRef.current);
  };
  const onMouseUp = () => { isDragging.current = false; isPaused.current = false; };

  // Touch drag
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    isPaused.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartOffset.current = offsetRef.current;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    offsetRef.current = dragStartOffset.current + (e.touches[0].clientX - dragStartX.current);
    applyTransform(offsetRef.current);
  };
  const onTouchEnd = () => { isDragging.current = false; isPaused.current = false; };

  return (
    <section className="py-16 md:py-24 section-gold-wash overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-3">
            Patient Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] leading-tight tracking-tight">
            Smiles That Speak
          </h2>
        </motion.div>
      </div>

      {/* Marquee track */}
      <div
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => { isPaused.current = true; }}
        onMouseLeave={() => { isPaused.current = false; isDragging.current = false; }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex gap-5 w-max select-none will-change-transform py-4"
        >
          {ITEMS.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="flex-shrink-0 w-[85vw] sm:w-[360px] bg-white rounded-3xl p-7 shadow-sm border border-[var(--color-border)]/60 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6 flex-1">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="h-10 w-10 rounded-full overflow-hidden relative bg-gray-100 shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--color-text-primary)]">{t.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{t.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fafaf8] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fafaf8] to-transparent z-10" />
      </div>
    </section>
  );
}
