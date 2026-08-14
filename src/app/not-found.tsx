import Link from "next/link";
import { RaceLine } from "@/components/global/RaceLine";
import { driver } from "@/content/driver";

/**
 * Deliberate 404 (QA/ACCEPTANCE_TESTS.md: "unknown route returns a deliberate 404").
 * Keeps the editorial identity: #16 + line motif + concept disclaimer.
 */
export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden bg-ink px-4 py-24">
      <div className="relative z-10 w-full max-w-2xl text-center">
        <span className="meta-label text-signal">404</span>
        <p className="mt-4 font-display hero-display text-soft-white">
          {driver.number}
        </p>
        <RaceLine
          variant="accent"
          className="mx-auto mt-6 h-6 w-56 text-signal/60"
          strokeWidth={1.5}
          duration={1.6}
        />
        <p className="mt-6 font-display text-2xl text-soft-white md:text-3xl">
          OFF TRACK
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">
          This page doesn&apos;t exist. The line continues on the homepage.
        </p>
        <Link
          href="/"
          className="focus-ring group mt-8 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-soft-white"
        >
          <span className="h-px w-6 bg-signal transition-all group-hover:w-10" />
          Back to {driver.firstName} {driver.lastName}
        </Link>
      </div>
    </section>
  );
}
