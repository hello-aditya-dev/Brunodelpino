"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { useLocale } from "@/lib/locale";
import { RaceLine } from "@/components/global/RaceLine";
import { Reveal } from "@/components/global/Reveal";
import {
  rounds,
  type Round,
  type RoundStatus,
} from "@/content/season-2026";
import { formatLong } from "@/lib/dates";

type NodeKind = "complete" | "hero" | "next" | "upcoming" | "home" | "finale";

function nodeKind(r: Round): NodeKind {
  if (r.status === "next") return "next";
  if (r.status === "upcoming" && r.finale) return "finale";
  if (r.status === "upcoming" && r.homeEvent) return "home";
  if (r.status === "upcoming") return "upcoming";
  if (r.heroMoment) return "hero";
  return "complete";
}

export function RaceTrace() {
  const { t, locale } = useLocale();
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number>(
    () => rounds.find((r) => r.status === "next")?.round ?? rounds[0].round,
  );

  const activeRound = useMemo(
    () => rounds.find((r) => r.round === active) ?? rounds[0],
    [active],
  );

  return (
    <section
      id="season"
      aria-label={t.season.title}
      className="relative border-t border-line-dark bg-ink py-20 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10">
        {/* Header */}
        <Reveal className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="meta-label text-signal">02</span>
            <h2 className="section-title mt-2 text-soft-white">{t.season.title}</h2>
            <p className="editorial-body mt-4 text-muted">{t.season.sub}</p>
          </div>
          <div className="hidden gap-6 md:flex">
            <Legend label={t.season.complete} kind="complete" />
            <Legend label={t.season.signature} kind="hero" />
            <Legend label={t.season.next} kind="next" />
            <Legend label={t.season.home} kind="home" />
            <Legend label={t.season.finale} kind="finale" />
          </div>
        </Reveal>

        {/* DESKTOP: horizontal trace */}
        <div className="hidden md:block">
          <DesktopTrace
            rounds={rounds}
            active={active}
            onSelect={setActive}
            reduce={reduce}
          />
        </div>

        {/* MOBILE: vertical trace */}
        <div className="md:hidden">
          <MobileTrace rounds={rounds} locale={locale} />
        </div>

        {/* Desktop detail panel */}
        <div className="hidden md:block">
          <Reveal className="mt-14 border-t border-line-dark pt-10">
            <DetailPanel round={activeRound} locale={locale} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Desktop horizontal trace ---------------- */

function DesktopTrace({
  rounds,
  active,
  onSelect,
  reduce,
}: {
  rounds: Round[];
  active: number;
  onSelect: (n: number) => void;
  reduce: boolean | null;
}) {
  const count = rounds.length;
  return (
    <div className="relative">
      {/* the line */}
      <div className="relative h-24">
        <RaceLine
          variant="horizontal"
          className="absolute inset-0 h-full w-full text-line-dark"
          strokeWidth={1}
          draw={false}
        />
        <RaceLine
          variant="horizontal"
          className="absolute inset-0 h-full w-full text-signal"
          strokeWidth={1.5}
          duration={2.2}
        />
        {/* nodes */}
        <div className="absolute inset-0 flex items-center justify-between">
          {rounds.map((r, i) => {
            const kind = nodeKind(r);
            const isActive = r.round === active;
            return (
              <button
                key={r.slug}
                type="button"
                onClick={() => onSelect(r.round)}
                onFocus={() => onSelect(r.round)}
                aria-label={`${r.name} — ${r.status}`}
                aria-pressed={isActive}
                className="focus-ring group relative flex flex-col items-center"
                style={{ width: `${100 / count}%` }}
              >
                <NodeMark kind={kind} active={isActive} reduce={reduce} />
                <span
                  className={`mt-3 text-[0.625rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                    isActive
                      ? "text-soft-white"
                      : "text-muted group-hover:text-soft-white"
                  }`}
                >
                  {r.name}
                </span>
                <span className="text-[0.5625rem] uppercase tracking-[0.12em] text-muted/60">
                  R{String(i + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Mobile vertical trace ---------------- */

function MobileTrace({
  rounds,
  locale,
}: {
  rounds: Round[];
  locale: "en" | "es";
}) {
  const { t } = useLocale();
  return (
    <div className="relative pl-8">
      {/* vertical line */}
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-line-dark" aria-hidden="true" />
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
        className="absolute left-[11px] top-2 bottom-2 w-px bg-signal"
        aria-hidden="true"
      />
      <ul className="space-y-7">
        {rounds.map((r, i) => {
          const kind = nodeKind(r);
          return (
            <li key={r.slug} className="relative">
              <div className="absolute -left-8 top-1.5">
                <NodeMark kind={kind} active={false} reduce mobile />
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl text-soft-white">{r.name}</h3>
                <span className="meta-label text-muted">
                  R{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted">
                {formatLong(r.startDate, locale)} — {formatLong(r.endDate, locale)}
              </p>
              <StatusBadge kind={kind} />
              <RoundFacts round={r} locale={locale} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ---------------- Shared bits ---------------- */

function NodeMark({
  kind,
  active,
  reduce,
  mobile,
}: {
  kind: NodeKind;
  active: boolean;
  reduce: boolean | null;
  mobile?: boolean;
}) {
  const size = mobile ? 10 : 14;
  const ring = kind === "next" || kind === "home" || kind === "finale";
  const pulse = (kind === "next" || kind === "home" || kind === "finale") && !reduce;

  return (
    <span
      className={`relative grid place-items-center rounded-full transition-transform ${
        active ? "scale-125" : ""
      }`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {ring && (
        <span
          className={`absolute inset-0 rounded-full border border-signal ${
            pulse ? "animate-pulse-soft" : ""
          }`}
          style={{ width: size + 8, height: size + 8, left: -4, top: -4 }}
        />
      )}
      <span
        className="block rounded-full"
        style={{
          width: size,
          height: size,
          background:
            kind === "hero"
              ? "var(--color-signal)"
              : kind === "next"
                ? "transparent"
                : kind === "home"
                  ? "var(--color-signal)"
                  : kind === "finale"
                    ? "var(--color-signal)"
                    : kind === "upcoming"
                      ? "transparent"
                      : "var(--color-soft-white)",
          border:
            kind === "next" || kind === "upcoming"
              ? "1.5px solid var(--color-muted)"
              : kind === "home" || kind === "finale"
                ? "1.5px solid var(--color-signal)"
                : "none",
        }}
      />
    </span>
  );
}

function StatusBadge({ kind }: { kind: NodeKind }) {
  const { t } = useLocale();
  const map: Record<NodeKind, string> = {
    complete: t.season.complete,
    hero: t.season.signature,
    next: t.season.next,
    upcoming: t.season.upcoming,
    home: t.season.home,
    finale: t.season.finale,
  };
  const accent =
    kind === "next" || kind === "home" || kind === "finale" || kind === "hero"
      ? "text-signal"
      : "text-muted";
  return (
    <span className={`mt-2 inline-block text-[0.625rem] font-medium uppercase tracking-[0.18em] ${accent}`}>
      {map[kind]}
    </span>
  );
}

function Legend({ label, kind }: { label: string; kind: NodeKind }) {
  return (
    <span className="flex items-center gap-2">
      <NodeMark kind={kind} active={false} reduce />
      <span className="meta-label text-muted">{label}</span>
    </span>
  );
}

function RoundFacts({ round, locale }: { round: Round; locale: "en" | "es" }) {
  const { t } = useLocale();
  if (round.status === "upcoming" && !round.sprint && !round.feature) {
    return null;
  }
  return (
    <dl className="mt-3 space-y-1 text-xs text-soft-white/80">
      {round.qualifying && round.qualifying.result && (
        <FactRow label={t.season.qualifying} value={round.qualifying.result} />
      )}
      {round.sprint && round.sprint.result && (
        <FactRow
          label={t.season.sprint}
          value={`${round.sprint.result} · ${round.sprint.points ?? 0}${t.season.points}`}
        />
      )}
      {round.feature && round.feature.result && (
        <FactRow
          label={t.season.feature}
          value={`${round.feature.result} · ${round.feature.points ?? 0}${t.season.points}`}
        />
      )}
    </dl>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line-dark/40 pb-1">
      <dt className="meta-label text-muted">{label}</dt>
      <dd className="font-display text-sm text-soft-white">{value}</dd>
    </div>
  );
}

function DetailPanel({ round, locale }: { round: Round; locale: "en" | "es" }) {
  const { t } = useLocale();
  const kind = nodeKind(round);
  return (
    <motion.div
      key={round.slug}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-12 gap-6"
    >
      <div className="col-span-12 md:col-span-4">
        <span className="meta-label text-signal">
          R{String(round.round).padStart(2, "0")}
        </span>
        <h3 className="font-display text-5xl text-soft-white md:text-6xl">
          {round.name}
        </h3>
        <p className="mt-2 text-sm text-muted">
          {formatLong(round.startDate, locale)} — {formatLong(round.endDate, locale)}
        </p>
        <StatusBadge kind={kind} />
      </div>
      <div className="col-span-12 md:col-span-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
          <DetailStat
            label={t.season.qualifying}
            value={round.qualifying?.result ?? "—"}
          />
          <DetailStat
            label={t.season.sprint}
            value={round.sprint?.result ?? "—"}
            sub={round.sprint ? `${round.sprint.points ?? 0}${t.season.points}` : undefined}
          />
          <DetailStat
            label={t.season.feature}
            value={round.feature?.result ?? "—"}
            sub={round.feature ? `${round.feature.points ?? 0}${t.season.points}` : undefined}
          />
          {round.feature2 && (
            <DetailStat
              label="Feature 2"
              value={round.feature2.result ?? "—"}
              sub={`${round.feature2.points ?? 0}${t.season.points}`}
            />
          )}
        </div>
        {round.sprint?.note && (
          <p className="editorial-body mt-6 text-muted">{round.sprint.note}</p>
        )}
        {round.feature?.note && !round.sprint?.note && (
          <p className="editorial-body mt-6 text-muted">{round.feature.note}</p>
        )}
      </div>
    </motion.div>
  );
}

function DetailStat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="border-l border-line-dark pl-4">
      <p className="meta-label text-muted">{label}</p>
      <p className="mt-2 font-display text-3xl text-soft-white md:text-4xl">
        {value}
      </p>
      {sub && <p className="mt-1 text-xs text-muted">{sub}</p>}
    </div>
  );
}

export type { RoundStatus };
