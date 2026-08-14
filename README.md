# BRUNO DEL PINO · 16 — THE ROAD HOME

> An independent, private website concept for **Bruno Del Pino** — Spanish FIA Formula 3 driver, Van Amersfoort Racing, car #16, 2026.

**This is a private concept. It is NOT an official site.**
Not affiliated with Bruno Del Pino, Van Amersfoort Racing, or FIA Formula 3.
No public indexing. No endorsement implied. All race data is owned by its
respective rights holders.

---

## The concept

```
16 / THE ROAD HOME
```

A single continuous **racing line** runs through the entire site — entering
with the `#16` opening, becoming the 2026 Race Trace, turning into the career
progression, resolving into the Madrid home finale, and settling in the footer.

The narrative spine is the movement from the season-opening **Melbourne
breakthrough** toward the **Madrid finale** — Bruno's home event and the
expanded 2026 season closer.

This is concept language, not an official slogan.

### Snapshot · 14 August 2026

| | |
|---|---|
| Driver | Bruno Del Pino |
| Nationality | Spain |
| Born | 20 June 2006 |
| Championship | FIA Formula 3 |
| Team | Van Amersfoort Racing |
| Car | #16 |
| Standings | 9th · 49 pts |
| Wins | 1 (Melbourne Sprint) |
| Confirmed podiums | 2 |
| Next round | Monza · 4–6 Sep 2026 |
| Finale | Madrid · 11–13 Sep 2026 (expanded format) |

---

## What's inside

### Routes

| Route | Purpose |
|---|---|
| `/` | Flagship narrative homepage (the full story) |
| `/season` | Detailed 2026 round-by-round season |
| `/career` | Career progression from karting to F3 |
| `/media` | Image archive with rights metadata |
| `/partners` | Commercial partner architecture (private in concept mode) |
| `/contact` | Sourced management / press / social routes |

### Homepage sequence

1. **Opening / 16** — near-black field, the line draws, `16` reveals `BRUNO DEL PINO`
2. **Hero** — full-viewport editorial composition with metadata
3. **Race Trace** — the flagship interaction: a continuous line connecting all 9 rounds
4. **Melbourne** — Moment 01, the maiden F3 win
5. **Current** — large typographic stats (no dashboard cards)
6. **The Road** — career progression along the same line
7. **Madrid** — the emotional centerpiece with a 3-state countdown
8. **Trackside** — controlled image choreography (not "Gallery")
9. **Partners** — feature-flagged, private in concept mode
10. **End card** — the global footer with identity, links & disclaimer

### Signature features

- **The Line** — a reusable SVG racing-line primitive with line-draw animation,
  `prefers-reduced-motion` safe, decorative instances `aria-hidden`.
- **Race Trace** — horizontal trace on desktop, vertical on mobile. Five node
  states: `complete · next · upcoming · home · hero-moment`. Verified per-round
  facts revealed on interaction. No scroll-jacking.
- **Madrid countdown** — three lifecycle states: `pre` (counting down),
  `event` (clean "Madrid weekend"), `post` (archive). Never shows negative
  numbers. Distinguishes the MADRING test (24–25 Aug) from the race (11–13 Sep).
- **EN / ES** — static translation dictionaries, locale persisted to
  `localStorage`, SSR-safe (no hydration mismatch via `useSyncExternalStore`).
- **Concept mode** — `noindex/nofollow`, concept disclaimer, provisional
  partners off, no official structured data.

---

## Design system

Concept palette (not claimed official brand colors):

| Token | Hex | Use |
|---|---|---|
| `ink` | `#090909` | Near-black field |
| `paper` | `#F2EFE8` | Warm off-white sections |
| `soft-white` | `#FAF8F2` | Lifted paper / type |
| `muted` | `#989898` | Meta & secondary |
| `line` | `#2A2A2A` | Hairline on dark |
| `signal` | `#FF5A1F` | Restrained orange (<10–15% per viewport) |

- **Display type:** Barlow Condensed (600/700)
- **UI type:** Inter (400/500/600)
- **Geometry:** square corners; 2–8px radius only for touch targets
- **Grid:** 12-col desktop / 8-col tablet / 4-col mobile, max 1600px
- **Anti-patterns rejected:** no purple, no gradient mesh, no glassmorphism,
  no floating cards, no neon glow, no checkerboard, no tire textures.

---

## Tech stack

- **Next.js 16** (App Router) + **TypeScript 5**
- **Tailwind CSS 4** + **shadcn/ui** (New York)
- **Framer Motion** — single motion system (reveal / velocity / trace / transition)
- **No database, no auth, no CMS, no runtime scraper** — local structured data only

---

## Getting started

```bash
# install
bun install

# dev (http://localhost:3000)
bun run dev

# lint
bun run lint

# production build
bun run build
```

> The preview is served on port 3000. Open it in the Preview Panel.

---

## Project structure

```
src/
  app/
    layout.tsx            # fonts, concept-mode metadata, header/footer
    page.tsx              # flagship homepage
    season/page.tsx       # detailed 2026 season
    career/page.tsx       # career progression
    media/page.tsx        # image archive
    partners/page.tsx     # partner architecture
    contact/page.tsx      # management / press / social
    not-found.tsx         # deliberate 404
    robots.ts             # noindex (concept mode)
    globals.css           # design tokens, type scale, reduced motion
  components/
    global/               # SiteHeader, SiteFooter, RaceLine, LocaleProvider…
    home/                 # Hero, RaceTrace, MelbourneMoment, MadridHome…
  content/                # source-of-truth data modules
    driver.ts  season-2026.ts  career.ts  contacts.ts
    media.ts  translations.ts  site-config.ts
  lib/
    locale.tsx            # EN/ES context (useSyncExternalStore)
    dates.ts              # Madrid countdown (pre/event/post)
public/assets/            # abstract atmospheric imagery (generated, no people)
```

---

## Data & fact verification

All mutable facts live in `src/content/` with `lastVerified` and `sourceUrl`
metadata. Nothing is scraped at runtime.

**Primary sources:**
- FIA Formula 3 driver profile & standings
- Van Amersfoort Racing driver page
- Pro Racing Motorsport public contacts
- Official Eurocup-3 standings & MP Motorsport 2024 summary

**Fact gates enforced:**
- 9-round 2026 calendar (not the older "10 rounds")
- Melbourne: Sprint P1 (maiden win, reduced points), Feature P4, fastest-lap point
- Monaco: final classification P2 (post-DSQ), Feature P6
- Madrid expanded finale: 2 qualifying · 1 Sprint · 2 Feature Races
- No invented quotes, no fabricated stats, no "official" claim

---

## Asset rights

This concept does **not** redistribute copyrighted race photographs or logos.
All imagery in `public/assets/` is **generated atmospheric** placeholder art
depicting no identifiable person. Every asset record carries a `rightsStatus`
field so approved official photography can drop in without touching components.

Before official launch: obtain approved assets, record photographer credits,
remove all `concept-reference` / `generated-atmosphere` placeholders.

---

## Concept mode → official mode

This build ships in **concept mode** only. To switch to official mode after
explicit management authorization:

1. In `src/content/site-config.ts`, set `siteMode: "official"`.
2. Set `showProvisionalPartners: true` only after partner confirmation.
3. In `src/app/robots.ts`, replace `disallow: "/"` with indexable rules.
4. In `src/app/layout.tsx`, update the title to drop "Concept" and add
   official Person/ProfilePage structured data.
5. Replace generated atmospheric imagery with approved photography.
6. Remove the concept disclaimer from the footer.

**Official mode must not be enabled without explicit approval.**

---

## Accessibility

- Semantic landmarks, single logical H1, correct heading order
- Keyboard navigation, visible focus rings, 44px touch targets
- Mobile drawer with focus trap + Escape close
- `prefers-reduced-motion` renders final states immediately
- Decorative SVG hidden from screen readers (`aria-hidden`)
- Alt text on every meaningful image
- Skip-to-content link

---

## Credits

- **Subject:** Bruno Del Pino — FIA Formula 3 driver
- **Team:** Van Amersfoort Racing
- **Management:** Pro Racing Motorsport
- **Data:** FIA Formula 3 public standings & reports
- **Concept build:** Independent — for private review only

---

*Independent website concept. Not affiliated with Bruno Del Pino, Van Amersfoort
Racing or FIA Formula 3. All race data owned by its respective rights holders.*
