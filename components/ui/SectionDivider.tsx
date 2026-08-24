import React from "react";

interface SectionDividerProps {
  fromColor?: string; // fill color of the slope
  toColor?: string;   // background color behind
  direction?: "down" | "up";
  height?: number;
  className?: string;
}

export function SectionDivider({
  fromColor = "#07224B",
  direction = "down",
  height = 40,
  className = "",
}: SectionDividerProps) {
  const isDown = direction === "down";

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none -mb-[1px] ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        {isDown ? (
          <path
            d="M0,0 L1200,0 L1200,80 L0,120 Z"
            fill={fromColor}
          />
        ) : (
          <path
            d="M0,40 L1200,0 L1200,120 L0,120 Z"
            fill={fromColor}
          />
        )}
      </svg>
    </div>
  );
}
