import { Hero } from "@/components/home/Hero";
import { NextUp } from "@/components/home/NextUp";
import { RaceTrace } from "@/components/home/RaceTrace";
import { MelbourneMoment } from "@/components/home/MelbourneMoment";
import { CurrentStats } from "@/components/home/CurrentStats";
import { BarcelonaHome } from "@/components/home/BarcelonaHome";
import { CareerLine } from "@/components/home/CareerLine";
import { MadridFinale } from "@/components/home/MadridFinale";
import { Trackside } from "@/components/home/Trackside";
import { OffTrack } from "@/components/home/OffTrack";
import { PressTeaser } from "@/components/home/PressTeaser";

/**
 * Homepage — V2 narrative sequence (06_HOMEPAGE_STORYBOARD).
 *
 * V2 critical corrections:
 *  - Barcelona = HOME (personal home-race chapter)
 *  - Madrid = FINALE (not personal home)
 *  - Retired "THE ROAD HOME"; internal motif = RHYTHM / 16
 *  - No concept badge above hero; single discreet footer disclaimer
 *
 * Sequence:
 *  1. Hero / Bruno + 16
 *  2. Next Up (data-driven next round)
 *  3. Race Trace / 2026
 *  4. Moment 01 / Melbourne
 *  5. Current / Rhythm
 *  6. Barcelona / Home
 *  7. The Road / career
 *  8. Madrid / Finale
 *  9. Trackside / paddock
 * 10. Off Track / latest (social)
 * 11. Press Room teaser
 * 12. Footer / end card (#end, global SiteFooter)
 */
export default function Home() {
  return (
    <>
      <Hero />
      <NextUp />
      <RaceTrace />
      <MelbourneMoment />
      <CurrentStats />
      <BarcelonaHome />
      <CareerLine />
      <MadridFinale />
      <Trackside />
      <OffTrack />
      <PressTeaser />
    </>
  );
}
