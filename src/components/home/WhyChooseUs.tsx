"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { ShieldCheck, Microscope, HeartHandshake, Clock, Stethoscope, Medal } from "lucide-react";

const features = [
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Advanced 3D Technology",
    description: "We use cutting-edge digital X-rays, 3D scanning, and CAD/CAM technology for diagnoses and treatments that are precise, faster, and more accurate than ever."
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Strict Sterilization Protocol",
    description: "Every instrument is sterilized to hospital-grade standards after each patient. Your safety is never compromised — not even once."
  },
  {
    icon: <HeartHandshake className="h-8 w-8" />,
    title: "Pain-Free Approach",
    description: "From topical numbing gels to the latest anaesthesia techniques, we ensure every visit is as comfortable and anxiety-free as possible."
  },
  {
    icon: <Medal className="h-8 w-8" />,
    title: "Premium Materials",
    description: "We use only internationally certified dental materials — from Swiss implants to German ceramic — so your results look great and last for years."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Zero Wait Time",
    description: "Your time is valuable. We run a strict appointment system so you're seen on time, every time — no long waiting room delays."
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Emergency Dental Care",
    description: "Toothache at midnight? Broken tooth before an important meeting? We offer same-day emergency care for patients who need us most."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-14 md:py-24 section-teal-wash">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="The Indore Dental Difference"
            title="Why Patients Trust Us"
            alignment="center"
          />
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <StaggerItem key={i}>
              <div className="group h-full rounded-[2rem] bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] border border-[var(--color-border)]/50 flex flex-col items-center text-center cursor-default">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-[var(--color-text-primary)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
