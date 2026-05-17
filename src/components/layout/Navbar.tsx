"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { NAV_LINKS, CLINIC_NAME, CLINIC_PHONE } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    // passive: true — critical for mobile scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 px-4",
          "md:top-6",
          isScrolled && "md:top-3"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl flex items-center justify-between rounded-full px-4 py-3 md:px-6 md:py-4 transition-all duration-300",
            isScrolled
              ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[var(--color-border)]"
              : "bg-white/95 shadow-sm border border-[var(--color-border)]"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="Indore Dental Hospital"
              width={36}
              height={36}
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm md:text-base font-bold tracking-tight text-[var(--color-text-primary)]">Indore Dental</span>
              <span className="text-[10px] md:text-xs font-medium text-[var(--color-text-muted)] tracking-wide">Hospital</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-[var(--color-primary)]",
                    isActive ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-[var(--color-primary)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA / Hamburger */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={`https://wa.me/${CLINIC_PHONE.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline mr-2"
            >
              <PhoneCall className="h-4 w-4" />
              {CLINIC_PHONE}
            </a>

            <Button asChild size="sm" className="hidden sm:inline-flex text-xs md:text-sm px-3 md:px-4">
              <Link href="/contact">Book Visit</Link>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] lg:hidden"
              aria-label="Open menu"
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-white"
          >
            <div className="flex h-full flex-col px-6 py-6 safe-area-inset">
              <div className="flex items-center justify-between mb-10">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image src="/logo.png" alt={CLINIC_NAME} width={36} height={36} className="h-9 w-9 object-contain" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-base font-bold text-[var(--color-text-primary)]">Indore Dental</span>
                    <span className="text-xs text-[var(--color-text-muted)]">Hospital</span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-bold tracking-tight py-3 border-b border-[var(--color-border)] transition-colors",
                      pathname === link.href
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-text-primary)]"
                    )}
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pb-8 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${CLINIC_PHONE.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold py-3 px-6"
                >
                  <PhoneCall className="h-4 w-4" /> {CLINIC_PHONE}
                </a>
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
