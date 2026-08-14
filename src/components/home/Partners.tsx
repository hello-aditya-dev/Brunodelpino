"use client";

import { useLocale } from "@/lib/locale";
import { Reveal } from "@/components/global/Reveal";
import { RaceLine } from "@/components/global/RaceLine";
import { siteConfig } from "@/content/site-config";
import { provisionalPartners } from "@/content/contacts";

/**
 * Partners (storyboard §08 + §17).
 * siteConfig.showProvisionalPartners === false (default):
 *  - section architecture retained;
 *  - provisional partner names withheld;
 *  - neutral private-concept treatment.
 * When true: names may appear as text only (no logos unless supplied/approved).
 */
export function Partners() {
  const { t } = useLocale();
  const show = siteConfig.showProvisionalPartners;

  return (
    <section
      id="partners"
      aria-label={t.partners.title}
      className="relative border-t border-line-dark bg-paper py-20 text-ink md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10">
        <Reveal className="mb-12 md:mb-16">
          <span className="meta-label text-signal">07</span>
          <h2 className="section-title mt-2 text-ink">{t.partners.title}</h2>
        </Reveal>

        <RaceLine
          variant="horizontal"
          className="mb-10 h-4 w-full text-ink/20 md:mb-14"
          strokeWidth={1}
          duration={2}
        />

        {show ? (
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-ink/15 bg-ink/15 md:grid-cols-3">
            {provisionalPartners.map((p) => (
              <div
                key={p.name}
                className="flex min-h-[140px] flex-col items-start justify-center bg-paper p-6"
              >
                <p className="font-display text-xl text-ink md:text-2xl">
                  {p.name}
                </p>
                <p className="meta-label mt-2 text-ink/40">Partner</p>
              </div>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-ink/15 bg-ink/15 md:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex min-h-[140px] flex-col items-start justify-center bg-paper p-6"
                  aria-hidden="true"
                >
                  <div className="h-6 w-3/4 bg-ink/10" />
                  <div className="mt-3 h-3 w-1/3 bg-ink/10" />
                </div>
              ))}
            </div>
            <div className="mt-8 max-w-2xl">
              <p className="editorial-body text-ink/70">
                {t.partners.privateNote}
              </p>
              <p className="mt-4 text-xs text-ink/50">
                {t.partners.officialNote}
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
