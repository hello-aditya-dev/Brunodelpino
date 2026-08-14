import { Hero } from "@/components/home/Hero";
import { RaceTrace } from "@/components/home/RaceTrace";
import { MelbourneMoment } from "@/components/home/MelbourneMoment";
import { CurrentStats } from "@/components/home/CurrentStats";
import { CareerLine } from "@/components/home/CareerLine";
import { MadridHome } from "@/components/home/MadridHome";
import { Trackside } from "@/components/home/Trackside";
import { Partners } from "@/components/home/Partners";

/**
 * Homepage — the flagship narrative.
 * Sequence (CREATIVE/HOMEPAGE_STORYBOARD.md):
 *  1. Opening / 16  → Hero
 *  2. Race Trace / 2026
 *  3. Melbourne / Moment 01
 *  4. Current / 2026
 *  5. The Road / career
 *  6. Madrid / The Road Home
 *  7. Trackside
 *  8. Partners
 *  9. End card → global SiteFooter (#end)
 */
export default function Home() {
  return (
    <>
      <Hero />
      <RaceTrace />
      <MelbourneMoment />
      <CurrentStats />
      <CareerLine />
      <MadridHome />
      <Trackside />
      <Partners />
    </>
  );
}
