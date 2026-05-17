"use client";

import * as React from "react";
import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
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
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchend", handlePointerUp);
    return () => {
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-[400px] w-full overflow-hidden rounded-[var(--radius-2xl)] select-none",
        className
      )}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* After Image (Background) */}
      <Image
        src={afterImage}
        alt="After treatment"
        fill
        className="object-cover object-center"
        priority
      />
      
      {/* Before Image (Clipped Foreground) */}
      <div
        className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Before treatment"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize drop-shadow-md z-10 flex items-center justify-center"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)", willChange: "left" }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-lg hover:scale-110 transition-transform">
          <ArrowsLeftRight weight="bold" size={20} />
        </div>
      </div>
    </div>
  );
}
