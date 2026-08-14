/**
 * Site-wide configuration.
 *
 * siteMode:
 *  - "concept": noindex/nofollow, disclaimer on, provisional partners off,
 *    no official structured data. This is the ONLY mode this build may ship in
 *    until Bruno / authorized management explicitly approves official status.
 *  - "official": may only be enabled after explicit authorization.
 */
export const siteConfig = {
  siteMode: "concept" as "concept" | "official",
  showProvisionalPartners: false,
  baseUrl: "https://brunodelpino.concept",
  snapshotDate: "2026-08-14",
  defaultLocale: "en" as "en" | "es",
  // Concept identity line — editable, NOT an official slogan.
  conceptLine: "16 / THE ROAD HOME",
} as const;

export type SiteConfig = typeof siteConfig;
