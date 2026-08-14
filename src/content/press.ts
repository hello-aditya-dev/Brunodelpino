/**
 * Press Room content — V2.
 *
 * Bios are editorial concept copy, NOT Bruno quotes.
 * All facts sourced from the verified snapshot (BRUNO_FACTS_V2.json).
 *
 * Pitch mode: show architecture + bios + facts + contacts.
 * Approved asset downloads only after management clearance.
 */
export type Bio = {
  short: string; // ~50 words
  full: string; // ~150 words
};

export const bios: Record<"en" | "es", Bio> = {
  en: {
    short:
      "Bruno Del Pino is a Spanish racing driver born 20 June 2006, competing in his second FIA Formula 3 season in 2026 with Van Amersfoort Racing, car #16. He claimed his maiden FIA F3 victory in the Melbourne Sprint and sits 9th in the standings at the season snapshot.",
    full:
      "Bruno Del Pino is a Spanish racing driver born on 20 June 2006. After a karting foundation (2017–2021), he moved into single-seaters in 2022, racing in the F4 Spanish Championship and the FIA Motorsport Games F4 Cup. His 2023 Eurocup-3 rookie campaign earned him the rookie title with Van Amersfoort Racing, and in 2024 he finished 3rd overall in Eurocup-3 with MP Motorsport, recording 3 wins, 7 podiums, 1 pole and 3 fastest laps. He debuted in FIA Formula 3 in 2025 with MP Motorsport, scoring a best result of P2 in the Imola Sprint. In 2026 he joined Van Amersfoort Racing in car #16, taking his maiden FIA F3 victory in the Melbourne Sprint and currently sits 9th in the standings with 49 points. His public racing language centres on rhythm, consistency, and maximising opportunities.",
  },
  es: {
    short:
      "Bruno Del Pino es un piloto español nacido el 20 de junio de 2006, que compite en su segunda temporada de FIA Formula 3 en 2026 con Van Amersfoort Racing, coche #16. Logró su primera victoria en FIA F3 en el Sprint de Melbourne y ocupa el 9.º puesto en la clasificación en el momento de la temporada.",
    full:
      "Bruno Del Pino es un piloto español nacido el 20 de junio de 2006. Tras una base en el karting (2017–2021), pasó a los monoplazas en 2022, compitiendo en el Campeonato F4 Español y la FIA Motorsport Games F4 Cup. Su temporada de novato en Eurocup-3 en 2023 le valió el título de rookie con Van Amersfoort Racing, y en 2024 terminó 3.º en Eurocup-3 con MP Motorsport, con 3 victorias, 7 podios, 1 pole y 3 vueltas rápidas. Debutó en FIA Formula 3 en 2025 con MP Motorsport, con un mejor resultado de P2 en el Sprint de Imola. En 2026 se unió a Van Amersfoort Racing en el coche #16, logrando su primera victoria en FIA F3 en el Sprint de Melbourne y ocupando actualmente el 9.º puesto con 49 puntos. Su lenguaje público gira en torno al ritmo, la constancia y maximizar las oportunidades.",
  },
};

export const factSheet = [
  { label: "Full name", value: "Bruno Del Pino" },
  { label: "Nationality", value: "Spain" },
  { label: "Date of birth", value: "20 June 2006" },
  { label: "Championship", value: "FIA Formula 3" },
  { label: "2026 Team", value: "Van Amersfoort Racing" },
  { label: "Car number", value: "16" },
  { label: "2026 Position", value: "9th" },
  { label: "2026 Points", value: "49" },
  { label: "2026 Wins", value: "1 (Melbourne Sprint)" },
  { label: "2026 Podiums", value: "2 confirmed" },
  { label: "Best 2026 result", value: "P1 — Melbourne Sprint" },
  { label: "Management", value: "Pro Racing Motorsport" },
];

export const factSheetEs = [
  { label: "Nombre completo", value: "Bruno Del Pino" },
  { label: "Nacionalidad", value: "España" },
  { label: "Fecha de nacimiento", value: "20 de junio de 2006" },
  { label: "Campeonato", value: "FIA Formula 3" },
  { label: "Equipo 2026", value: "Van Amersfoort Racing" },
  { label: "Número de coche", value: "16" },
  { label: "Posición 2026", value: "9.º" },
  { label: "Puntos 2026", value: "49" },
  { label: "Victorias 2026", value: "1 (Sprint Melbourne)" },
  { label: "Podios 2026", value: "2 confirmados" },
  { label: "Mejor resultado 2026", value: "P1 — Sprint Melbourne" },
  { label: "Dirección", value: "Pro Racing Motorsport" },
];

/**
 * Press asset slots — pitch mode shows architecture only.
 * Download CTAs render ONLY if a file exists and rights permit.
 */
export const pressAssetSlots = [
  { id: "PA01", name: "Headshot (high-res)", status: "pending-approval" as const },
  { id: "PA02", name: "Helmet 2026", status: "pending-approval" as const },
  { id: "PA03", name: "Car #16 action", status: "pending-approval" as const },
  { id: "PA04", name: "Melbourne victory", status: "pending-approval" as const },
  { id: "PA05", name: "Team / garage", status: "pending-approval" as const },
];
