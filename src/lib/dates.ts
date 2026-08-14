/**
 * Date helpers for the Madrid finale countdown.
 *
 * Three lifecycle states (QA/ACCEPTANCE_TESTS.md):
 *  - "pre":    counts down to the Madrid race weekend start.
 *  - "event":  clean "Madrid weekend" state, never zero/negative.
 *  - "post":   archive / complete state.
 *
 * Madrid race weekend: 11–13 September 2026 (UTC dates).
 * MADRING official test: 24–25 August 2026 — do NOT confuse with the race.
 */

export type CountdownState = "pre" | "event" | "post";

export type CountdownParts = {
  state: CountdownState;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// Madrid finale window (local-agnostic; date-only boundaries, end = day after).
export const MADRID_START = "2026-09-11T00:00:00Z";
export const MADRID_END = "2026-09-14T00:00:00Z"; // exclusive end (end of 13 Sep)

export function parseUtc(dateStr: string): number {
  return new Date(dateStr).getTime();
}

function clampNonNegative(n: number): number {
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
}

/**
 * Compute the countdown to a target window.
 * Accepts an optional `now` for deterministic testing of pre/event/post states.
 */
export function computeCountdown(
  now: number = Date.now(),
  start: string = MADRID_START,
  end: string = MADRID_END,
): CountdownParts {
  const startMs = parseUtc(start);
  const endMs = parseUtc(end);

  if (now >= endMs) {
    return { state: "post", days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  if (now >= startMs) {
    return { state: "event", days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const diff = startMs - now;
  const days = clampNonNegative(diff / 86_400_000);
  const hours = clampNonNegative((diff % 86_400_000) / 3_600_000);
  const minutes = clampNonNegative((diff % 3_600_000) / 60_000);
  const seconds = clampNonNegative((diff % 60_000) / 1_000);

  return { state: "pre", days, hours, minutes, seconds };
}

/** Format a date range like "11–13.09.26" from ISO start/end. */
export function formatRangeShort(start: string, end: string): string {
  const s = new Date(start);
  const e = new Date(end);
  const startDay = String(s.getUTCDate()).padStart(2, "0");
  const endDay = String(e.getUTCDate() - 1).padStart(2, "0"); // inclusive end day
  const month = String(s.getUTCMonth() + 1).padStart(2, "0");
  const year = String(s.getUTCFullYear()).slice(-2);
  return `${startDay}–${endDay}.${month}.${year}`;
}

/** Long human date for a single ISO date. */
export function formatLong(iso: string, locale: "en" | "es" = "en"): string {
  const d = new Date(iso);
  const localeTag = locale === "es" ? "es-ES" : "en-GB";
  return d.toLocaleDateString(localeTag, {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
