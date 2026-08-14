"use client";

import { useLocale } from "@/lib/locale";
import type { Locale } from "@/content/translations";

const LOCALES: Locale[] = ["en", "es"];

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={`flex items-center gap-1 text-[0.6875rem] font-medium tracking-[0.18em] uppercase ${className ?? ""}`}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={locale === l}
            aria-label={`Switch language to ${l === "en" ? "English" : "Spanish"}`}
            className={`focus-ring px-1.5 py-1 transition-colors ${
              locale === l
                ? "text-soft-white"
                : "text-muted hover:text-soft-white"
            }`}
          >
            {l.toUpperCase()}
          </button>
          {i < LOCALES.length - 1 && (
            <span className="text-muted/40" aria-hidden="true">
              /
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
