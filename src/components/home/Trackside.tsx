"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale";
import { Reveal } from "@/components/global/Reveal";
import { tracksideAssets, heroAsset } from "@/content/media";

/**
 * Trackside — the image system (storyboard §07). NOT "Gallery".
 * One full-width hero frame + a contact-sheet sequence + a mobile swipe strip
 * with quiet metadata. Uses only abstract atmospheric concept imagery
 * (no identifiable driver). Each asset keeps rights metadata in data.
 */
export function Trackside() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="trackside"
      aria-label={t.trackside.title}
      className="relative border-t border-line-dark bg-ink py-20 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10">
        <Reveal className="mb-12 flex items-end justify-between md:mb-16">
          <div>
            <span className="meta-label text-signal">06</span>
            <h2 className="section-title mt-2 text-soft-white">
              {t.trackside.title}
            </h2>
          </div>
          <span className="meta-label hidden text-muted sm:inline">
            {t.trackside.credit}
          </span>
        </Reveal>

        {/* Full-width hero frame */}
        <Reveal className="relative aspect-[16/9] w-full overflow-hidden border border-line-dark md:aspect-[21/9]">
          { }
          <motion.img
            src={heroAsset.src}
            alt={heroAsset.alt}
            loading="lazy"
            initial={reduce ? false : { scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease }}
            className="h-full w-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.opacity = "0";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 md:p-8">
            <p className="font-display text-2xl text-soft-white md:text-4xl">
              {heroAsset.caption}
            </p>
            <span className="meta-label text-soft-white/60">
              {heroAsset.event} · {heroAsset.year}
            </span>
          </div>
        </Reveal>

        {/* Contact-sheet sequence (desktop) */}
        <div className="mt-6 hidden grid-cols-3 gap-6 md:grid">
          {tracksideAssets.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.1}>
              <figure className="group relative aspect-[4/5] overflow-hidden border border-line-dark">
                { }
                <img
                  src={m.src}
                  alt={m.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.opacity = "0";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-90" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display text-lg text-soft-white">
                    {m.caption}
                  </p>
                  <p className="mt-1 text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                    {m.event} · {m.year} · {m.rightsStatus}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Mobile swipe strip */}
        <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto md:hidden thin-scroll">
          {tracksideAssets.map((m) => (
            <figure
              key={m.id}
              className="relative aspect-[3/4] w-[78%] shrink-0 snap-center overflow-hidden border border-line-dark"
            >
              { }
              <img
                src={m.src}
                alt={m.alt}
                loading="lazy"
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "0";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-display text-base text-soft-white">
                  {m.caption}
                </p>
                <p className="mt-1 text-[0.5625rem] uppercase tracking-[0.14em] text-muted">
                  {m.event} · {m.rightsStatus}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
