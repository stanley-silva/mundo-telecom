import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "navy" | "outline" | "white" | "success";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "orange",
  className,
  icon,
}: BadgeProps) {
  const variantStyles = {
    orange: "bg-mundo-orange/15 text-mundo-orange border border-mundo-orange/30",
    navy: "bg-mundo-navy text-mundo-white border border-mundo-navy-border",
    outline: "bg-transparent text-white/90 border border-white/20 backdrop-blur-sm",
    white: "bg-white text-mundo-navy shadow-sm border border-slate-200",
    success: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
