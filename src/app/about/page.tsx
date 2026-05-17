import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="pb-12">
      {/* Hero */}
      <section className="bg-[var(--color-primary-light)] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-3">
              About Indore Dental Hospital
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Setting the standard for premium, pain-free dental care in Central India.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="right">
              <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop" 
                  alt="Clinic Interior" 
                  fill 
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <SectionHeading eyebrow="Our Story" title="A Legacy of Excellence" />
              <div className="mt-5 space-y-4 text-lg text-[var(--color-text-muted)]">
                <p>
                  Founded with a vision to revolutionize dental care in Indore, our hospital combines state-of-the-art technology with compassionate, patient-first care.
                </p>
                <p>
                  We understand that visiting the dentist can be daunting. That&apos;s why we&apos;ve engineered every aspect of our clinic—from the soothing ambiance to the painless injection systems—to ensure your complete comfort.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
