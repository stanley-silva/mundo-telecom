"use client";

import React, { useEffect, useRef, useState } from "react";

interface MetricCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  variant?: "dark" | "light";
}

export function MetricCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  description,
  variant = "dark",
}: MetricCounterProps) {
  const [count, setCount] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setCount(value);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 1600; // ms
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * value);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const isLight = variant === "light";

  return (
    <div
      ref={elementRef}
      className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 group flex flex-col justify-between ${
        isLight
          ? "bg-white border border-slate-200/90 hover:border-mundo-orange/50 hover:shadow-xl shadow-sm"
          : "bg-mundo-navy-surface/80 border border-mundo-navy-border/70 hover:border-mundo-orange/40 shadow-lg"
      }`}
    >
      <div>
        <div
          className={`text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight flex items-baseline gap-1 transition-colors ${
            isLight
              ? "text-mundo-navy group-hover:text-mundo-orange"
              : "text-mundo-white group-hover:text-mundo-orange"
          }`}
        >
          <span>{prefix}</span>
          <span>{hasAnimated ? count : value}</span>
          <span className="text-mundo-orange">{suffix}</span>
        </div>
        <div
          className={`text-base sm:text-lg font-display font-bold mt-2 ${
            isLight ? "text-mundo-navy" : "text-slate-100"
          }`}
        >
          {label}
        </div>
      </div>
      <p
        className={`text-xs sm:text-sm mt-3 leading-relaxed ${
          isLight ? "text-slate-600" : "text-slate-300"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
