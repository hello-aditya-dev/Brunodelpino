# Update Season Data

How to update mutable 2026 season data for the Bruno Del Pino site.

## Source priority

1. FIA Formula 3 official standings/results — https://www.fiaformula3.com/en/standings/2026/drivers
2. FIA Formula 3 official reports
3. Team/management sources (Van Amersfoort Racing, Pro Racing Motorsport)
4. Reputable secondary corroboration

No runtime scraping. All data is local structured files.

## What to update

### After each round

File: `src/content/season-2026.ts`

1. Find the round in the `rounds` array.
2. Update `status` from `"upcoming"` to `"complete"`.
3. Add `sprint` / `feature` results with `result`, `points`, `note`, `verified: true`.
4. If a post-race penalty changed the classification, note it in the `note` field.
5. Update `seasonSummary` (position, points, wins, podiums).
6. Update `lastVerified` to today's date.
7. Find the next round and set its `status` to `"next"`.

### Advancing the next round

The `nextRound` export auto-finds the round with `status === "next"`.
The `NextUp` countdown component auto-advances when the round window passes.

### Madrid finale

Madrid has `finale: true` and `expandedFinale: true`.
After Madrid:
- Set status to `"complete"`.
- Add `feature2` result (expanded finale has 2 Feature Races).
- The `NextUp` component shows "Season complete" when no `next` round exists.

## Do NOT

- Do not mix new standings with old per-round data.
- Do not call data "live" — it is local/static.
- Do not invent finishing positions for rounds with no points.
- Do not confuse MADRING test (24–25 Aug) with Madrid race (11–13 Sep).

## After updating

1. Run `bun run lint`
2. Preview at http://localhost:3000
3. Verify the NextUp section shows the correct next round.
4. Verify the Race Trace shows correct statuses.
5. Commit with: `data: update season to <round> <date>`
