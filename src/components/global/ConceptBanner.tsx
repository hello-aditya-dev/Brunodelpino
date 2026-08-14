"use client";

import { useState } from "react";
import { useLocale } from "@/lib/locale";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * ConceptBanner — slim, always-available disclaimer strip.
 * The disclaimer must remain until explicit management approval
 * (ASSETS/RIGHTS_AND_USAGE.md). It may be collapsed by the viewer for the
 * current session but the disclaimer state is never removed from the build.
 */
export function ConceptBanner() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  // Persisted only in memory for the session — disclaimer always reappears
  // on fresh load, satisfying the "must remain until approval" rule.
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AnimatePresence initial={false}>
      {!collapsed && (
        <motion.div
          initial={reduce ? false : { height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative z-40 overflow-hidden border-b border-line-dark bg-ink"
        >
          <div className="mx-auto flex max-w-[1600px] items-center gap-3 px-4 py-2 sm:px-6 md:px-10">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal animate-pulse-soft"
              aria-hidden="true"
            />
            <p className="flex-1 truncate text-[0.6875rem] font-medium tracking-[0.14em] uppercase text-muted">
              <span className="text-signal">Concept</span>{" "}
              <span className="hidden sm:inline">{t.end.disclaimer}</span>
              <span className="sm:hidden">Independent concept — not an official site</span>
            </p>
            <button
              type="button"
              onClick={() => setCollapsed(true)}
              aria-label="Collapse concept notice"
              className="focus-ring shrink-0 text-muted transition-colors hover:text-soft-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
