"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale";
import { RouteHeader } from "@/components/global/RouteHeader";
import { Reveal } from "@/components/global/Reveal";
import { RaceLine } from "@/components/global/RaceLine";
import { siteConfig } from "@/content/site-config";
import { provisionalPartners } from "@/content/contacts";
import { driver } from "@/content/driver";

export default function PartnersPage() {
  const { t } = useLocale();
  const show = siteConfig.showProvisionalPartners;

  return (
    <>
      <RouteHeader
        index="P"
        kicker="Commercial"
        title={t.partners.title}
        intro="The partner presentation architecture is retained in concept mode. Provisional partner identities are withheld pending management approval and brand-usage clearance."
      />

      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <Reveal className="mb-12">
          <RaceLine
            variant="horizontal"
            className="h-5 w-full text-signal/50"
            strokeWidth={1.5}
            duration={2}
          />
        </Reveal>

        {show ? (
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-line-dark bg-line-dark md:grid-cols-3">
            {provisionalPartners.map((p) => (
              <Reveal key={p.name}>
                <div className="flex min-h-[180px] flex-col items-start justify-center bg-ink p-8">
                  <p className="font-display text-2xl text-soft-white md:text-3xl">
                    {p.name}
                  </p>
                  <p className="meta-label mt-3 text-muted">Partner</p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-line-dark bg-line-dark md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex min-h-[180px] flex-col items-start justify-center bg-ink p-8" aria-hidden="true">
                  <div className="h-7 w-3/4 bg-line-dark/60" />
                  <div className="mt-4 h-3 w-1/3 bg-line-dark/40" />
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="mt-12 max-w-2xl">
          <p className="editorial-body text-soft-white/85">
            {t.partners.privateNote}
          </p>
          <p className="mt-4 text-sm text-muted">{t.partners.officialNote}</p>
        </Reveal>

        {/* Process for official mode */}
        <Reveal className="mt-16 border-t border-line-dark pt-10">
          <h2 className="font-display text-2xl text-soft-white md:text-3xl">
            Before official launch
          </h2>
          <ol className="mt-6 space-y-3">
            {[
              "Confirm the current partner list with management.",
              "Obtain approved vector logos and brand-usage rules.",
              "Confirm outbound URLs and partner order/prominence.",
              "Switch siteMode to \u201cofficial\u201d only after authorization.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-soft-white/80">
                <span className="meta-label mt-0.5 text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-12">
          <Link
            href="/"
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
