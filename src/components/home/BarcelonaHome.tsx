"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale";
import { Reveal } from "@/components/global/Reveal";
import { RaceLine } from "@/components/global/RaceLine";
import { barcelonaAsset } from "@/content/media";
import { motionTokens } from "@/lib/motion";

/**
 * BarcelonaHome — V2 home-race chapter (the critical V1 correction).
 *
 * Barcelona = HOME (Bruno has described Barcelona as a home event and said
 * he could stay at his house during the weekend). Madrid = finale, not home.
 *
 * Tone: personal but restrained. Human identity, not nationalistic decoration.
 * No giant Spanish flag.
 *
 * Motion: "home" family — slower, more human.
 */
export function BarcelonaHome() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const ease = motionTokens.easing.human;

  return (
    <section
      id="barcelona"
      aria-label="Barcelona — home"
      className="relative overflow-hidden border-t border-line-dark bg-paper py-20 text-ink md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left: atmospheric image */}
          <div className="col-span-12 md:col-span-5">
            <Reveal className="relative aspect-[3/4] overflow-hidden border border-ink/15">
              { }
              <motion.img
                src={barcelonaAsset.src}
                alt={barcelonaAsset.alt}
                loading="lazy"
                initial={reduce ? false : { scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: motionTokens.duration.slow, ease }}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "0";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent" />
              <span className="absolute left-5 top-5 font-display text-[clamp(4rem,12vw,9rem)] leading-none text-signal">
                {t.barcelona.index}
              </span>
              <span className="absolute bottom-5 left-5 meta-label text-ink/60">
                Barcelona · 2026
              </span>
            </Reveal>
          </div>

          {/* Right: chapter */}
          <div className="col-span-12 flex flex-col justify-between md:col-span-7">
            <div>
              <Reveal>
                <span className="meta-label border border-signal px-3 py-1 text-signal">
                  {t.barcelona.label}
                </span>
                <h2 className="section-title mt-4 text-ink">
                  {t.barcelona.title}
                </h2>
                <p className="mt-2 meta-label text-ink/50">{t.barcelona.year}</p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="editorial-body mt-8 text-ink/80">
                  {t.barcelona.line}
                </p>
                <p className="mt-4 text-sm text-ink/50">
                  {t.barcelona.context}
                </p>
              </Reveal>

              {/* Verified facts */}
              <Reveal delay={0.15}>
                <dl className="mt-10 grid grid-cols-3 gap-px overflow-hidden border border-ink/15 bg-ink/15">
                  <FactCell
                    label={t.barcelona.qualifying}
                    value={t.barcelona.qualifyingResult}
                  />
                  <FactCell
                    label={t.barcelona.sprint}
                    value={t.barcelona.sprintResult}
                  />
                  <FactCell
                    label={t.barcelona.feature}
                    value={t.barcelona.featureResult}
                  />
                </dl>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="mt-10">
              <RaceLine
                variant="accent"
                className="h-8 w-56 text-signal/60"
                strokeWidth={1.5}
                duration={motionTokens.duration.editorial}
              />
              <p className="mt-4 max-w-md text-xs text-ink/50">
                {t.barcelona.note}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-paper p-4 md:p-5">
      <dt className="meta-label text-ink/50">{label}</dt>
      <dd className="mt-2 font-display text-3xl text-ink md:text-4xl">
        {value}
      </dd>
    </div>
  );
}
