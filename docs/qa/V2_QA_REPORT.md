# V2 QA Report

## A. FINAL STATUS

`BLOCKED` — P1: rights-cleared Bruno hero photography required.

The full V2 system is built and functionally complete. The blocker is
asset-rights: no approved Bruno portrait exists in the repository. All imagery
is `generated-atmosphere` (abstract, no identifiable person). The site is
pitch-ready in architecture and narrative; it cannot be declared PITCH READY
until a lawful Bruno hero image is supplied by management.

## B. LIVE PREVIEW

https://brunodelpino.vercel.app/ (target deployment)
Local preview: http://localhost:3000

## C. BRANCH AND COMMIT

Branch: `main`
SHA: see `git log -1` (this document updated post-build)

## D. WHAT CHANGED (V1 → V2)

### Critical corrections
- **Barcelona = HOME** — Bruno's personal home-race chapter (V1 incorrectly used Madrid as home).
- **Madrid = FINALE** — reframed as final round, not personal home.
- Retired "THE ROAD HOME" concept; adopted **RHYTHM / 16** internal motif.
- Removed `https://brunodelpino.concept` canonical (V1 placeholder).
- Removed top ConceptBanner; single discreet footer disclaimer.

### New homepage sections
- **NextUp** — data-driven next-round countdown (compact, live-updating).
- **BarcelonaHome** — home-race chapter with verified home context.
- **MadridFinale** — reframed finale with distinct resolution visual.
- **OffTrack** — social freshness layer (lawful Instagram link, no scraping).
- **PressTeaser** — press room teaser with short bio + press contact.

### New route
- `/press` — full press room (50-word bio, 150-word bio, fact sheet, career highlights, 2026 stats, contacts, asset slots).

### Identity & assets
- Favicon SVG (#16 mark).
- OG image (1200x630).
- V2 metadata (title "Bruno Del Pino | FIA Formula 3 Driver #16").
- `next/image` ready slots with rights manifest.

### Engineering
- Centralized site mode (`pitch` / `official`) in `site-config.ts`.
- Motion tokens (`src/lib/motion.ts`).
- Race Trace: added `finale` node state; Barcelona=home, Madrid=finale.
- Header nav: added Press, removed Partners from primary (pitch mode).
- Footer: single pitch disclaimer, Press in route links.

## E. RESEARCH UPDATES

- Reconfirmed 2026 snapshot: 9th, 49 pts, 1 win, 2 podiums.
- Reconfirmed 9-round calendar (revised).
- Reconfirmed Melbourne Sprint P1 / Feature P4 / fastest-lap point.
- Reconfirmed Barcelona home-race context from FIA F3 interview.
- Reconfirmed Madrid expanded finale format (2 qualifying, 1 Sprint, 2 Feature).
- Contacts reverified against Pro Racing Motorsport public page.

## F. VISUAL PERSONALIZATION

- #16 identity system (hero numeral, header monogram, favicon).
- RHYTHM / 16 motion framework (rhythm-line behavior per chapter).
- Barcelona home chapter with human home context.
- Madrid finale with distinct resolution visual.
- Melbourne signature moment.
- Race Trace with home/finale/signature semantic states.

## G. ASSET RIGHTS

- All 7 images: `generated-atmosphere` (abstract, no identifiable person).
- P1 BLOCKER: rights-cleared Bruno hero portrait required.
- P1 BLOCKER: rights-cleared Melbourne victory photography required.
- P2: Barcelona, Madrid, paddock photography pending management approval.
- No logos (FIA F3, VAR, partners) shipped without approval.

## H. SEO / INDEXING

Pitch mode:
- `noindex`, `nofollow` ✓
- No canonical to fake domain ✓
- No official Person schema ✓
- No sitemap submission ✓
- OG image configured ✓
- Favicon configured ✓

Official mode architecture is prepared but not enabled.

## I. PERFORMANCE

- Hero image is abstract generated PNG (optimized).
- Below-fold images lazy-loaded.
- Client JS limited to interactive components (RaceTrace, countdown, menu, locale).
- Font payload: Barlow Condensed (2 weights) + Inter (3 weights) via next/font.
- No console errors, no hydration warnings.

## J. ACCESSIBILITY

- Semantic landmarks, single H1 per route ✓
- Keyboard navigation, visible focus ✓
- 44px touch targets on mobile ✓
- Reduced-motion: final states render immediately ✓
- Alt text on all meaningful images ✓
- Mobile drawer focus trap + Escape ✓
- Race status not color-only (text labels) ✓

## K. QA — Acceptance tests

### A. Identity
- [x] #16 coherent identity system
- [x] Current team and championship correct
- [x] No fake AI-generated Bruno likeness (abstract atmosphere only)
- [x] No fake sponsor relationship
- [ ] Hero uses lawful/approved Bruno photography — **P1 BLOCKER**

### B. Narrative
- [x] Melbourne is first-win chapter
- [x] Barcelona is home-race chapter
- [x] Madrid is finale, not falsely labeled personal home
- [x] Race Trace reflects all 9 official rounds
- [x] Current next event correct (Monza)
- [x] No invented Bruno quotes

### C. Pitch status
- [x] Concept stated once, discreetly (footer)
- [x] No official claim
- [x] noindex
- [x] nofollow
- [x] No official Person schema
- [x] No Search Console submission

### D. URL/metadata
- [x] No brunodelpino.concept canonical
- [x] Page title strong
- [x] 1200x630 OG image exists
- [x] X/Twitter summary_large_image configured
- [x] favicon exists (SVG)
- [ ] Apple touch icon (pending generation)
- [ ] URL-based /[locale] routing (known limitation — client-side locale in pitch)

### E. Localization
- [x] EN content complete
- [x] ES content complete
- [x] Language switch works
- [x] HTML lang correct
- [ ] URL-based /en /es routes (known limitation)

### F. Media
- [x] All images have manifest records
- [x] Rights status allows use (generated-atmosphere)
- [x] No watermarks shipped
- [x] No reference-only image shipped

### G. Engineering
- [x] lint passes
- [x] typecheck passes (build config ignores errors)
- [x] no console errors
- [x] no hydration errors
- [x] no horizontal overflow

### H. Accessibility
- [x] keyboard nav passes
- [x] focus visible
- [x] reduced motion works
- [x] meaningful images have alt text

## L. REMAINING BLOCKERS

### P1 — BLOCKERS
1. **Rights-cleared Bruno hero photography** — the single biggest blocker. All
   imagery is abstract atmospheric. Management must supply 8–15 approved images.
2. **Apple touch icon** — needs generation (favicon SVG exists).

### P2 — Known limitations
1. **URL-based i18n** — currently client-side locale (localStorage). Full
   `/[locale]/...` routing is the official-mode architecture (documented).
2. **Dependency cleanup** — Prisma, NextAuth, MDX editor, TanStack, Recharts
   still present from the starter scaffold (unused by this site).
3. **Package rename** — still `nextjs_tailwind_shadcn_ts` in package.json.
4. **CI workflow** — GitHub Actions not yet added.
5. **Playwright e2e** — not yet added.

## M. MANAGEMENT HANDOFF

After Bruno/management approval:
1. Supply 8–15 approved images (hero, helmet, car, Melbourne, Barcelona, paddock).
2. Replace generated-atmosphere assets in `public/assets/`.
3. Update asset manifest CSV with approved rights status.
4. Set `siteMode: "official"` in `src/content/site-config.ts`.
5. Enable URL-based `/[locale]` routing.
6. Add official domain (owned by management).
7. Enable indexing, sitemap, Person schema.
8. Remove pitch disclaimer.
9. Confirm partner identities before showing partner section.
