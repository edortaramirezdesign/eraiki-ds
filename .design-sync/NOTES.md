# design-sync notes — Eraiki DS v02

## How this repo syncs
- [GENERAL] Eraiki is a vanilla HTML/CSS DS (`.ek-*`, `tokens.css`, `css/components.css`, `js/eraiki.js`) documented with `@storybook/html`. The converter needs React, so `react/` (`@eraiki/react`) holds thin React components that emit the exact `.ek-*` markup from `js/playgrounds.js` / `js/previews.js`. Shape = `package` (the HTML Storybook can't drive the React compare harness); previews are authored in `.design-sync/previews/` and graded on the absolute rubric.
- Build: `cd react && npm ci && npm run build && node scripts/gen-docs.mjs` (= `cfg.buildCmd`). `build.mjs` bundles `src/` → `dist/index.js` and concatenates `../tokens.css` + `../css/components.css` verbatim into `dist/eraiki.css` (`cfg.cssEntry` must be inside the package, hence the copy). `tsc` emits the `.d.ts`.
- Converter: `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules react/node_modules --entry react/dist/index.js --out ./ds-bundle`.
- Docs: `react/scripts/gen-docs.mjs` generates `react/docs/<Name>.md` from `js/components-data.js` (single source) + a React category and a "design property → React prop" line. `cfg.docsDir = docs`.
- Icons: `react/src/Icon.tsx` imports `js/icons.js` (window.EK_ICONS) so glyphs stay single-sourced.

## Fixes found
- [GENERAL] Fonts: the repo originally never loaded Inter / Plus Jakarta Sans (`--brand-font-*` only named them). Fixed at the source (user's choice, 2026-10-11): `tokens.css` now `@import`s Google Fonts (Inter 400–700, Plus Jakarta Sans 500–700, variable). The converter reports `[FONT_REMOTE]` (informational, expected) — no `cfg.extraFonts` needed. Verified loading in the bundle previews and in Storybook.
- [GENERAL] Inputs rendered in serif: `.ek-input input { font: inherit }` and nothing sets a family above it unless an ancestor has `.ek`. Fix: `EraikiProvider` (renders `<div class="ek">`) set as `cfg.provider`; the conventions header tells the design agent to always wrap in it.
- [GENERAL] Do not load `js/eraiki.js` alongside the React components: its document-level click delegation toggles the same `is-on`/`is-open` classes React manages.
- Banner / ButtonGroup / Icon: `[GRID_OVERFLOW] wide` → `cardMode: "column"`.

## DS findings (not sync issues — for the Eraiki team)
- `tokens.css` dark mode: the `@media (prefers-color-scheme: dark) :root {…}` block has no `:not([data-theme="light"])` guard, so `data-theme="light"` cannot force light mode on a dark-OS machine.
- Fonts come from Google Fonts at runtime: in the EU this sends visitors' IPs to Google (GDPR exposure for client sites); self-hosting the woff2 files is the alternative if that matters.

## Scope (phase 1 of 3, 2026-10-11)
- Synced: EraikiProvider, Icon, Button, ButtonGroup, Badge, Avatar, AvatarGroup, Banner, Checkbox, CheckboxGroup, Switch, TextField, Dropdown, Tabs (desktop), ProductCard, Label, Pill, PillGroup, Tooltip.
- Pending phase 2: Accordion, Breadcrumb, Calendar, Cell (featured/linkable/plain), Cells row, Divider, Dropdown input/options, File drop, Image, Input field (date range, date selector, password, text area), Pagination, PIN code, Placeholder, Radio buttons group, Rating, Search field, Tabs mobile, Text group.
- Pending phase 3: the 14 sections (`js/sections.js`).

## Re-sync risks
- React markup is hand-mirrored from `js/playgrounds.js` / `js/previews.js`: if a component's HTML structure changes there, update `react/src/<Name>.tsx` too (CSS-only changes flow automatically via `dist/eraiki.css`).
- Previews load remote images (i.pravatar.cc, cdn.dummyjson.com) — if those hosts change or block, Avatar / AvatarGroup / ProductCard cards go blank.
- Fonts load from fonts.googleapis.com at runtime — offline or blocked networks fall back to system fonts; if the brand fonts change, update the `@import` URL in `tokens.css`.
- Toolchain: Node 25, React 19.2, esbuild 0.25, TS 5.9, playwright 1.64 (chromium-1248 cache).
