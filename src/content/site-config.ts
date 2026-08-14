/**
 * Site-wide configuration — V2.
 *
 * Centralized site-mode system (V2_PRODUCT_BRIEF / PITCH_MODE_AND_OFFICIAL_MODE).
 *
 * siteMode:
 *  - "pitch": noindex/nofollow, one discreet footer disclaimer, provisional
 *    partners off, no official Person schema, no sitemap submission. This is
 *    the ONLY mode this build may ship in until Bruno / authorized management
 *    explicitly approves official status.
 *  - "official": only after explicit written authorization.
 *
 * SITE_ORIGIN: the real deployment origin (V2 fixes the V1 brunodelpino.concept
 * placeholder canonical — pitch mode uses the real preview origin or a
 * deliberate no-canonical approach).
 *
 * Creative motif (internal, NOT an official slogan):
 *   RHYTHM / 16
 * Derived from Bruno's recurring public language around rhythm, consistency,
 * and maximising opportunities. Retires the V1 "THE ROAD HOME" framing.
 *
 * Home-race correction (V2 critical):
 *   BARCELONA = home
 *   MADRID = finale (final round in Spain, NOT personal home)
 */
export const siteConfig = {
  siteMode: "pitch" as "pitch" | "official",
  showProvisionalPartners: false,
  // Real deployment origin (replaces the V1 brunodelpino.concept placeholder).
  // In pitch mode this is the preview origin; canonical is deliberately
  // omitted to avoid claiming a domain we don't own.
  siteOrigin: "https://brunodelpino.vercel.app",
  snapshotDate: "2026-08-14",
  defaultLocale: "en" as "en" | "es",
  // Internal creative motif — NOT an official slogan.
  motif: "RHYTHM / 16",
  // Single discreet pitch disclaimer (footer only, not repeated everywhere).
  pitchDisclaimer:
    "Independent website concept prepared for Bruno Del Pino and his team. Not currently an official website.",
} as const;

export type SiteConfig = typeof siteConfig;
