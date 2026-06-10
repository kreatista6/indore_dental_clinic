"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { PhoneCall, CalendarCheck } from "lucide-react";
import { CLINIC_PHONE } from "@/lib/constants";
import { SERVICES_DATA } from "@/lib/services-data";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  treatment: z.string().min(1, "Please select a treatment"),
  date: z.string().min(1, "Please select a preferred date"),
  time: z.string().min(1, "Please select a preferred time"),
  message: z.string().optional(),
});

const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM",
];

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export function AppointmentCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else if (response.status === 429) {
        alert("You've submitted too many requests. Please wait a few minutes and try again.");
      } else {
        alert("Something went wrong. Please try calling us instead.");
      }
    } catch {
      alert("Something went wrong. Please try calling us instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-14 md:py-24 section-teal-wash relative overflow-hidden">
      {/* Decorative abstract mesh */}
      <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-bl from-[var(--color-primary-light)] to-transparent opacity-50 z-0 pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start bg-white rounded-[2rem] p-6 md:p-12 shadow-[var(--shadow-float)] border border-[var(--color-border)]">
          
          {/* Left: Content */}
          <div className="flex flex-col gap-8 items-center text-center">
            <ScrollReveal direction="right">
              <SectionHeading
                eyebrow="Book Your Visit"
                title="Ready for a Smile You're Proud Of?"
                description="Whether it's a routine check-up, a complete smile makeover, or a dental emergency — we're here for you. Book your consultation today and take the first step towards a healthier, more confident smile."
              />
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex flex-col md:flex-row items-center justify-center text-center gap-4 p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] w-full max-w-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">Need immediate help?</p>
                    <a href={`tel:${CLINIC_PHONE.replace(/\s+/g, '')}`} className="text-xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-primary)]">
                      {CLINIC_PHONE}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal direction="left" delay={0.3} className="w-full">
            <div className="bg-[var(--color-bg)] p-8 md:p-10 rounded-[2rem]">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CalendarCheck className="text-[var(--color-primary)]" />
                Request Appointment
              </h3>

              {isSuccess ? (
                <div className="p-6 rounded-xl bg-[var(--color-success)]/10 text-[var(--color-success)] border border-[var(--color-success)]/20 text-center">
                  <h4 className="text-lg font-bold mb-2">Thank you!</h4>
                  <p>Your appointment request has been received. Our team will call you within a few hours to confirm your slot. We look forward to welcoming you to Indore Dental Hospital!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <Input placeholder="Your Name" {...register("name")} className="bg-white" />
                      {errors.name && <span className="text-red-500 text-xs px-1">{errors.name.message}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Input placeholder="Phone Number" type="tel" {...register("phone")} className="bg-white" />
                      {errors.phone && <span className="text-red-500 text-xs px-1">{errors.phone.message}</span>}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Input placeholder="Email Address" type="email" {...register("email")} className="bg-white" />
                    {errors.email && <span className="text-red-500 text-xs px-1">{errors.email.message}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="treatment" className="sr-only">Select Treatment</label>
                      <select 
                        id="treatment"
                        {...register("treatment")}
                        className="flex h-12 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-text-primary)] shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-primary)]"
                      >
                        <option value="">Select Treatment</option>
                        {SERVICES_DATA.map((service) => (
                          <option key={service.slug} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                        <option value="General Treatment">General Treatment</option>
                        <option value="Other">Other / Not Sure</option>
                      </select>
                      {errors.treatment && <span className="text-red-500 text-xs px-1">{errors.treatment.message}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="appt-date" className="sr-only">Preferred Date</label>
                      <Input id="appt-date" type="date" {...register("date")} className="bg-white text-[var(--color-text-primary)]" />
                      {errors.date && <span className="text-red-500 text-xs px-1">{errors.date.message}</span>}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="appt-time" className="sr-only">Preferred Time</label>
                    <select 
                      id="appt-time"
                      {...register("time")}
                      className="flex h-12 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-text-primary)] shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-primary)]"
                    >
                      <option value="">Select Preferred Time</option>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    {errors.time && <span className="text-red-500 text-xs px-1">{errors.time.message}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Textarea placeholder="Any specific concerns or message?" {...register("message")} className="bg-white" />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full mt-2">
                    {isSubmitting ? "Sending Request..." : "Request Appointment"}
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  );
}
