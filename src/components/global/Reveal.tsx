"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

/**
 * Reveal — scroll-triggered opacity/translate reveal.
 * Reduced-motion: renders final state immediately.
 */
type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  as,
  delay = 0,
  y = 28,
  className,
  once = true,
  amount = 0.3,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = (as ? motion.create(as as ElementType) : motion.div) as typeof motion.div;

  if (reduce) {
    const Tag = (as ?? "div") as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </MotionTag>
  );
}
