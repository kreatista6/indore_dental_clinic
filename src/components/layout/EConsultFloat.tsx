"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Stethoscope, Upload, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function EConsultFloat() {
  const [open, setOpen]       = useState(false);
  const [status, setStatus]   = useState<Status>("idle");
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef               = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: "", phone: "", email: "", concern: "",
  });

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData();
    data.append("name",    form.name);
    data.append("phone",   form.phone);
    data.append("email",   form.email);
    data.append("concern", form.concern);
    if (fileRef.current?.files?.[0]) {
      data.append("selfie", fileRef.current.files[0]);
    }

    try {
      const res = await fetch("/api/econsultation", { method: "POST", body: data });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", concern: "" });
        setPreview(null);
        if (fileRef.current) fileRef.current.value = "";
        setTimeout(() => { setStatus("idle"); setOpen(false); }, 3500);
      } else if (res.status === 429) {
        setStatus("error");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* ── Floating trigger button ─────────────────────────────────── */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 md:bottom-6 right-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)]/50"
        aria-label="Free E-Consultation"
      >
        <span className="absolute inset-0 z-[-1] rounded-full bg-[var(--color-primary)] animate-ping opacity-50 duration-1000" />
        <Stethoscope size={26} />
      </button>

      {/* ── Slide-in panel ──────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/50"
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-full max-w-md bg-white shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)] bg-[var(--color-primary-light)]">
                <div>
                  <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Not Ready to Visit Yet? Talk to Us Online.</h2>
                  <p className="text-sm text-[var(--color-text-muted)]">Share your dental concern and Dr. Shrivastava&apos;s team will review it and get back to you with guidance — from the comfort of your home.</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors shadow-sm"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <CheckCircle size={36} />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Thank You for Reaching Out!</h3>
                    <p className="text-[var(--color-text-muted)] max-w-xs">
                      We&apos;ve received your concern and our team will review it shortly. Dr. Shrivastava&apos;s team will contact you within 24 hours with guidance and next steps. Your smile is in good hands!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-[var(--color-text-primary)]">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-[var(--color-text-primary)]">Phone Number *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-[var(--color-text-primary)]">Email <span className="text-[var(--color-text-muted)] font-normal">(optional)</span></label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="you@example.com"
                        className="h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                      />
                    </div>

                    {/* Concern */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-[var(--color-text-primary)]">Describe Your Concern *</label>
                      <textarea
                        name="concern"
                        value={form.concern}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="E.g. I have a toothache on the lower left side for the past 3 days, or I'm interested in getting a smile makeover — please describe your concern in as much detail as you're comfortable sharing..."
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                      />
                    </div>

                    {/* Selfie upload */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-[var(--color-text-primary)]">
                        Upload a Selfie / Smile Photo <span className="text-[var(--color-text-muted)] font-normal">(optional)</span>
                      </label>
                      <p className="text-xs text-[var(--color-text-muted)]">Helps our dentist assess your concern better</p>

                      <div
                        onClick={() => fileRef.current?.click()}
                        className="mt-1 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[var(--color-border)] bg-[var(--color-bg)] p-5 cursor-pointer hover:border-[var(--color-primary)] transition-colors"
                      >
                        {preview ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={preview} alt="Preview" className="h-32 w-full object-cover rounded-lg" />
                        ) : (
                          <>
                            <Upload size={24} className="text-[var(--color-text-muted)]" />
                            <span className="text-sm text-[var(--color-text-muted)]">Click to upload photo</span>
                            <span className="text-xs text-[var(--color-text-light)]">JPG, PNG, WEBP — max 5 MB</span>
                          </>
                        )}
                      </div>
                      <input
                        ref={fileRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        className="hidden"
                        onChange={handleFile}
                      />
                      {preview && (
                        <button
                          type="button"
                          onClick={() => { setPreview(null); if (fileRef.current) fileRef.current.value = ""; }}
                          className="text-xs text-red-500 hover:underline self-start"
                        >
                          Remove photo
                        </button>
                      )}
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
                        Too many requests or something went wrong. Please wait a few minutes or call us directly.
                      </p>
                    )}

                    <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full mt-1">
                      {status === "submitting" ? (
                        <span className="flex items-center gap-2"><Loader2 size={16} className="animate-spin" /> Sending...</span>
                      ) : (
                        "Submit for Free Consultation"
                      )}
                    </Button>

                    <p className="text-xs text-center text-[var(--color-text-muted)]">
                      Our dentist will respond within 24 hours. No charges for e-consultation.
                    </p>

                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
