"use client";

import { useLocale } from "@/lib/locale";
import { Reveal } from "@/components/global/Reveal";
import { RaceLine } from "@/components/global/RaceLine";
import { seasonSummary } from "@/content/season-2026";

/**
 * CurrentStats — large typographic values, NOT dashboard cards (storyboard §04).
 * At snapshot: 09 championship · 49 points · 01 win · 02 podiums · 16 car.
 * Each value backed by lastVerified + sourceUrl in code; a micro "Last verified"
 * label is shown rather than pretending the data is live.
 */
export function CurrentStats() {
  const { t } = useLocale();

  const stats = [
    { value: String(seasonSummary.position).padStart(2, "0"), label: t.current.championship },
    { value: String(seasonSummary.points), label: t.current.points },
    { value: String(seasonSummary.wins).padStart(2, "0"), label: t.current.win },
    { value: String(seasonSummary.podiums).padStart(2, "0"), label: t.current.podiums },
    { value: String(seasonSummary.car), label: t.current.car, accent: true },
  ];

  return (
    <section
      id="current"
      aria-label={t.current.title}
      className="relative border-t border-line-dark bg-paper py-20 text-ink md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10">
        <Reveal className="mb-12 flex items-end justify-between md:mb-16">
          <div>
            <span className="meta-label text-signal">03</span>
            <h2 className="section-title mt-2 text-ink">
              {t.current.title}
              <span className="text-signal"> / {t.current.year}</span>
            </h2>
          </div>
          <div className="hidden text-right md:block">
            <p className="meta-label text-ink/50">{t.current.lastVerified}</p>
            <p className="mt-1 font-display text-lg text-ink">
              {t.current.snapshot}
            </p>
          </div>
        </Reveal>

        <RaceLine
          variant="horizontal"
          className="mb-12 h-6 w-full text-ink/20 md:mb-16"
          strokeWidth={1}
          duration={2}
        />

        {/* Large typographic values */}
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-5 md:gap-x-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-t border-ink/15 pt-4">
                <p
                  className={`stat-number ${
                    s.accent ? "text-signal" : "text-ink"
                  }`}
                >
                  {s.value}
                </p>
                <p className="mt-3 meta-label text-ink/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-6 md:mt-16">
          <p className="text-xs text-ink/50">
            {t.current.lastVerified}: {t.current.snapshot} · FIA Formula 3
            public standings.
          </p>
          <a
            href={seasonSummary.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-signal"
          >
            <span className="h-px w-5 bg-signal transition-all group-hover:w-8" />
            FIA F3 Standings
            <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
