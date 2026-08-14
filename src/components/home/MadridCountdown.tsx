"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale";
import { computeCountdown, type CountdownParts } from "@/lib/dates";

/**
 * MadridCountdown — three lifecycle states (QA/ACCEPTANCE_TESTS.md):
 *  - pre:   counts down to the Madrid race weekend.
 *  - event: clean "Madrid weekend" state, never zero/negative.
 *  - post:  archive / complete state.
 *
 * Renders a stable SSR output (state computed from a fixed reference) and
 * upgrades on the client to a ticking countdown, avoiding hydration mismatch.
 */
export function MadridCountdown() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const [parts, setParts] = useState<CountdownParts | null>(null);

  useEffect(() => {
    const tick = () => setParts(computeCountdown());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  // SSR / pre-hydration: render a neutral placeholder skeleton (no numbers)
  // so the server and client markup match.
  if (!parts) {
    return (
      <div
        className="grid grid-cols-4 gap-3 sm:gap-6"
        aria-busy="true"
        aria-label={t.madrid.countdown}
      >
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="border border-line-dark p-3 sm:p-5">
            <span className="block h-10 w-full bg-line-dark/40 sm:h-14" />
            <span className="mt-2 block h-3 w-10 bg-line-dark/40" />
          </div>
        ))}
      </div>
    );
  }

  if (parts.state === "event") {
    return (
      <div className="border border-signal/50 bg-signal/5 p-6 sm:p-8">
        <p className="font-display text-3xl text-signal sm:text-4xl">
          {t.madrid.live}
        </p>
        <p className="mt-2 text-sm text-muted">{t.madrid.liveNote}</p>
      </div>
    );
  }

  if (parts.state === "post") {
    return (
      <div className="border border-line-dark p-6 sm:p-8">
        <p className="font-display text-3xl text-soft-white sm:text-4xl">
          {t.madrid.archive}
        </p>
        <p className="mt-2 text-sm text-muted">{t.madrid.archiveNote}</p>
      </div>
    );
  }

  const units = [
    { value: parts.days, label: t.madrid.days },
    { value: parts.hours, label: t.madrid.hours },
    { value: parts.minutes, label: t.madrid.minutes },
    { value: parts.seconds, label: t.madrid.seconds },
  ];

  return (
    <div aria-label={t.madrid.countdown}>
      <p className="meta-label mb-4 text-muted">{t.madrid.countdown}</p>
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {units.map((u, i) => (
          <div
            key={u.label}
            className={`border p-2 text-center sm:p-4 ${
              i === 0 ? "border-signal/50 bg-signal/5" : "border-line-dark"
            }`}
          >
            <p
              className={`font-display tabular-nums leading-none ${
                i === 0 ? "text-signal" : "text-soft-white"
              } text-[clamp(1.75rem,7vw,3.5rem)]`}
            >
              {String(u.value).padStart(2, "0")}
            </p>
            <p
              className={`mt-2 text-[0.5625rem] font-medium uppercase tracking-[0.16em] sm:text-[0.625rem] ${
                reduce ? "" : i === 0 ? "text-signal" : "text-muted"
              }`}
            >
              {u.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
