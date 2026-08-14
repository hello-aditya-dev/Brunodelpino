/**
 * 2026 FIA Formula 3 season — single source of truth.
 * Snapshot: 14 August 2026.
 *
 * IMPORTANT FACT RULES:
 *  - Current official calendar = 9 rounds (calendar was revised; do not use
 *    older "10 rounds" language).
 *  - Madrid uses an expanded finale: 2 qualifying sessions, 1 Sprint, 2 Feature Races.
 *  - MADRING official test = 24–25 Aug 2026 (do NOT confuse with Madrid race
 *    11–13 Sep 2026).
 *  - Points are points, not inferred finishing positions.
 *
 * Sources:
 *  - https://www.fiaformula3.com/en/standings/2026/drivers
 *  - https://www.fiaformula3.com/en/racing/2026/melbourne
 *  - https://www.fiaformula3.com/en/latest/article/bruno-del-pinos-melbourne-weekend-debrief.3AOTMQ7X50AAq90Cc1vVD1
 *  - https://www.fiaformula3.com/en/latest/article/hiyu-yamakoshi-disqualified-from-monte-carlo-sprint-race.2egn34CLagPakpFV9DhnNs
 *  - https://www.fiaformula3.com/en/latest/article/le-disqualified-bhirombhakdi-penalised-post-spielberg-sprint-race.71yQxUhcLZqr2rdQxRdHfs
 *  - https://www.fiaformula3.com/en/latest/article/fia-formula-3-to-hold-official-tests-at-madring-in-august-as-the-2026-f3-season-finale-expands-with-additional-feature-race.1VGQYdEuNMGEGVM51PyEDH
 */

export type RaceResult = {
  result?: string | null;
  points?: number;
  note?: string;
  verified: boolean;
};

export type RoundStatus = "complete" | "next" | "upcoming";

export type Round = {
  round: number;
  slug: string;
  name: string;
  country: string;
  startDate: string;
  endDate: string;
  status: RoundStatus;
  homeEvent?: boolean;
  heroMoment?: boolean;
  finale?: boolean;
  expandedFinale?: boolean;
  qualifying?: RaceResult;
  sprint?: RaceResult;
  feature?: RaceResult;
  feature2?: RaceResult;
  sourceUrls?: string[];
};

export type SeasonSummary = {
  year: number;
  position: number | null;
  points: number | null;
  wins: number | null;
  podiums: number | null;
  car: number;
  lastVerified: string;
  sourceUrl: string;
};

export const seasonSummary: SeasonSummary = {
  year: 2026,
  position: 9,
  points: 49,
  wins: 1,
  podiums: 2,
  car: 16,
  lastVerified: "2026-08-14",
  sourceUrl: "https://www.fiaformula3.com/en/standings/2026/drivers",
};

export const rounds: Round[] = [
  {
    round: 1,
    slug: "melbourne",
    name: "Melbourne",
    country: "Australia",
    startDate: "2026-03-06",
    endDate: "2026-03-08",
    status: "complete",
    heroMoment: true,
    sprint: {
      result: "P1",
      points: 5,
      note: "Maiden FIA F3 victory. VAR 1–2 with Enzo Deligny. Race shortened / red-flagged; reduced points.",
      verified: true,
    },
    feature: {
      result: "P4",
      points: 13,
      note: "Included fastest-lap point.",
      verified: true,
    },
    sourceUrls: [
      "https://www.fiaformula3.com/en/latest/article/sprint-race-del-pino-leads-home-deligny-for-var-1-2-after-red-flag.3cOagPFJPpZKG1U8OQybRH",
      "https://www.fiaformula3.com/en/latest/article/bruno-del-pinos-melbourne-weekend-debrief.3AOTMQ7X50AAq90Cc1vVD1",
    ],
  },
  {
    round: 2,
    slug: "monte-carlo",
    name: "Monte Carlo",
    country: "Monaco",
    startDate: "2026-06-04",
    endDate: "2026-06-07",
    status: "complete",
    heroMoment: true,
    sprint: {
      result: "P2",
      points: 9,
      note: "Final classification P2 after Hiyu Yamakoshi disqualification.",
      verified: true,
    },
    feature: {
      result: "P6",
      points: 8,
      verified: true,
    },
    sourceUrls: [
      "https://www.fiaformula3.com/en/latest/article/hiyu-yamakoshi-disqualified-from-monte-carlo-sprint-race.2egn34CLagPakpFV9DhnNs",
      "https://www.fiaformula3.com/en/latest/article/feature-race-badoer-earns-maiden-f3-victory-in-monte-carlo.5eKhnHITe26C4Tez6N01AV",
    ],
  },
  {
    round: 3,
    slug: "barcelona",
    name: "Barcelona",
    country: "Spain",
    startDate: "2026-06-12",
    endDate: "2026-06-14",
    status: "complete",
    homeEvent: true,
    qualifying: { result: "P6", verified: true },
    sprint: {
      result: "P6",
      points: 5,
      note: "Per Pro Racing Motorsport team report.",
      verified: true,
    },
    feature: {
      result: "P6",
      points: 8,
      note: "Ran as high as P3 before tyre degradation.",
      verified: true,
    },
    sourceUrls: [
      "https://www.fiaformula3.com/Latest/3ZFl1KTrUrV4EMVcFYbsyL/qualifying-nael-makes-it-three-in-a-row-as-he-beats-ugochukwu-to-pole-in-barcelona",
      "https://www.proracingmotorsport.com/2026/06/15/pro-racing-motorsport-24-ore-le-mans-formula-3-barcellona/",
    ],
  },
  {
    round: 4,
    slug: "spielberg",
    name: "Spielberg",
    country: "Austria",
    startDate: "2026-06-26",
    endDate: "2026-06-28",
    status: "complete",
    sprint: {
      result: "P10",
      points: 1,
      note: "Promoted to P10 after Kanato Le disqualification.",
      verified: true,
    },
    feature: {
      result: null,
      points: 0,
      note: "Outside points; exact finish intentionally omitted.",
      verified: true,
    },
    sourceUrls: [
      "https://www.fiaformula3.com/en/latest/article/le-disqualified-bhirombhakdi-penalised-post-spielberg-sprint-race.71yQxUhcLZqr2rdQxRdHfs",
    ],
  },
  {
    round: 5,
    slug: "silverstone",
    name: "Silverstone",
    country: "Great Britain",
    startDate: "2026-07-03",
    endDate: "2026-07-05",
    status: "complete",
    sprint: { result: null, points: 0, verified: true },
    feature: { result: null, points: 0, verified: true },
  },
  {
    round: 6,
    slug: "spa-francorchamps",
    name: "Spa-Francorchamps",
    country: "Belgium",
    startDate: "2026-07-17",
    endDate: "2026-07-19",
    status: "complete",
    sprint: { result: null, points: 0, verified: true },
    feature: { result: null, points: 0, verified: true },
  },
  {
    round: 7,
    slug: "budapest",
    name: "Budapest",
    country: "Hungary",
    startDate: "2026-07-24",
    endDate: "2026-07-26",
    status: "complete",
    sprint: { result: null, points: 0, verified: true },
    feature: { result: null, points: 0, verified: true },
  },
  {
    round: 8,
    slug: "monza",
    name: "Monza",
    country: "Italy",
    startDate: "2026-09-04",
    endDate: "2026-09-06",
    status: "next",
  },
  {
    round: 9,
    slug: "madrid",
    name: "Madrid",
    country: "Spain",
    startDate: "2026-09-11",
    endDate: "2026-09-13",
    status: "upcoming",
    finale: true,
    expandedFinale: true,
  },
];

export const madridFinale = {
  venue: "Madrid / MADRING",
  startDate: "2026-09-11",
  endDate: "2026-09-13",
  expandedFormat: {
    qualifyingSessions: 2,
    sprintRaces: 1,
    featureRaces: 2,
  },
} as const;

export const madringTest = {
  venue: "MADRING",
  country: "Spain",
  startDate: "2026-08-24",
  endDate: "2026-08-25",
  note: "Official test — not the race weekend.",
} as const;

export const nextRound = rounds.find((r) => r.status === "next") ?? null;
export const homeRace = rounds.find((r) => r.homeEvent) ?? null;
export const finaleRound = rounds.find((r) => r.finale) ?? null;
