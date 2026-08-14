"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale";
import { Reveal } from "@/components/global/Reveal";
import { RaceLine } from "@/components/global/RaceLine";
import { bios } from "@/content/press";
import { contacts } from "@/content/contacts";

/**
 * PressTeaser — V2 section showing the site is operational for media.
 * Shows short bio, press contact, and a CTA to the full press room.
 */
export function PressTeaser() {
  const { t, locale } = useLocale();
  const bio = bios[locale];
  const pressContact = contacts.find((c) => c.email === "media@proracingmotorsport.com");

  return (
    <section
      id="press"
      aria-label={t.pressTeaser.title}
      className="relative border-t border-line-dark bg-paper py-20 text-ink md:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10">
        <Reveal className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left: title + bio */}
          <div className="col-span-12 md:col-span-7">
            <span className="meta-label text-signal">{t.pressTeaser.title}</span>
            <h2 className="section-title mt-2 text-ink">{t.pressTeaser.title}</h2>
            <p className="mt-4 max-w-xl text-sm text-ink/60">
              {t.pressTeaser.sub}
            </p>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink/80">
              {bio.short}
            </p>
          </div>

          {/* Right: press contact + CTA */}
          <div className="col-span-12 flex flex-col gap-6 md:col-span-5">
            <div className="border border-ink/15 p-6">
              <p className="meta-label text-ink/50">{t.pressTeaser.pressContact}</p>
              {pressContact && (
                <>
                  <p className="mt-3 font-display text-2xl text-ink">
                    {pressContact.name}
                  </p>
                  <a
                    href={`mailto:${pressContact.email}`}
                    className="focus-ring group mt-2 inline-flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-signal"
                  >
                    <span className="h-px w-5 bg-signal transition-all group-hover:w-8" />
                    {pressContact.email}
                  </a>
                </>
              )}
            </div>
            <Link
              href="/press"
              className="focus-ring group inline-flex items-center justify-between border border-ink p-5 transition-colors hover:bg-ink hover:text-paper"
            >
              <span className="font-display text-xl uppercase tracking-wide">
                {t.pressTeaser.viewPress}
              </span>
              <span className="h-px w-8 bg-signal transition-all group-hover:w-12" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <RaceLine
            variant="horizontal"
            className="h-4 w-full text-ink/20"
            strokeWidth={1}
            duration={1.6}
          />
        </Reveal>
      </div>
    </section>
  );
}
