"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale";
import { RaceLine } from "@/components/global/RaceLine";
import { Reveal } from "@/components/global/Reveal";
import { driver } from "@/content/driver";

/**
 * RouteHeader — shared editorial header for secondary routes.
 * Keeps the racing-line motif and #16 identity consistent across pages.
 */
export function RouteHeader({
  index,
  title,
  kicker,
  intro,
}: {
  index: string;
  title: string;
  kicker?: string;
  intro?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <header className="relative overflow-hidden border-b border-line-dark bg-ink pt-28 md:pt-36">
      <div className="mx-auto max-w-[1600px] px-4 pb-12 sm:px-6 md:px-10 md:pb-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="meta-label text-signal">{index}</span>
            {kicker && (
              <span className="meta-label text-muted">{kicker}</span>
            )}
          </div>
          <h1 className="section-title mt-3 text-soft-white">{title}</h1>
          {intro && (
            <p className="editorial-body mt-5 max-w-2xl text-muted">{intro}</p>
          )}
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <RaceLine
            variant="horizontal"
            className="h-5 w-full text-signal/60"
            strokeWidth={1.5}
            duration={2}
          />
        </Reveal>
        <Reveal delay={0.15} className="mt-6">
          <Link
            href="/"
            className="focus-ring group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:text-soft-white"
          >
            <span className="h-px w-5 bg-signal transition-all group-hover:w-9" />
            {driver.firstName} {driver.lastName} / {driver.number}
          </Link>
        </Reveal>
      </div>
    </header>
  );
}
