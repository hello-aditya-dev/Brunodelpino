"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/lib/locale";
import { RaceLine } from "@/components/global/RaceLine";
import { heroAsset } from "@/content/media";
import { driver } from "@/content/driver";

/**
 * Hero — the opening + hero combined into one full-viewport editorial
 * composition (storyboard §00 + §01).
 *
 *  - near-black field;
 *  - line draws across;
 *  - `16` appears first, then `BRUNO DEL PINO` reveals;
 *  - atmospheric image asymmetric + subtle parallax;
 *  - mobile crop keeps the composition + #16 above the fold;
 *  - reduced motion: resolved composition immediately.
 */
export function Hero() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      ref={ref}
      id="opening"
      aria-label="Bruno Del Pino — 2026"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* Atmospheric image — asymmetric, right-weighted on desktop */}
      <motion.div
        style={reduce ? undefined : { y: imgY, scale: imgScale }}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 md:left-[38%]">
          { }
          <img
            src={heroAsset.src}
            alt=""
            className="h-full w-full object-cover opacity-55 md:opacity-65"
            loading="eager"
            fetchPriority="high"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        {/* Gradient field to keep type legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </motion.div>

      {/* Hairline top edge */}
      <div className="absolute inset-x-0 top-0 z-20 h-px bg-line-dark/60" />

      {/* Content */}
      <motion.div
        style={reduce ? undefined : { y: textY }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-between px-4 pb-10 pt-28 sm:px-6 md:px-10 md:pb-14 md:pt-32"
      >
        {/* Top meta row */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-between"
        >
          <span className="meta-label text-soft-white/70">
            {t.opening.presents}
          </span>
          <span className="meta-label hidden text-muted sm:inline">
            {t.hero.year}
          </span>
        </motion.div>

        {/* Center: 16 + name */}
        <div className="flex flex-1 flex-col justify-center py-10">
          {/* The number 16 */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mb-4 flex items-baseline gap-4 md:mb-6 md:gap-8"
          >
            <span className="font-display text-[clamp(4rem,14vw,11rem)] leading-none text-signal">
              {driver.number}
            </span>
            <span className="meta-label hidden text-soft-white/60 sm:inline">
              {t.hero.tagline}
              <br />
              {driver.nationalityCode}
            </span>
          </motion.div>

          {/* Racing line crossing the identity */}
          <div className="relative">
            <RaceLine
              variant="horizontal"
              className="absolute -top-2 left-0 h-6 w-full text-signal/70 md:-top-3 md:h-8"
              strokeWidth={2}
              duration={1.6}
            />
            <h1 className="font-display hero-display text-soft-white">
              <motion.span
                initial={reduce ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.35 }}
                className="block"
              >
                {driver.firstName}
              </motion.span>
              <motion.span
                initial={reduce ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.5 }}
                className="block"
              >
                {driver.lastName}
              </motion.span>
            </h1>
          </div>

          {/* Metadata strip */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line-dark pt-5 md:mt-10 md:gap-x-8"
          >
            <MetaItem value={`${driver.number} / ${driver.nationalityCode}`} />
            <Divider />
            <MetaItem value={t.hero.championship} />
            <Divider />
            <MetaItem value={t.hero.team} />
            <Divider />
            <MetaItem value={t.hero.year} accent />
          </motion.div>
        </div>

        {/* Bottom: scroll cue */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-between"
        >
          <span className="meta-label text-muted">{t.hero.scroll}</span>
          <motion.div
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
            aria-hidden="true"
          >
            <span className="h-8 w-px bg-signal" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function MetaItem({ value, accent }: { value: string; accent?: boolean }) {
  return (
    <span
      className={`meta-label ${accent ? "text-signal" : "text-soft-white/80"}`}
    >
      {value}
    </span>
  );
}

function Divider() {
  return <span className="hidden h-3 w-px bg-line-dark sm:inline" aria-hidden="true" />;
}
