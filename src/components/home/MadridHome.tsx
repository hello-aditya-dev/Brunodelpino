"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale";
import { Reveal } from "@/components/global/Reveal";
import { RaceLine } from "@/components/global/RaceLine";
import { MadridCountdown } from "./MadridCountdown";
import { madridAsset } from "@/content/media";
import { madridFinale, madringTest } from "@/content/season-2026";

/**
 * MadridHome — the emotional centerpiece (storyboard §06).
 * Large MADRID / 11–13.09.26 / HOME. "The season comes home."
 * Includes the 3-state countdown, the expanded finale format note, and
 * distinguishes the MADRING test (24–25 Aug) from the race (11–13 Sep).
 */
export function MadridHome() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="madrid"
      aria-label={t.madrid.title}
      className="relative overflow-hidden border-t border-line-dark bg-ink"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        { }
        <img
          src={madridAsset.src}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-25"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-20 sm:px-6 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left: huge title */}
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <span className="meta-label text-signal">04</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="hero-display mt-2 text-soft-white">
                {t.madrid.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="font-display text-3xl text-signal md:text-5xl">
                  {t.madrid.dates}
                </span>
                <span className="meta-label border border-signal/60 px-3 py-1 text-signal">
                  {t.madrid.home}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 font-display text-2xl text-soft-white md:text-4xl">
                {t.madrid.line}
              </p>
            </Reveal>

            {/* resolve line */}
            <Reveal delay={0.2} className="mt-10">
              <RaceLine
                variant="accent"
                className="h-10 w-72 text-signal/70"
                strokeWidth={1.5}
                duration={2}
              />
            </Reveal>
          </div>

          {/* Right: countdown + format */}
          <div className="col-span-12 flex flex-col justify-between gap-8 md:col-span-5">
            <Reveal delay={0.1}>
              <MadridCountdown />
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border border-line-dark p-5 sm:p-6">
                <p className="meta-label text-signal">{t.madrid.expanded}</p>
                <p className="mt-3 text-sm text-soft-white/85">
                  {t.madrid.expandedDetail}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-line-dark pt-4">
                  <FormatChip
                    label={t.season.qualifying}
                    count={madridFinale.expandedFormat.qualifyingSessions}
                  />
                  <FormatChip
                    label={t.season.sprint}
                    count={madridFinale.expandedFormat.sprintRaces}
                  />
                  <FormatChip
                    label={t.season.feature}
                    count={madridFinale.expandedFormat.featureRaces}
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-xs text-muted">
                {t.madrid.testNote}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormatChip({ label, count }: { label: string; count: number }) {
  return (
    <span className="flex items-baseline gap-1.5">
      <span className="font-display text-lg text-soft-white">{count}</span>
      <span className="meta-label text-muted">{label}</span>
    </span>
  );
}
