"use client";

import { COMMON_FAQS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

export function FAQSection() {
  return (
    <section className="py-14 md:py-24 bg-[var(--color-bg)]">
      <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            alignment="center"
            className="mb-10"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} width="100%">
          <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-[var(--color-border)]">
            <Accordion type="single" collapsible className="w-full">
              {COMMON_FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
