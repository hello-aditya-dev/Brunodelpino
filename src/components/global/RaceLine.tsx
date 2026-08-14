"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

/**
 * RaceLine — the signature continuous racing-line motif.
 *
 * An abstract line system (NOT a copied circuit graphic). It evolves through
 * the site: hero accent → Race Trace → career progression → Madrid → footer.
 *
 * - scales cleanly (viewBox-based SVG);
 * - uses currentColor / tokens;
 * - supports line-draw animation via stroke-dashoffset;
 * - reduced-motion renders the final state instantly;
 * - decorative instances are aria-hidden.
 */
type Variant = "horizontal" | "vertical" | "resolve" | "accent";

type RaceLineProps = {
  variant?: Variant;
  className?: string;
  color?: string;
  draw?: boolean;
  strokeWidth?: number;
  duration?: number;
  decorative?: boolean;
  style?: CSSProperties;
};

export function RaceLine({
  variant = "horizontal",
  className,
  color = "currentColor",
  draw = true,
  strokeWidth = 1.5,
  duration = 2.4,
  decorative = true,
  style,
}: RaceLineProps) {
  const reduce = useReducedMotion();
  const shouldDraw = draw && !reduce;

  // Each variant is an abstract, hand-tuned path — not a real circuit.
  const path = PATHS[variant];
  const vb = VIEWS[variant];

  return (
    <svg
      className={className}
      style={style}
      viewBox={vb}
      preserveAspectRatio="none"
      fill="none"
      aria-hidden={decorative ? "true" : undefined}
      role={decorative ? "presentation" : undefined}
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldDraw ? { pathLength: 0, opacity: 0 } : false}
        animate={shouldDraw ? { pathLength: 1, opacity: 1 } : { pathLength: 1, opacity: 1 }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1], opacity: { duration: 0.4 } }}
      />
    </svg>
  );
}

const VIEWS: Record<Variant, string> = {
  horizontal: "0 0 1200 120",
  vertical: "0 0 120 1200",
  resolve: "0 0 1200 80",
  accent: "0 0 600 60",
};

// Abstract flowing paths — a single continuous line with gentle inflections.
const PATHS: Record<Variant, string> = {
  horizontal:
    "M0,60 C120,20 220,20 320,55 C430,95 520,95 640,55 C760,18 860,18 960,52 C1060,86 1140,72 1200,58",
  vertical:
    "M60,0 C20,120 20,220 55,320 C95,430 95,520 55,640 C18,760 18,860 52,960 C86,1060 72,1140 58,1200",
  resolve:
    "M0,40 C200,40 400,40 600,40 C820,40 980,40 1200,40",
  accent:
    "M0,30 C90,8 170,8 250,28 C340,52 420,52 510,28 C560,14 590,22 600,30",
};
