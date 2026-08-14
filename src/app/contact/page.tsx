"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale";
import { RouteHeader } from "@/components/global/RouteHeader";
import { Reveal } from "@/components/global/Reveal";
import { RaceLine } from "@/components/global/RaceLine";
import { contacts, social } from "@/content/contacts";
import { driver } from "@/content/driver";

export default function ContactPage() {
  const { t, locale } = useLocale();

  return (
    <>
      <RouteHeader
        index="C"
        kicker="Management · Press · Social"
        title={t.contact.title}
        intro={t.contact.intro}
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

        {/* Contacts */}
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line-dark bg-line-dark md:grid-cols-3">
          {contacts.map((c, i) => (
            <Reveal key={c.email} delay={i * 0.08}>
              <div className="flex h-full flex-col bg-ink p-6 md:p-8">
                <span className="meta-label text-signal">
                  {locale === "es" ? c.roleEs : c.role}
                </span>
                <p className="mt-4 font-display text-2xl text-soft-white md:text-3xl">
                  {c.name}
                </p>
                <p className="mt-1 text-xs text-muted">{c.organization}</p>
                <a
                  href={`mailto:${c.email}`}
                  className="focus-ring group mt-6 inline-flex items-center gap-2 text-sm text-soft-white transition-colors hover:text-signal"
                >
                  <span className="h-px w-5 bg-signal transition-all group-hover:w-8" />
                  {c.email}
                </a>
                <div className="mt-auto pt-6">
                  <a
                    href={c.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring text-[0.6875rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-soft-white"
                  >
                    {t.contact.source}: Pro Racing Motorsport ↗
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Social */}
        <Reveal className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border border-line-dark p-6 md:p-8">
            <span className="meta-label text-signal">{t.contact.social}</span>
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group mt-4 inline-flex items-center gap-3"
            >
              <span className="font-display text-2xl text-soft-white md:text-3xl">
                Instagram
              </span>
              <span className="h-px w-6 bg-signal transition-all group-hover:w-10" />
              <span className="text-sm text-muted">{social.instagramHandle}</span>
            </a>
          </div>
          <div className="border border-line-dark p-6 md:p-8">
            <span className="meta-label text-muted">Note</span>
            <p className="mt-4 text-sm text-soft-white/80">
              No direct driver email is published. No backend contact form is
              used in concept mode — clear mailto routes only. Verify the
              Instagram handle manually before final handoff.
            </p>
          </div>
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
