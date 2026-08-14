"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale";
import { RouteHeader } from "@/components/global/RouteHeader";
import { Reveal } from "@/components/global/Reveal";
import { RaceLine } from "@/components/global/RaceLine";
import { bios, factSheet, factSheetEs, pressAssetSlots } from "@/content/press";
import { contacts } from "@/content/contacts";
import { career } from "@/content/career";
import { seasonSummary, rounds } from "@/content/season-2026";
import { driver } from "@/content/driver";

/**
 * Press Room — V2 major addition.
 * Sections: short bio, full bio, current facts, career highlights, 2026 season,
 * contacts, approved asset slots (architecture only in pitch mode).
 * No fake PDFs, no dead download buttons.
 */
export default function PressPage() {
  const { t, locale } = useLocale();
  const bio = bios[locale];
  const facts = locale === "es" ? factSheetEs : factSheet;
  const pressContact = contacts.find((c) => c.email === "media@proracingmotorsport.com");
  const mgmtContact = contacts.find((c) => c.email === "gs@proracingmotorsport.com");

  return (
    <>
      <RouteHeader
        index="P"
        kicker="For journalists"
        title={t.pressTeaser.title}
        intro={t.pressTeaser.sub}
      />

      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 md:px-10 md:py-24">
        {/* Bios */}
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <Reveal className="col-span-12 md:col-span-8">
            <h2 className="font-display text-2xl text-soft-white md:text-3xl">
              {t.pressTeaser.bio50}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-soft-white/80">
              {bio.short}
            </p>
            <h2 className="mt-12 font-display text-2xl text-soft-white md:text-3xl">
              {locale === "es" ? "Biografía completa" : "Full biography"}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-soft-white/80">
              {bio.full}
            </p>
          </Reveal>

          {/* Right: fact sheet */}
          <Reveal delay={0.1} className="col-span-12 md:col-span-4">
            <div className="border border-line-dark">
              <div className="border-b border-line-dark bg-secondary px-5 py-3">
                <p className="meta-label text-signal">
                  {locale === "es" ? "Ficha" : "Fact sheet"}
                </p>
              </div>
              <dl className="divide-y divide-line-dark">
                {facts.map((f) => (
                  <div key={f.label} className="flex justify-between gap-3 px-5 py-2.5">
                    <dt className="text-xs uppercase tracking-wide text-muted">{f.label}</dt>
                    <dd className="text-right text-sm text-soft-white">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        {/* Career highlights */}
        <Reveal className="mt-16">
          <h2 className="font-display text-2xl text-soft-white md:text-3xl">
            {locale === "es" ? "Hitos de carrera" : "Career highlights"}
          </h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden border border-line-dark bg-line-dark md:grid-cols-3">
          {career.slice(-3).map((c, i) => (
            <Reveal key={c.period} delay={i * 0.05}>
              <div className="bg-ink p-6">
                <p className="meta-label text-signal">{c.period}</p>
                <p className="mt-2 font-display text-xl text-soft-white">{c.display}</p>
                <ul className="mt-3 space-y-1">
                  {c.details.map((d) => (
                    <li key={d} className="text-xs text-muted">{d}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 2026 season summary */}
        <Reveal className="mt-16">
          <h2 className="font-display text-2xl text-soft-white md:text-3xl">2026</h2>
        </Reveal>
        <Reveal delay={0.05} className="mt-6 grid grid-cols-2 gap-y-8 border border-line-dark p-6 md:grid-cols-5 md:gap-x-6">
          <Stat label={t.current.championship} value={String(seasonSummary.position).padStart(2, "0")} />
          <Stat label={t.current.points} value={String(seasonSummary.points)} />
          <Stat label={t.current.win} value={String(seasonSummary.wins).padStart(2, "0")} />
          <Stat label={t.current.podiums} value={String(seasonSummary.podiums).padStart(2, "0")} />
          <Stat label={t.current.car} value={String(seasonSummary.car)} accent />
        </Reveal>

        {/* Contacts */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {pressContact && (
            <Reveal>
              <div className="border border-line-dark p-6">
                <p className="meta-label text-signal">{t.pressTeaser.pressContact}</p>
                <p className="mt-3 font-display text-2xl text-soft-white">{pressContact.name}</p>
                <a href={`mailto:${pressContact.email}`} className="focus-ring mt-2 inline-flex items-center gap-2 text-sm text-muted hover:text-signal">
                  <span className="h-px w-5 bg-signal" />{pressContact.email}
                </a>
              </div>
            </Reveal>
          )}
          {mgmtContact && (
            <Reveal delay={0.05}>
              <div className="border border-line-dark p-6">
                <p className="meta-label text-muted">{locale === "es" ? "Dirección" : "Management"}</p>
                <p className="mt-3 font-display text-2xl text-soft-white">{mgmtContact.name}</p>
                <a href={`mailto:${mgmtContact.email}`} className="focus-ring mt-2 inline-flex items-center gap-2 text-sm text-muted hover:text-signal">
                  <span className="h-px w-5 bg-signal" />{mgmtContact.email}
                </a>
              </div>
            </Reveal>
          )}
        </div>

        {/* Asset slots — architecture only in pitch mode */}
        <Reveal className="mt-16">
          <h2 className="font-display text-2xl text-soft-white md:text-3xl">
            {locale === "es" ? "Recursos para medios" : "Media resources"}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            {locale === "es"
              ? "Disponibles tras la aprobación de la dirección. Sin enlaces rotos ni descargas falsas."
              : "Available after management approval. No broken links or fake downloads."}
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden border border-line-dark bg-line-dark md:grid-cols-3">
          {pressAssetSlots.map((slot, i) => (
            <Reveal key={slot.id} delay={i * 0.04}>
              <div className="flex items-center justify-between bg-ink p-5">
                <div>
                  <p className="meta-label text-muted">{slot.id}</p>
                  <p className="mt-1 text-sm text-soft-white">{slot.name}</p>
                </div>
                <span className="meta-label text-muted/60">pending</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <RaceLine variant="horizontal" className="h-4 w-full text-signal/40" strokeWidth={1} duration={1.6} />
          <Link href="/" className="focus-ring group mt-6 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-soft-white">
            <span className="h-px w-6 bg-signal transition-all group-hover:w-10" />
            {driver.displayName}
          </Link>
        </Reveal>
      </div>
    </>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="border-l border-line-dark pl-4">
      <p className="meta-label text-muted">{label}</p>
      <p className={`mt-2 stat-number text-[clamp(2.5rem,6vw,4rem)] ${accent ? "text-signal" : "text-soft-white"}`}>
        {value}
      </p>
    </div>
  );
}
