"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageSlider } from "@/components/ui/ImageSlider";
import { ArrowRight } from "lucide-react";

export function SmileGalleryPreview() {
  const previewCases = [
    {
      id: 1,
      category: "Veneers & Whitening",
      beforeImage: "/gallery/veneers-before.png",
      afterImage: "/gallery/veneers-after.png",
    },
    {
      id: 2,
      category: "Dental Implants",
      beforeImage: "/gallery/implants-before.png",
      afterImage: "/gallery/implants-after.png",
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <SectionHeading
              eyebrow="Transformations"
              title="Real Patient Results"
            />
            <Link 
              href="/smile-gallery" 
              className="inline-flex items-center text-[var(--color-primary)] font-semibold hover:underline"
            >
              View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {previewCases.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.2} width="100%">
              <div className="flex flex-col gap-4">
                <ImageSlider 
                  beforeImage={item.beforeImage} 
                  afterImage={item.afterImage} 
                />
                <div className="flex items-center justify-between px-2">
                  <span className="inline-flex items-center rounded-full bg-[var(--color-bg)] px-3 py-1 text-sm font-medium text-[var(--color-text-primary)]">
                    {item.category}
                  </span>
                  <span className="text-sm text-[var(--color-text-muted)]">Drag to compare</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
