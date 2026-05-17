"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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

// ─── Desktop: scroll-driven pinned section ───────────────────────────────────

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

      // How far we've scrolled into the container (0 = top, 1 = bottom)
      const scrolled = -rect.top / (containerHeight - viewportHeight);
      const clamped = Math.max(0, Math.min(1, scrolled));
      const index = Math.min(
        SLIDES.length - 1,
        Math.floor(clamped * SLIDES.length)
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Outer div is tall — one viewport height per slide
    <div
      ref={containerRef}
      style={{ height: `${SLIDES.length * 100}vh` }}
      className="relative"
    >
      {/* Sticky inner panel */}
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="mx-auto w-full max-w-7xl px-8 py-12">
          <div className="mb-10 text-center">
            <SectionHeading
              eyebrow="Our Expertise"
              title="Comprehensive Dental Solutions"
              description="From routine check-ups to complex full-mouth rehabilitations."
              alignment="center"
            />
          </div>

          <div className="flex gap-16 items-center">
            {/* Service list */}
            <div className="flex-1 min-w-0">
              {SLIDES.map((slide, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={slide.title}
                    className="flex items-start gap-5 py-5 border-b border-[var(--color-border)] last:border-0"
                  >
                    <span
                      className={`text-xs font-mono mt-2 w-5 shrink-0 transition-colors duration-300 ${
                        isActive
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-text-muted)]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1 min-w-0">
                      <motion.h3
                        animate={{
                          color: isActive
                            ? "var(--color-text-primary)"
                            : "var(--color-text-light)",
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-2xl lg:text-3xl font-bold tracking-tight"
                      >
                        {slide.title}
                      </motion.h3>

                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            key="desc"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="text-[var(--color-text-muted)] text-sm leading-relaxed overflow-hidden"
                          >
                            {slide.shortDescription}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}

              <a
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                View all 12+ treatments →
              </a>
            </div>

            {/* Image panel */}
            <div className="w-[380px] lg:w-[440px] shrink-0">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-[var(--color-border)]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={SLIDES[activeIndex].imageUrl}
                    alt={SLIDES[activeIndex].title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", opacity: 0.7 }}
                    animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", opacity: 1 }}
                    exit={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", opacity: 0.7 }}
                    transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
                  />
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="text-white font-semibold text-base"
                    >
                      {SLIDES[activeIndex].title}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex gap-2 mt-4 justify-center">
                {SLIDES.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-6 bg-[var(--color-primary)]"
                        : "w-1.5 bg-[var(--color-border)]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile: tap-through carousel ────────────────────────────────────────────

function MobileView() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="px-5 py-16 w-full">
      <div className="mb-10 text-center">
        <SectionHeading
          eyebrow="Our Expertise"
          title="Comprehensive Dental Solutions"
          description="From routine check-ups to complex full-mouth rehabilitations."
          alignment="center"
        />
      </div>

      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-[var(--color-border)] mb-6">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={SLIDES[activeIndex].imageUrl}
            alt={SLIDES[activeIndex].title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
          <button
            onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
            disabled={activeIndex === 0}
            className="pointer-events-auto w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow disabled:opacity-30 transition-opacity"
            aria-label="Previous service"
          >
            ←
          </button>
          <button
            onClick={() => setActiveIndex((i) => Math.min(SLIDES.length - 1, i + 1))}
            disabled={activeIndex === SLIDES.length - 1}
            className="pointer-events-auto w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow disabled:opacity-30 transition-opacity"
            aria-label="Next service"
          >
            →
          </button>
        </div>

        <div className="absolute bottom-3 left-0 right-0 flex gap-1.5 justify-center">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-5 bg-white" : "w-1.5 bg-white/50"
              }`}
              aria-label={`Go to ${SLIDES[i].title}`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl border border-[var(--color-border)] p-5 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-[var(--color-primary)]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-xs text-[var(--color-text-light)]">
              of {SLIDES.length}
            </span>
          </div>
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2 tracking-tight">
            {SLIDES[activeIndex].title}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            {SLIDES[activeIndex].shortDescription}
          </p>
        </motion.div>
      </AnimatePresence>

      <a
        href="/services"
        className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
      >
        View all 12+ treatments →
      </a>
    </div>
  );
}

// ─── Root export ─────────────────────────────────────────────────────────────

export function ServicesOverview() {
  return (
    <section className="bg-[var(--color-bg)]">
      <div className="hidden md:block">
        <DesktopView />
      </div>
      <div className="md:hidden">
        <MobileView />
      </div>
    </section>
  );
}
