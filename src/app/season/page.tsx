"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale";
import { RouteHeader } from "@/components/global/RouteHeader";
import { Reveal } from "@/components/global/Reveal";
import {
  rounds,
  seasonSummary,
  nextRound,
  madridFinale,
  madringTest,
} from "@/content/season-2026";
import { driver } from "@/content/driver";
import { formatLong } from "@/lib/dates";

export default function SeasonPage() {
  const { t, locale } = useLocale();

  return (
    <>
      <RouteHeader
        index="S"
        kicker={t.hero.championship}
        title={t.season.title}
        intro={`${t.season.sub} ${driver.displayName} · #${driver.number} · ${driver.team} · ${t.current.snapshot}.`}
      />

      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        {/* Snapshot summary */}
        <Reveal className="grid grid-cols-2 gap-y-8 border-b border-line-dark pb-12 md:grid-cols-5 md:gap-x-6">
          <SummaryStat label={t.current.championship} value={String(seasonSummary.position).padStart(2, "0")} />
          <SummaryStat label={t.current.points} value={String(seasonSummary.points)} />
          <SummaryStat label={t.current.win} value={String(seasonSummary.wins).padStart(2, "0")} />
          <SummaryStat label={t.current.podiums} value={String(seasonSummary.podiums).padStart(2, "0")} />
          <SummaryStat label={t.current.car} value={String(seasonSummary.car)} accent />
        </Reveal>

        {/* Next + Finale callouts */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {nextRound && (
            <Reveal>
              <div className="border border-line-dark p-6 md:p-8">
                <span className="meta-label text-signal">{t.season.next}</span>
                <h2 className="font-display text-4xl text-soft-white md:text-5xl">
                  {nextRound.name}
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {formatLong(nextRound.startDate, locale)} — {formatLong(nextRound.endDate, locale)}
                </p>
                <p className="mt-1 text-xs text-muted">{nextRound.country}</p>
              </div>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <div className="border border-signal/50 bg-signal/5 p-6 md:p-8">
              <span className="meta-label text-signal">{t.season.home}</span>
              <h2 className="font-display text-4xl text-signal md:text-5xl">
                {madridFinale.venue.split(" / ")[0]}
              </h2>
              <p className="mt-2 text-sm text-soft-white/80">
                {formatLong(madridFinale.startDate, locale)} — {formatLong(madridFinale.endDate, locale)}
              </p>
              <p className="mt-3 text-xs text-muted">{t.madrid.expandedDetail}</p>
            </div>
          </Reveal>
        </div>

        {/* Full round-by-round */}
        <Reveal className="mt-16">
          <h2 className="font-display text-2xl text-soft-white md:text-3xl">
            Round by round
          </h2>
        </Reveal>

        <div className="mt-8 space-y-px border border-line-dark bg-line-dark">
          {rounds.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.03}>
              <div className="bg-ink p-5 md:p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="md:w-1/4">
                    <span className="meta-label text-muted">
                      R{String(r.round).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-3xl text-soft-white md:text-4xl">
                      {r.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted">
                      {formatLong(r.startDate, locale)} — {formatLong(r.endDate, locale)}
                    </p>
                    <p className="text-xs text-muted/70">{r.country}</p>
                  </div>
                  <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-4">
                    <RoundCell label={t.season.qualifying} value={r.qualifying?.result} />
                    <RoundCell
                      label={t.season.sprint}
                      value={r.sprint?.result}
                      points={r.sprint?.points}
                    />
                    <RoundCell
                      label={t.season.feature}
                      value={r.feature?.result}
                      points={r.feature?.points}
                    />
                    <div>
                      <p className="meta-label text-muted">Status</p>
                      <p
                        className={`mt-2 font-display text-2xl ${
                          r.status === "next"
                            ? "text-signal"
                            : r.status === "upcoming"
                              ? "text-muted"
                              : "text-soft-white"
                        }`}
                      >
                        {r.status === "complete"
                          ? t.season.complete
                          : r.status === "next"
                            ? t.season.next
                            : t.season.upcoming}
                      </p>
                    </div>
                  </div>
                </div>
                {r.sprint?.note && (
                  <p className="mt-4 border-t border-line-dark/50 pt-3 text-xs text-muted">
                    {r.sprint.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Test + sources */}
        <Reveal className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border border-line-dark p-6">
            <span className="meta-label text-muted">{t.madrid.testNote}</span>
            <p className="mt-2 font-display text-xl text-soft-white">
              {madringTest.venue}
            </p>
            <p className="text-xs text-muted">
              {formatLong(madringTest.startDate, locale)} — {formatLong(madringTest.endDate, locale)}
            </p>
          </div>
          <div className="border border-line-dark p-6">
            <span className="meta-label text-muted">{t.current.lastVerified}</span>
            <p className="mt-2 font-display text-xl text-soft-white">
              {t.current.snapshot}
            </p>
            <a
              href={seasonSummary.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 inline-flex items-center gap-2 text-xs text-signal hover:underline"
            >
              FIA F3 Standings ↗
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <Link
            href="/#season"
            className="focus-ring group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-soft-white"
          >
            <span className="h-px w-6 bg-signal transition-all group-hover:w-10" />
            {driver.displayName}
          </Link>
        </Reveal>
      </div>
    </>
  );
}

function SummaryStat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="border-l border-line-dark pl-4">
      <p className="meta-label text-muted">{label}</p>
      <p className={`mt-2 stat-number text-[clamp(2.5rem,6vw,4.5rem)] ${accent ? "text-signal" : "text-soft-white"}`}>
        {value}
      </p>
    </div>
  );
}

function RoundCell({
  label,
  value,
  points,
}: {
  label: string;
  value?: string | null;
  points?: number;
}) {
  const { t } = useLocale();
  return (
    <div>
      <p className="meta-label text-muted">{label}</p>
      <p className="mt-2 font-display text-2xl text-soft-white md:text-3xl">
        {value ?? "—"}
      </p>
      {typeof points === "number" && value && (
        <p className="text-xs text-muted">
          {points}
          {t.season.points}
        </p>
      )}
    </div>
  );
}
