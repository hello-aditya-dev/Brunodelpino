/**
 * Career progression — single source of truth.
 * Snapshot: 14 August 2026.
 *
 * Sources:
 *  - FIA F3 profile + official Eurocup-3 standings for season placements.
 *  - MP Motorsport 2025 promotion announcement for 2024 wins/podiums.
 *  - Do NOT use the internally-inconsistent VAR chronology sentence.
 *
 * Note: Pedro de la Rosa is identified by FIA/VAR as Bruno's uncle.
 * Mentioned at most once in extended biography; Bruno is the subject.
 */
export type CareerItem = {
  period: string;
  category: string;
  display: string;
  details: string[];
  team?: string;
  sourceUrls: string[];
};

export const career: CareerItem[] = [
  {
    period: "2017–2021",
    category: "Karting",
    display: "Karting",
    details: ["Foundation years in karting across Spain."],
    sourceUrls: ["https://www.fiaformula3.com/en/drivers/bruno-del-pino"],
  },
  {
    period: "2022",
    category: "F4",
    display: "Single-seater debut",
    details: [
      "F4 Spanish Championship — 16th",
      "FIA Motorsport Games F4 Cup — 3rd",
    ],
    sourceUrls: ["https://www.fiaformula3.com/en/drivers/bruno-del-pino"],
  },
  {
    period: "2023",
    category: "Eurocup-3 / FRECA",
    display: "Eurocup-3 rookie season",
    details: [
      "Eurocup-3 — 7th (rookie title per Van Amersfoort Racing)",
      "Formula Regional European Championship — 32nd",
    ],
    sourceUrls: ["https://www.vanamersfoortracing.nl/drivers/bruno-del-pino/"],
  },
  {
    period: "2024",
    category: "Eurocup-3 / FRMEC",
    display: "Eurocup-3 title fight",
    team: "MP Motorsport",
    details: [
      "Eurocup-3 — 3rd overall",
      "Formula Regional Middle East Championship — 16th",
      "3 wins · 7 podiums · 1 pole · 3 fastest laps (Eurocup-3, per MP Motorsport)",
    ],
    sourceUrls: ["https://www.fiaformula3.com/en/drivers/bruno-del-pino"],
  },
  {
    period: "2025",
    category: "FIA Formula 3",
    display: "FIA F3 rookie season",
    team: "MP Motorsport",
    details: ["23rd overall", "Best result: P2 — Imola Sprint Race"],
    sourceUrls: ["https://www.fiaformula3.com/en/drivers/bruno-del-pino"],
  },
  {
    period: "2026",
    category: "FIA Formula 3",
    display: "Second FIA F3 season",
    team: "Van Amersfoort Racing",
    details: [
      "Car #16",
      "Melbourne Sprint — maiden FIA F3 victory",
      "9th in standings at snapshot · 49 points",
    ],
    sourceUrls: [
      "https://www.fiaformula3.com/en/drivers/bruno-del-pino",
      "https://www.fiaformula3.com/en/standings/2026/drivers",
    ],
  },
];
