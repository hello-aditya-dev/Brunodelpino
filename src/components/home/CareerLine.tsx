"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale";
import { Reveal } from "@/components/global/Reveal";
import { RaceLine } from "@/components/global/RaceLine";
import { career } from "@/content/career";

/**
 * CareerLine — "The Road" (storyboard §05).
 * Reuses the line motif but with a distinct progression treatment
 * (period-numbered markers, not race nodes). Avoids a generic alternating
 * timeline. Bruno is the subject; Pedro de la Rosa is not the centerpiece.
 */
export function CareerLine() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="road"
      aria-label={t.road.title}
      className="relative border-t border-line-dark bg-paper py-20 text-ink md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10">
        <Reveal className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="meta-label text-signal">05</span>
            <h2 className="section-title mt-2 text-ink">{t.road.title}</h2>
            <p className="editorial-body mt-4 text-ink/60">{t.road.sub}</p>
          </div>
          <Link
            href="/career"
            className="focus-ring group inline-flex items-center gap-3 self-start text-sm font-medium uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-signal md:self-auto"
          >
            <span className="h-px w-6 bg-signal transition-all group-hover:w-10" />
            {t.road.viewCareer}
          </Link>
        </Reveal>

        {/* Desktop: horizontal progression with the line */}
        <div className="hidden md:block">
          <div className="relative">
            <RaceLine
              variant="horizontal"
              className="absolute left-0 top-6 h-3 w-full text-ink/20"
              strokeWidth={1}
              draw={false}
            />
            <RaceLine
              variant="horizontal"
              className="absolute left-0 top-6 h-3 w-full text-signal"
              strokeWidth={1.5}
              duration={2.4}
            />
            <ol className="grid grid-cols-6 gap-4">
              {career.map((c, i) => (
                <Reveal as="li" key={c.period} delay={i * 0.08} className="relative pt-16">
                  <span
                    className="absolute left-0 top-1.5 grid h-3 w-3 place-items-center rounded-full bg-signal"
                    aria-hidden="true"
                  />
                  <p className="font-display text-2xl text-ink">{c.period}</p>
                  <p className="meta-label mt-1 text-ink/50">{c.display}</p>
                  <ul className="mt-3 space-y-1">
                    {c.details.map((d) => (
                      <li
                        key={d}
                        className="text-[0.8125rem] leading-snug text-ink/70"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* Mobile: vertical progression */}
        <div className="relative pl-8 md:hidden">
          <div
            className="absolute bottom-2 left-[7px] top-2 w-px bg-ink/15"
            aria-hidden="true"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease }}
            style={{ transformOrigin: "top" }}
            className="absolute bottom-2 left-[7px] top-2 w-px bg-signal"
            aria-hidden="true"
          />
          <ol className="space-y-8">
            {career.map((c) => (
              <li key={c.period} className="relative">
                <span
                  className="absolute -left-[1.6875rem] top-1.5 h-3 w-3 rounded-full bg-signal"
                  aria-hidden="true"
                />
                <p className="font-display text-xl text-ink">{c.period}</p>
                <p className="meta-label mt-0.5 text-ink/50">{c.display}</p>
                <ul className="mt-2 space-y-1">
                  {c.details.map((d) => (
                    <li key={d} className="text-xs leading-snug text-ink/70">
                      {d}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
