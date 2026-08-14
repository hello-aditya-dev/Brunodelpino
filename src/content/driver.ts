/**
 * Driver identity — single source of truth.
 * Snapshot: 14 August 2026.
 * Sources:
 *  - https://www.fiaformula3.com/en/drivers/bruno-del-pino
 *  - https://www.vanamersfoortracing.nl/drivers/bruno-del-pino/
 */
export type Driver = {
  displayName: string;
  firstName: string;
  lastName: string;
  nationality: string;
  nationalityCode: string;
  dateOfBirth: string;
  team: string;
  number: number;
  championship: string;
  instagram: string;
  lastVerified: string;
  sourceUrls: string[];
};

export const driver: Driver = {
  displayName: "Bruno Del Pino",
  firstName: "BRUNO",
  lastName: "DEL PINO",
  nationality: "Spain",
  nationalityCode: "ESP",
  dateOfBirth: "2006-06-20",
  team: "Van Amersfoort Racing",
  number: 16,
  championship: "FIA Formula 3",
  instagram: "https://instagram.com/_brunodelpino",
  lastVerified: "2026-08-14",
  sourceUrls: [
    "https://www.fiaformula3.com/en/drivers/bruno-del-pino",
    "https://www.vanamersfoortracing.nl/drivers/bruno-del-pino/",
  ],
};
