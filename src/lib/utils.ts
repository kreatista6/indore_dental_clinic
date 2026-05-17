/* =============================================
   Indore Dental Hospital — Utility Functions
   ============================================= */

import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names conditionally.
 * Lightweight alternative to clsx+twMerge for vanilla Tailwind.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Format a phone number for display.
 */
export function formatPhone(phone: string): string {
  return phone.replace(/(\+\d{2})(\d{5})(\d{5})/, "$1 $2 $3");
}

/**
 * Generate a WhatsApp URL with pre-filled message.
 */
export function getWhatsAppUrl(
  number: string,
  message: string = "Hello, I'd like to book an appointment."
): string {
  const cleaned = number.replace(/[^+\d]/g, "");
  return `https://wa.me/${cleaned.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

/**
 * Sanitize user input to prevent XSS.
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

/**
 * Generate a random ID for keys.
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

/**
 * Delay utility for stagger animations.
 */
export function staggerDelay(index: number, base: number = 0.1): number {
  return index * base;
}
