/**
 * Motion tokens — centralized durations, easings, and staggers
 * (09_MOTION_SYSTEM.md). Avoid random per-component motion numbers.
 *
 * Motion families:
 *  - identity reveal (hero only)
 *  - trace motion (Race Trace / career line — progression)
 *  - impact motion (Melbourne — sharper)
 *  - home motion (Barcelona — slower, more human)
 *  - finale motion (Madrid — resolution)
 *  - media motion (minimal)
 */
export const motionTokens = {
  duration: {
    fast: 0.35,
    base: 0.6,
    editorial: 0.8,
    slow: 1.1,
  },
  easing: {
    enter: [0.22, 1, 0.36, 1] as const,
    exit: [0.4, 0, 1, 1] as const,
    impact: [0.16, 1, 0.3, 1] as const,
    human: [0.33, 0, 0.2, 1] as const,
    resolution: [0.45, 0, 0.1, 1] as const,
  },
  stagger: {
    small: 0.05,
    base: 0.08,
    large: 0.12,
  },
  // IntersectionObserver viewport config for whileInView reveals.
  viewport: {
    once: true,
    amount: 0.3,
  },
} as const;

// Convenience labels per motion family, for documentation in components.
export type MotionFamily =
  | "identity"
  | "trace"
  | "impact"
  | "home"
  | "finale"
  | "media";
