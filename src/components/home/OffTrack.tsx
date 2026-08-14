"use client";

import { useLocale } from "@/lib/locale";
import { Reveal } from "@/components/global/Reveal";
import { social } from "@/content/contacts";

/**
 * OffTrack — V2 social freshness layer.
 * Lawful only: no scraped media, no fake follower counts.
 * Clean external link to verified Instagram handle.
 */
export function OffTrack() {
  const { t } = useLocale();

  return (
    <section
      id="off-track"
      aria-label={t.offTrack.title}
      className="relative border-t border-line-dark bg-ink py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10">
        <Reveal className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-6">
            <span className="meta-label text-signal">{t.offTrack.sub}</span>
            <h2 className="section-title mt-2 text-soft-white">
              {t.offTrack.title}
            </h2>
            <p className="mt-6 max-w-md text-sm text-muted">
              {t.offTrack.note}
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group block border border-line-dark p-8 transition-colors hover:border-signal"
            >
              <p className="meta-label text-muted">{t.offTrack.instagram}</p>
              <p className="mt-4 font-display text-4xl text-soft-white transition-colors group-hover:text-signal md:text-5xl">
                {social.instagramHandle}
              </p>
              <p className="mt-4 text-sm text-muted">
                {t.offTrack.viewInstagram} →
              </p>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
