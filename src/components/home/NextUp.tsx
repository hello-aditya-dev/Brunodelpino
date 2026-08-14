"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale";
import { Reveal } from "@/components/global/Reveal";
import { RaceLine } from "@/components/global/RaceLine";
import { nextRound, seasonSummary } from "@/content/season-2026";
import { computeCountdown, type CountdownParts } from "@/lib/dates";
import { formatLong } from "@/lib/dates";

/**
 * NextUp — V2 section that makes the site feel alive.
 * Data-driven from local season data. Shows the next round with a compact
 * countdown. Automatically advances when the round passes.
 *
 * States: upcoming | event-live | complete/advance | season-complete.
 * No negative countdown values.
 */
export function NextUp() {
  const { t, locale } = useLocale();
  const reduce = useReducedMotion();
  const [parts, setParts] = useState<CountdownParts | null>(null);

  useEffect(() => {
    if (!nextRound) return;
    const start = `${nextRound.startDate}T00:00:00Z`;
    const end = `${nextRound.endDate}T23:59:59Z`;
    const tick = () => setParts(computeCountdown(Date.now(), start, end));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!nextRound) {
    // Season complete state.
    return (
      <section className="border-b border-line-dark bg-ink py-10 md:py-14">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-4 px-4 sm:px-6 md:flex-row md:items-center md:px-10">
          <div className="flex items-center gap-4">
            <span className="meta-label text-signal">{t.nextUp.label}</span>
            <span className="font-display text-2xl text-soft-white md:text-3xl">
              {t.nextUp.seasonComplete}
            </span>
          </div>
          <Link href="/season" className="focus-ring group inline-flex items-center gap-2 text-sm text-muted hover:text-soft-white">
            <span className="h-px w-5 bg-signal transition-all group-hover:w-8" />
            {t.nextUp.viewSeason}
          </Link>
        </div>
      </section>
    );
  }

  const isLive = parts?.state === "event";

  return (
    <section className="relative border-b border-line-dark bg-ink py-8 md:py-12">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left: label + round info */}
          <div className="flex items-baseline gap-5">
            <span className="meta-label text-signal">{t.nextUp.label}</span>
            <div className="h-8 w-px bg-line-dark hidden sm:block" aria-hidden="true" />
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl text-soft-white md:text-5xl">
                {nextRound.name}
              </span>
              <span className="meta-label text-muted">
                {t.nextUp.round} {String(nextRound.round).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Center: dates */}
          <div className="flex items-baseline gap-3 md:gap-6">
            <span className="text-sm text-muted md:text-base">
              {formatLong(nextRound.startDate, locale)} — {formatLong(nextRound.endDate, locale)}
            </span>
            <span className="meta-label hidden text-muted/60 md:inline">
              {nextRound.country}
            </span>
          </div>

          {/* Right: compact countdown or live state */}
          <div className="flex items-center gap-3">
            {isLive ? (
              <div className="flex items-center gap-2 border border-signal/50 bg-signal/5 px-4 py-2">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-signal" aria-hidden="true" />
                <span className="font-display text-sm uppercase tracking-wide text-signal">
                  {t.nextUp.live}
                </span>
              </div>
            ) : parts ? (
              <div className="flex items-baseline gap-2" aria-label={t.nextUp.countdown}>
                <CountUnit value={parts.days} label={t.nextUp.days} accent />
                <span className="font-display text-2xl text-muted">:</span>
                <CountUnit value={parts.hours} label={t.nextUp.hours} />
                <span className="font-display text-2xl text-muted">:</span>
                <CountUnit value={parts.minutes} label={t.nextUp.minutes} />
                <span className="font-display text-2xl text-muted">:</span>
                <CountUnit value={parts.seconds} label={t.nextUp.seconds} />
              </div>
            ) : (
              <div className="h-8 w-40 animate-pulse bg-line-dark/40" aria-hidden="true" />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CountUnit({
  value,
  label,
  accent,
}: {
  value: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <span
        className={`font-display tabular-nums text-2xl leading-none md:text-3xl ${
          accent ? "text-signal" : "text-soft-white"
        }`}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-0.5 text-[0.5rem] uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
    </div>
  );
}
