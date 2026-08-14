"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale";
import { Reveal } from "@/components/global/Reveal";
import { RaceLine } from "@/components/global/RaceLine";
import { melbourneAsset } from "@/content/media";
import Link from "next/link";

/**
 * MelbourneMoment — the verified breakthrough chapter (storyboard §03).
 * 01 / MELBOURNE / FIRST F3 WIN.
 * Verified: Sprint P1 (maiden FIA F3 win), Feature P4, fastest-lap point, VAR 1–2.
 * No fabricated heroic story — data + imagery carry the moment.
 */
export function MelbourneMoment() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="melbourne"
      aria-label="Melbourne — first F3 win"
      className="relative overflow-hidden border-t border-line-dark bg-ink"
    >
      <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Left: index + atmosphere */}
          <div className="col-span-12 md:col-span-5">
            <Reveal className="relative aspect-[3/4] overflow-hidden border border-line-dark">
              { }
              <motion.img
                src={melbourneAsset.src}
                alt={melbourneAsset.alt}
                loading="lazy"
                initial={reduce ? false : { scale: 1.12, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.1, ease }}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "0";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <span className="absolute left-5 top-5 font-display text-[clamp(5rem,14vw,11rem)] leading-none text-signal">
                {t.melbourne.index}
              </span>
              <span className="absolute bottom-5 left-5 meta-label text-soft-white/80">
                Melbourne · 2026
              </span>
            </Reveal>
          </div>

          {/* Right: chapter */}
          <div className="col-span-12 flex flex-col justify-between md:col-span-7">
            <div>
              <Reveal>
                <span className="meta-label text-signal">Moment 01</span>
                <h2 className="section-title mt-3 text-soft-white">
                  {t.melbourne.title}
                </h2>
                <p className="mt-3 font-display text-2xl text-signal md:text-3xl">
                  {t.melbourne.label}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="editorial-body mt-8 text-soft-white/85">
                  {t.melbourne.note}
                </p>
              </Reveal>

              {/* Verified facts */}
              <Reveal delay={0.15}>
                <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-line-dark bg-line-dark sm:grid-cols-2">
                  <FactCell
                    label={t.melbourne.sprint}
                    value={t.melbourne.sprintResult}
                    accent
                  />
                  <FactCell
                    label={t.melbourne.feature}
                    value={t.melbourne.featureResult}
                  />
                  <FactCell
                    label={t.melbourne.fastestLap}
                    value="+1"
                    full
                  />
                </dl>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="mt-10">
              <RaceLine
                variant="accent"
                className="h-8 w-48 text-signal/70"
                strokeWidth={1.5}
                duration={1.6}
              />
              <Link
                href="/season"
                className="focus-ring group mt-5 inline-flex items-center gap-3 text-sm text-soft-white"
              >
                <span className="h-px w-6 bg-signal transition-all group-hover:w-10" />
                {t.season.viewDetail}
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactCell({
  label,
  value,
  accent,
  full,
}: {
  label: string;
  value: string;
  accent?: boolean;
  full?: boolean;
}) {
  return (
    <div
      className={`bg-ink p-5 md:p-6 ${full ? "col-span-2 sm:col-span-2" : ""}`}
    >
      <dt className="meta-label text-muted">{label}</dt>
      <dd
        className={`mt-2 font-display text-4xl md:text-5xl ${
          accent ? "text-signal" : "text-soft-white"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}
