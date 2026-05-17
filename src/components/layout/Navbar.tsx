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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 mx-auto w-full max-w-7xl transition-all duration-500 md:top-6 px-4",
          isScrolled ? "md:top-4" : "md:top-6"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      >
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-6 py-4 transition-all duration-500",
            isScrolled
              ? "bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl border border-white/20"
              : "bg-white/70 backdrop-blur-md shadow-sm border border-white/50"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Indore Dental Hospital"
              width={40}
              height={40}
              className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold tracking-tight text-[var(--color-text-primary)]">Indore Dental</span>
              <span className="text-xs font-medium text-[var(--color-text-muted)] tracking-wide">Hospital</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
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
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 mr-4">
              <PhoneCall className="h-4 w-4 text-[var(--color-primary)]" />
              <a
                href={`https://wa.me/${CLINIC_PHONE.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                {CLINIC_PHONE}
              </a>
            </div>
            
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">Book Visit</Link>
            </Button>
            
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] md:hidden"
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-2xl"
          >
            <div className="flex h-full flex-col px-6 py-6">
              <div className="flex items-center justify-between mb-12">
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="Indore Dental Hospital"
                    width={40}
                    height={40}
                    className="h-9 w-9 object-contain"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="text-base font-bold tracking-tight text-[var(--color-text-primary)]">Indore Dental</span>
                    <span className="text-xs font-medium text-[var(--color-text-muted)] tracking-wide">Hospital</span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button asChild size="lg" className="w-full">
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Book Appointment
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
