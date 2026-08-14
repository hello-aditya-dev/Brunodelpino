"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale";
import { RouteHeader } from "@/components/global/RouteHeader";
import { Reveal } from "@/components/global/Reveal";
import { mediaAssets } from "@/content/media";
import { driver } from "@/content/driver";

export default function MediaPage() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <>
      <RouteHeader
        index="M"
        kicker="Archive"
        title={t.trackside.title}
        intro="Abstract atmospheric concept imagery. No race photography is redistributed; every record carries rights metadata for future approved-asset replacement."
      />

      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        {/* Featured */}
        <Reveal className="relative aspect-[16/9] w-full overflow-hidden border border-line-dark md:aspect-[21/9]">
          { }
          <img
            src={mediaAssets[0].src}
            alt={mediaAssets[0].alt}
            className="h-full w-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.opacity = "0";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 md:p-8">
            <p className="font-display text-2xl text-soft-white md:text-4xl">
              {mediaAssets[0].caption}
            </p>
            <span className="meta-label text-soft-white/60">
              {mediaAssets[0].rightsStatus}
            </span>
          </div>
        </Reveal>

        {/* Grid with metadata */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mediaAssets.slice(1).map((m, i) => (
            <Reveal key={m.id} delay={i * 0.06}>
              <figure className="group border border-line-dark">
                <div className="relative aspect-[4/3] overflow-hidden">
                  { }
                  <img
                    src={m.src}
                    alt={m.alt}
                    loading="lazy"
                    className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      reduce ? "" : ""
                    }`}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.opacity = "0";
                    }}
                  />
                </div>
                <figcaption className="space-y-2 p-4">
                  <p className="font-display text-lg text-soft-white">
                    {m.caption}
                  </p>
                  <dl className="space-y-1 text-[0.6875rem] text-muted">
                    <Meta label="ID" value={m.id} />
                    <Meta label="Event" value={m.event ?? "—"} />
                    <Meta label="Year" value={String(m.year ?? "—")} />
                    <Meta label="Rights" value={m.rightsStatus} />
                  </dl>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 border-t border-line-dark pt-8">
          <p className="max-w-2xl text-xs text-muted">
            All assets are <span className="text-soft-white">generated-atmosphere</span>{" "}
            placeholders depicting no identifiable person. Approved official
            photography will replace these records after management clearance.
          </p>
          <Link
            href="/#trackside"
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

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-line-dark/40 pb-1">
      <dt className="uppercase tracking-[0.14em] text-muted/60">{label}</dt>
      <dd className="text-soft-white/80">{value}</dd>
    </div>
  );
}
