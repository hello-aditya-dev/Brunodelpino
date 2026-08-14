"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale";
import { RaceLine } from "./RaceLine";
import { driver } from "@/content/driver";
import { contacts, social } from "@/content/contacts";
import { siteConfig } from "@/content/site-config";

const ROUTE_LINKS = [
  { label: "Season", href: "/season" },
  { label: "Career", href: "/career" },
  { label: "Media", href: "/media" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteFooter() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <footer
      id="end"
      className="relative mt-auto overflow-hidden border-t border-line-dark bg-ink"
    >
      {/* resolve line across the top */}
      <RaceLine
        variant="resolve"
        className="absolute inset-x-0 top-0 h-px w-full text-signal/60"
        strokeWidth={1}
        duration={2}
      />

      <div className="mx-auto max-w-[1600px] px-4 pb-10 pt-16 sm:px-6 md:px-10 md:pb-12 md:pt-24">
        {/* Huge identity */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-2"
        >
          <h2 className="font-display hero-display leading-[0.82] text-soft-white">
            {driver.firstName}
            <br />
            <span className="text-signal">{driver.lastName}</span>
          </h2>
          <div className="mt-2 flex items-baseline gap-4">
            <span className="font-display text-5xl text-soft-white md:text-7xl">
              {driver.number}
            </span>
            <span className="meta-label">{t.footer.notOfficial}</span>
          </div>
        </motion.div>

        {/* Hairline */}
        <div className="my-10 h-px w-full bg-line-dark md:my-14" />

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          <nav className="col-span-2 md:col-span-1" aria-label="Routes">
            <p className="meta-label mb-4">{t.end.links}</p>
            <ul className="space-y-2.5">
              {ROUTE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="focus-ring group inline-flex items-center gap-2 text-sm text-soft-white/80 transition-colors hover:text-soft-white"
                  >
                    <span className="h-px w-4 bg-signal transition-all group-hover:w-7" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-1" aria-label="Management">
            <p className="meta-label mb-4">Management</p>
            <ul className="space-y-2.5">
              {contacts.map((c) => (
                <li key={c.email}>
                  <a
                    href={`mailto:${c.email}`}
                    className="focus-ring block text-sm text-soft-white/80 transition-colors hover:text-soft-white"
                  >
                    <span className="block">{c.name}</span>
                    <span className="text-xs text-muted">{c.role}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-1">
            <p className="meta-label mb-4">{t.contact.social}</p>
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex items-center gap-2 text-sm text-soft-white/80 transition-colors hover:text-soft-white"
            >
              <span className="h-px w-4 bg-signal transition-all group-hover:w-7" />
              {social.instagramHandle}
            </a>
          </div>

          <div className="md:col-span-1">
            <p className="meta-label mb-4">Snapshot</p>
            <p className="text-sm text-muted">
              {siteConfig.snapshotDate}
            </p>
            <p className="mt-2 text-xs text-muted">
              Data verified to FIA Formula 3 public standings.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 border-t border-line-dark pt-6 md:mt-16">
          <p className="max-w-3xl text-xs leading-relaxed text-muted">
            {t.end.disclaimer}
          </p>
          <p className="mt-3 text-[0.6875rem] uppercase tracking-[0.18em] text-muted/60">
            © {new Date().getFullYear()} — Independent concept. All race data
            owned by its respective rights holders.
          </p>
        </div>
      </div>
    </footer>
  );
}
