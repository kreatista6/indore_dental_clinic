import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageSlider } from "@/components/ui/ImageSlider";

export default function SmileGalleryPage() {
  const galleryItems = [
    {
      id: 1,
      category: "Dental Implants",
      beforeImage: "/gallery/implants-before.png",
      afterImage: "/gallery/implants-after.png",
    },
    {
      id: 2,
      category: "Smile Makeover",
      beforeImage: "/gallery/smile-makeover-before.png",
      afterImage: "/gallery/smile-makeover-after.png",
    },
    {
      id: 3,
      category: "Teeth Whitening",
      beforeImage: "/gallery/whitening-before.png",
      afterImage: "/gallery/whitening-after.png",
    },
    {
      id: 4,
      category: "Veneers",
      beforeImage: "/gallery/veneers-before.png",
      afterImage: "/gallery/veneers-after.png",
    }
  ];

  return (
    <div className="pb-12">
      <section className="bg-[var(--color-bg)] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-3">
              Real Smiles. Real Results.
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Every transformation in our gallery belongs to a real patient who walked in with a concern and left with a smile they&apos;re proud of. Browse our before-and-after results and imagine what we can do for you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.1} width="100%">
                <div className="flex flex-col gap-3">
                  <ImageSlider 
                    beforeImage={item.beforeImage} 
                    afterImage={item.afterImage} 
                  />
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-2 text-center">
                    <span className="inline-flex items-center rounded-full bg-[var(--color-bg)] px-4 py-1.5 text-sm font-bold text-[var(--color-primary)] border border-[var(--color-border)] shadow-sm">
                      {item.category}
                    </span>
                    <span className="text-sm font-medium text-[var(--color-text-muted)]">Drag to compare</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
