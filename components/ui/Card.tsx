import type { ReactNode } from "react";

/**
 * Reusable brutalist panel: 2px ink border, pure-white fill,
 * hard offset shadow. `hover` upgrades the shadow to yellow + a
 * subtle lift for interactive surfaces.
 */
export default function Card({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-[2px] border-2 border-ink bg-white shadow-brutal ${
        hover ? "brutal-card" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}