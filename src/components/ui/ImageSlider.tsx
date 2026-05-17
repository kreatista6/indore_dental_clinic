"use client";

import * as React from "react";
import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowsLeftRight } from "@phosphor-icons/react/dist/ssr";

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export function ImageSlider({ beforeImage, afterImage, className }: ImageSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(30);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition(Math.round((x / rect.width) * 100));
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  }, [handleMove]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const onStart = useCallback((clientX: number) => {
    isDragging.current = true;
    handleMove(clientX);
  }, [handleMove]);

  const onEnd = useCallback(() => { isDragging.current = false; }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-[320px] sm:h-[380px] w-full overflow-hidden rounded-[var(--radius-2xl)] select-none touch-pan-y", className)}
      onMouseMove={onMouseMove}
      onMouseDown={(e) => onStart(e.clientX)}
      onMouseUp={onEnd}
      onMouseLeave={onEnd}
      onTouchMove={onTouchMove}
      onTouchStart={(e) => onStart(e.touches[0].clientX)}
      onTouchEnd={onEnd}
    >
      {/* After (background) */}
      <Image src={afterImage} alt="After treatment" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />

      {/* Before (clipped foreground) — use clipPath which is GPU composited */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image src={beforeImage} alt="Before treatment" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded-full bg-black/50 text-white text-xs font-semibold">Before</div>
      <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full bg-black/50 text-white text-xs font-semibold">After</div>

      {/* Slider line + handle — use transform instead of left for GPU compositing */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-10 cursor-ew-resize"
        style={{ transform: `translateX(calc(${sliderPosition}vw * 0))`, left: `${sliderPosition}%`, willChange: "left" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-lg">
          <ArrowsLeftRight weight="bold" size={18} />
        </div>
      </div>
    </div>
  );
}
