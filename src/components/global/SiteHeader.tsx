"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { LanguageToggle } from "./LanguageToggle";
import { driver } from "@/content/driver";

// Header nav uses homepage section anchors — fully navigable from the single
// route the preview exposes, and degrades gracefully to route + hash elsewhere.
const NAV = [
  { key: "season", href: "/#season" },
  { key: "career", href: "/#road" },
  { key: "media", href: "/#trackside" },
  { key: "partners", href: "/#partners" },
  { key: "contact", href: "/#end" },
] as const;

export function SiteHeader() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    // Defer the initial sync so it isn't a synchronous setState in the effect
    // body (also handles a mid-page refresh correctly).
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock body scroll + basic focus trap when drawer open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const node = drawerRef.current;
    const focusable = node?.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
      if (e.key === "Tab" && focusable && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-ink/90 backdrop-blur-md border-b border-line-dark"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-10 md:py-4">
        {/* Identity mark */}
        <Link
          href="/"
          className="focus-ring group flex items-center gap-2.5"
          aria-label="Bruno Del Pino — home"
        >
          <span
            className="grid h-9 w-9 place-items-center border border-line-dark font-display text-base leading-none text-soft-white transition-colors group-hover:border-signal"
            aria-hidden="true"
          >
            {driver.number}
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-sm tracking-wide text-soft-white">
              BRUNO DEL PINO
            </span>
            <span className="meta-label text-[0.5625rem] text-muted">
              {t.footer.concept}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="focus-ring meta-label transition-colors hover:text-soft-white"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <LanguageToggle className="hidden sm:flex" />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.nav.close : t.nav.menu}
            className="focus-ring grid h-10 w-10 place-items-center text-soft-white md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={drawerRef}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-line-dark bg-ink/98 backdrop-blur-md md:hidden"
          >
            <nav
              className="mx-auto flex max-w-[1600px] flex-col px-4 py-4 sm:px-6"
              aria-label="Mobile"
            >
              {NAV.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="focus-ring flex min-h-[44px] items-center justify-between border-b border-line-dark/60 py-3 font-display text-2xl tracking-wide text-soft-white"
                >
                  {t.nav[item.key]}
                  <span className="meta-label text-muted">0{NAV.indexOf(item) + 1}</span>
                </Link>
              ))}
              <div className="mt-5 flex items-center justify-between">
                <LanguageToggle />
                <span className="meta-label text-muted">{t.footer.notOfficial}</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
