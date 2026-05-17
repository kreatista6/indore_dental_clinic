import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        alignment === "center" ? "items-center text-center" : "items-center text-center md:items-start md:text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="rounded-full bg-[var(--color-primary-light)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-4xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-[65ch] text-balance text-lg text-[var(--color-text-muted)] md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
