"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { SERVICES_DATA } from "@/lib/services-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SLIDES = SERVICES_DATA.filter((s) => s.featured)
  .concat(SERVICES_DATA.filter((s) => !s.featured).slice(0, 2))
  .slice(0, 5)
  .map((s) => ({
    title: s.title,
    shortDescription: s.shortDescription,
    imageUrl: s.heroImage.replace("w=2000", "w=900"),
  }));

// ─── Desktop ─────────────────────────────────────────────────────────────────
function DesktopView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = -rect.top / (containerHeight - viewportHeight);
      const clamped = Math.max(0, Math.min(1, scrolled));
      setActiveIndex(Math.min(SLIDES.length - 1, Math.floor(clamped * SLIDES.length)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ height: `${SLIDES.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-8 py-12">
          <div className="mb-10 text-center">
            <SectionHeading
              eyebrow="Our Expertise"
              title="Comprehensive Dental Solutions"
              description="From routine check-ups to complex full-mouth rehabilitations."
              alignment="center"
            />
          </div>
          <div className="flex gap-12 xl:gap-16 items-center">
            <div className="flex-1 min-w-0">
              {SLIDES.map((slide, i) => {
                const isActive = activeIndex === i;
                return (
                  <div key={slide.title} className="flex items-start gap-5 py-5 border-b border-[var(--color-border)] last:border-0">
                    <span className={`text-xs font-mono mt-2 w-5 shrink-0 transition-colors duration-200 ${isActive ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-2xl lg:text-3xl font-bold tracking-tight transition-colors duration-200 ${isActive ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-light)]"}`}>
                        {slide.title}
                      </h3>
                      <div className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-20 opacity-100 mt-1.5" : "max-h-0 opacity-0"}`}>
                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{slide.shortDescription}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <a href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline">
                View all 12+ treatments →
              </a>
            </div>
            <div className="w-[340px] lg:w-[420px] shrink-0">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-[var(--color-border)]">
                <AnimatePresence mode="wait">
                  <motion.div key={activeIndex} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                    <Image src={SLIDES[activeIndex].imageUrl} alt={SLIDES[activeIndex].title} fill className="object-cover" sizes="420px" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent z-10">
                  <p className="text-white font-semibold text-base">{SLIDES[activeIndex].title}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4 justify-center">
                {SLIDES.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-[var(--color-primary)]" : "w-1.5 bg-[var(--color-border)]"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile ───────────────────────────────────────────────────────────────────
function MobileView() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="px-5 py-12 w-full">
      <div className="mb-8 text-center">
        <SectionHeading eyebrow="Our Expertise" title="Comprehensive Dental Solutions" description="From routine check-ups to complex full-mouth rehabilitations." alignment="center" />
      </div>
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-5">
        <Image src={SLIDES[activeIndex].imageUrl} alt={SLIDES[activeIndex].title} fill className="object-cover transition-opacity duration-300" sizes="100vw" />
        <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
          <button onClick={() => setActiveIndex((i) => Math.max(0, i - 1))} disabled={activeIndex === 0}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[var(--color-primary)] shadow-md disabled:opacity-30" aria-label="Previous">
            <CaretLeft weight="bold" size={20} />
          </button>
          <button onClick={() => setActiveIndex((i) => Math.min(SLIDES.length - 1, i + 1))} disabled={activeIndex === SLIDES.length - 1}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[var(--color-primary)] shadow-md disabled:opacity-30" aria-label="Next">
            <CaretRight weight="bold" size={20} />
          </button>
        </div>
        <div className="absolute bottom-3 left-0 right-0 flex gap-1.5 justify-center">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${i === activeIndex ? "w-5 bg-white" : "w-1.5 bg-white/50"}`}
              aria-label={`Go to ${SLIDES[i].title}`} />
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-[var(--color-border)] p-5 shadow-sm">
        <span className="text-xs font-mono text-[var(--color-primary)]">{String(activeIndex + 1).padStart(2, "0")} / {SLIDES.length}</span>
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-1 mb-2 tracking-tight">{SLIDES[activeIndex].title}</h3>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{SLIDES[activeIndex].shortDescription}</p>
      </div>
      <a href="/services" className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline">
        View all 12+ treatments →
      </a>
    </div>
  );
}

export function ServicesOverview() {
  return (
    <section className="section-teal-wash">
      <div className="hidden md:block"><DesktopView /></div>
      <div className="md:hidden"><MobileView /></div>
    </section>
  );
}
