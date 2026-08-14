/**
 * Media asset manifest.
 *
 * RIGHTS RULE (ASSETS/RIGHTS_AND_USAGE.md):
 *  This concept does NOT redistribute copyrighted race photographs or logos.
 *  All assets here are either:
 *   - "generated-atmosphere": original abstract imagery generated for mood,
 *     depicting NO identifiable person/driver, used as art-directed placeholders.
 *   - "concept-reference": a temporary Bruno reference image IF one is supplied
 *     by the environment, logged + replaceable. None are bundled by default.
 *
 *  Every image record keeps rights metadata so future approved assets can
 *  drop in without touching components.
 */
export type RightsStatus = "approved" | "concept-reference" | "generated-atmosphere" | "unknown";

export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  event?: string;
  year?: number;
  photographer?: string;
  sourceUrl?: string;
  rightsStatus: RightsStatus;
  focalPoint?: { x: number; y: number };
  caption?: string;
};

export const mediaAssets: MediaAsset[] = [
  {
    id: "M01",
    src: "/assets/atmos-hero.png",
    alt: "Abstract light trail tracing a racing line across dark asphalt at night",
    event: "Atmosphere",
    year: 2026,
    rightsStatus: "generated-atmosphere",
    focalPoint: { x: 50, y: 45 },
    caption: "A continuous line, from lights to asphalt.",
  },
  {
    id: "M02",
    src: "/assets/atmos-melbourne.png",
    alt: "Abstract orange light bloom over a dark circuit — first win atmosphere",
    event: "Melbourne",
    year: 2026,
    rightsStatus: "generated-atmosphere",
    focalPoint: { x: 50, y: 50 },
    caption: "Moment 01 — Melbourne.",
  },
  {
    id: "M03",
    src: "/assets/atmos-madrid.png",
    alt: "Abstract dusk skyline with a single traced line — finale atmosphere",
    event: "Madrid",
    year: 2026,
    rightsStatus: "generated-atmosphere",
    focalPoint: { x: 50, y: 40 },
    caption: "The final beat.",
  },
  {
    id: "M04",
    src: "/assets/atmos-track-01.png",
    alt: "Abstract motion-blurred single-seater light streak at speed",
    event: "Trackside",
    year: 2026,
    rightsStatus: "generated-atmosphere",
    focalPoint: { x: 50, y: 50 },
    caption: "Velocity.",
  },
  {
    id: "M05",
    src: "/assets/atmos-track-02.png",
    alt: "Abstract dark garage interior lit by a warm overhead strip",
    event: "Trackside",
    year: 2026,
    rightsStatus: "generated-atmosphere",
    focalPoint: { x: 50, y: 50 },
    caption: "Preparation.",
  },
  {
    id: "M06",
    src: "/assets/atmos-track-03.png",
    alt: "Abstract wet asphalt reflecting circuit lights in orange and white",
    event: "Trackside",
    year: 2026,
    rightsStatus: "generated-atmosphere",
    focalPoint: { x: 50, y: 60 },
    caption: "Conditions.",
  },
  {
    id: "M07",
    src: "/assets/atmos-barcelona.png",
    alt: "Abstract warm Mediterranean dusk light over a Spanish circuit — home weekend atmosphere",
    event: "Barcelona",
    year: 2026,
    rightsStatus: "generated-atmosphere",
    focalPoint: { x: 50, y: 45 },
    caption: "Home — Barcelona.",
  },
];

export const heroAsset = mediaAssets.find((m) => m.id === "M01")!;
export const melbourneAsset = mediaAssets.find((m) => m.id === "M02")!;
export const madridAsset = mediaAssets.find((m) => m.id === "M03")!;
export const barcelonaAsset = mediaAssets.find((m) => m.id === "M07")!;
export const tracksideAssets = mediaAssets.filter((m) =>
  ["M04", "M05", "M06"].includes(m.id),
);
