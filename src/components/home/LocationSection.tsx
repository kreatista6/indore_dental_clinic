"use client";

import { CLINIC_ADDRESS, CLINIC_TIMINGS, CLINIC_PHONE, CLINIC_EMAIL } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MapPin, Clock, Phone, Envelope } from "@phosphor-icons/react/dist/ssr";

export function LocationSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Visit Us"
            title="Location & Timings"
            alignment="center"
            className="mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left: Info Cards */}
          <ScrollReveal direction="right" width="100%">
            <div className="flex sm:flex-col gap-6 overflow-x-auto sm:overflow-visible pb-6 sm:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden w-full" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              
              <div className="w-[85vw] sm:w-full shrink-0 snap-center p-8 rounded-[2rem] bg-[var(--color-bg)] border border-[var(--color-border)] flex flex-col md:flex-row items-center text-center md:text-left md:items-start gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                  <MapPin size={28} weight="fill" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Clinic Address</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed max-w-sm">
                    {CLINIC_ADDRESS}
                  </p>
                </div>
              </div>

              <div className="w-[85vw] sm:w-full shrink-0 snap-center p-8 rounded-[2rem] bg-[var(--color-bg)] border border-[var(--color-border)] flex flex-col md:flex-row items-center text-center md:text-left md:items-start gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                  <Clock size={28} weight="fill" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Operating Hours</h3>
                  <ul className="flex flex-col gap-2 text-[var(--color-text-muted)]">
                    {CLINIC_TIMINGS.map((timing, i) => (
                      <li key={i} className="flex justify-between w-full max-w-xs gap-4">
                        <span className="font-medium">{timing.days}:</span>
                        <span>{timing.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-[85vw] sm:w-full shrink-0 snap-center flex flex-col sm:grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-[1.5rem] bg-[var(--color-bg)] border border-[var(--color-border)] flex flex-col items-center text-center md:items-start md:text-left gap-4">
                  <Phone size={24} className="text-[var(--color-primary)]" weight="fill" />
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">Call Us</p>
                    <p className="font-bold text-[var(--color-text-primary)]">{CLINIC_PHONE}</p>
                  </div>
                </div>
                <div className="p-6 rounded-[1.5rem] bg-[var(--color-bg)] border border-[var(--color-border)] flex flex-col items-center text-center md:items-start md:text-left gap-4">
                  <Envelope size={24} className="text-[var(--color-primary)]" weight="fill" />
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">Email Us</p>
                    <p className="font-bold text-[var(--color-text-primary)] break-all">{CLINIC_EMAIL}</p>
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Right: Map Embed */}
          <ScrollReveal direction="left" width="100%" className="h-full min-h-[400px]">
            <div className="h-full w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-[var(--color-border)] bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55657342898!2d75.79380963288421!3d22.724205011929007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location Map"
                className="w-full h-full min-h-[400px]"
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
