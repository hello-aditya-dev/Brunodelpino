"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale";
import { RouteHeader } from "@/components/global/RouteHeader";
import { Reveal } from "@/components/global/Reveal";
import { RaceLine } from "@/components/global/RaceLine";
import { career } from "@/content/career";
import { driver } from "@/content/driver";

export default function CareerPage() {
  const { t } = useLocale();

  return (
    <>
      <RouteHeader
        index="C"
        kicker={driver.championship}
        title={t.road.title}
        intro={t.road.sub}
      />

      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        {/* Progression line */}
        <Reveal className="mb-14">
          <RaceLine
            variant="horizontal"
            className="h-6 w-full text-signal/60"
            strokeWidth={1.5}
            duration={2.2}
          />
        </Reveal>

        <ol className="relative space-y-12 md:space-y-16">
          {career.map((c, i) => (
            <Reveal as="li" key={c.period} delay={i * 0.05}>
              <div className="grid grid-cols-12 gap-4 border-t border-line-dark pt-6 md:gap-8 md:pt-8">
                <div className="col-span-12 md:col-span-3">
                  <span className="meta-label text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 font-display text-3xl text-soft-white md:text-4xl">
                    {c.period}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <h2 className="font-display text-xl text-soft-white md:text-2xl">
                    {c.display}
                  </h2>
                  <p className="meta-label mt-1 text-muted">
                    {c.category}
                    {c.team ? ` · ${c.team}` : ""}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <ul className="space-y-1.5">
                    {c.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-soft-white/80"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal"
                          aria-hidden="true"
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16 border-t border-line-dark pt-8">
          <p className="max-w-2xl text-xs text-muted">
            Career placements per FIA Formula 3 profile and official Eurocup-3
            standings. 2024 win/podium figures per MP Motorsport. The
            internally-inconsistent VAR chronology is not used.
          </p>
          <Link
            href="/"
            className="focus-ring group mt-6 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-soft-white"
          >
            <span className="h-px w-6 bg-signal transition-all group-hover:w-10" />
            {driver.displayName}
          </Link>
        </Reveal>
      </div>
    </>
  );
}
