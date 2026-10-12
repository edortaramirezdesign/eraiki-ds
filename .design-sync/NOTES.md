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
- Banner / ButtonGroup / Icon / CellsRow / LinkableCell / PlainCell / FileDrop / TextArea / Accordion / TextGroup / Pagination: `[GRID_OVERFLOW] wide` → `cardMode: "column"`.
- `react/src/builders.ts` imports `js/builders.js` (window.EK_BUILD) to reuse the rating star and text-group icon SVGs — keep icons.js imported first.

- [GENERAL] Section images (phase 3): the repo has no published URL (no git remote) and the converter uploads no asset files, so `assets/sections/` isn't reachable from the project. Decision (2026-10-12): inline them in the bundle as data URLs (`react/build.mjs` loader `.webp`/`.svg` → `dataurl`). Photos are WebP copies in `react/src/sections/assets/` (made with Pillow from `assets/sections/*.jpg`: wide ones 1280px, portraits 720px tall, q42–55, 236 KB total); logos and illustrations import the original SVGs from `assets/sections/` (single source). Exposed as `sectionImages` and used as each section's default `image`/`images`/`logos`. Bundle grew 83 KB → ~450 KB. If the source photos change, regenerate the WebPs.
- Sections are 1440px page blocks with a real `@media (max-width: 1024px)` reflow → `cfg.overrides` give every section `viewport: "1440x900"`; `cardMode: "single"`, or `"column"` for the ones whose previews show both orders (Hero001, Explanation002, Explanation003, Contact001).
- Sections reuse components where the DS markup matches exactly: Button / ButtonGroup everywhere, TextGroup (Explanation001 card, Explanation004 card), TextField / TextArea with `ek-datefield--full` (Contact001), Icon. The h2 + `ek-heading-*` heads are the shared `react/src/sections/parts.tsx` (TextGroup renders an h3 with an inline size, which isn't the section markup).

## Known render warns
- Rating: `[RENDER_THIN] mounts have no text and paint nothing` — false positive; the stars are SVG only and render correctly (verified on the sheet).

## DS findings (not sync issues — for the Eraiki team)
- `tokens.css` dark mode: the `@media (prefers-color-scheme: dark) :root {…}` block has no `:not([data-theme="light"])` guard, so `data-theme="light"` cannot force light mode on a dark-OS machine.
- Fonts come from Google Fonts at runtime: in the EU this sends visitors' IPs to Google (GDPR exposure for client sites); self-hosting the woff2 files is the alternative if that matters.

## Scope
- Phase 1 (2026-10-11): EraikiProvider, Icon, Button, ButtonGroup, Badge, Avatar, AvatarGroup, Banner, Checkbox, CheckboxGroup, Switch, TextField, Dropdown, Tabs (desktop), ProductCard, Label, Pill, PillGroup, Tooltip.
- Phase 2 (2026-10-12): Accordion, Breadcrumb, Calendar, PlainCell, LinkableCell, FeaturedCell, CellsRow, Divider, DropdownInput, DropdownMenu (= Dropdown options), FileDrop, Image, DateField (= date selector), DateRangeField, PasswordField, TextArea, Pagination, PinCode, Placeholder, RadioGroup, Rating, SearchField, MobileTabs (= Tabs group mobile), TextGroup. All 41 DS components now covered.
- Phase 3 (2026-10-12): the 14 sections from `js/sections.js` — Hero001, Hero002, Explanation001–006, ValuesFeatures001–004, Marquee001, Contact001 (category "Sections", docs generated from the section version config) + `sectionImages`.

## Re-sync risks
- Section markup is hand-mirrored from `js/sections.js` (`ERAIKI_SECTIONS_BUILD`): structural changes there need the matching `react/src/sections/*.tsx` update.
- Marquee001's sample logos (`assets/sections/marquee-logo-*.svg`) are real press brands (Forbes, Expansión, El País…) — fine as placeholders, but designs should replace them via `logos`.
- React markup is hand-mirrored from `js/playgrounds.js` / `js/previews.js`: if a component's HTML structure changes there, update `react/src/<Name>.tsx` too (CSS-only changes flow automatically via `dist/eraiki.css`).
- Previews load remote images (i.pravatar.cc, cdn.dummyjson.com, images.unsplash.com) — if those hosts change or block, Avatar / AvatarGroup / ProductCard cards go blank.
- Fonts load from fonts.googleapis.com at runtime — offline or blocked networks fall back to system fonts; if the brand fonts change, update the `@import` URL in `tokens.css`.
- Toolchain: Node 25, React 19.2, esbuild 0.25, TS 5.9, playwright 1.64 (chromium-1248 cache).
