import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SERVICES_DATA } from "@/lib/services-data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CLINIC_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Dental Treatments in Indore | ${CLINIC_NAME}`,
  description: `Explore all dental treatments at ${CLINIC_NAME} in Indore — implants, root canals, invisible aligners, whitening, dentures, pediatric dentistry and more. Book a consultation today.`,
};

export default function ServicesPage() {
  return (
    <div className="pb-12">
      <section className="bg-[var(--color-bg)] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-3">
              Comprehensive & Painless Dental Care by MDS Specialists
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Advanced treatments with modern technology for a healthy, confident smile.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {SERVICES_DATA.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group block h-full cursor-pointer w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-17px)]">
                <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="h-40 w-full relative overflow-hidden bg-[var(--color-primary-light)]">
                    <Image src={service.heroImage} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <div className="p-5 flex flex-col flex-1 items-center text-center">
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{service.title}</h3>
                    <p className="text-base text-[var(--color-text-muted)] mb-4 flex-1">{service.shortDescription}</p>
                    <span className="text-[var(--color-primary)] font-semibold text-sm mt-auto group-hover:underline">Learn More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
