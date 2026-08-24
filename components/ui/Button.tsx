import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-white" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-display font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mundo-orange select-none disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98]";

    const variantStyles = {
      // Primary: Brand Solid Orange with pure white bold text
      primary:
        "bg-mundo-orange text-mundo-white hover:bg-mundo-orange-hover shadow-md hover:shadow-lg shadow-mundo-orange/20 border border-transparent",
      // Secondary: Deep Navy with white text
      secondary:
        "bg-mundo-navy text-mundo-white hover:bg-mundo-navy-surface border border-mundo-navy-border shadow-sm",
      // Outline Navy
      outline:
        "bg-transparent text-mundo-navy border-2 border-mundo-navy hover:bg-mundo-navy/5",
      // Outline White (for dark navy sections)
      "outline-white":
        "bg-transparent text-mundo-white border border-white/30 hover:border-white hover:bg-white/10",
      // Ghost
      ghost:
        "bg-transparent text-mundo-navy hover:bg-mundo-navy/5 border border-transparent",
      // Link style
      link:
        "bg-transparent text-mundo-orange hover:text-mundo-orange-hover p-0 underline-offset-4 hover:underline border-none",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5",
      md: "text-sm px-5 py-2.5 rounded-xl gap-2",
      lg: "text-base px-6 py-3.5 rounded-xl gap-2.5 shadow-sm",
      xl: "text-lg px-8 py-4 rounded-2xl gap-3 shadow-md",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{rightIcon}</span>}
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
