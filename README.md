# Eraiki DS v02

The Eraiki design system **plus its Storybook documentation** — no custom portal.
Storybook is the single documentation surface, and everything is driven by the repo's
own single sources, so docs and code never drift.

## Run Storybook

```bash
cd storybook
npm install
npm run storybook   # http://localhost:6006
```

## Structure

- **`tokens.css`** — design tokens: a small brand layer (`--brand-*`) feeds the
  primitives, which feed the semantic Fill/Stroke aliases. Rebrand the whole system
  (light + dark) by editing the `--brand-*` values here.
- **`css/components.css`** — component styles (the `.ek-*` classes).
- **`js/`** — the runtime (`eraiki.js`) + the content modules Storybook reads:
  - `previews.js` / `playgrounds.js` — component markup + prop-driven emulators
  - `sections.js` — section config + live markup
  - `components-data.js` / `docs-figma.js` — written docs + state catalogue
  - `icons.js`, `builders.js`, `icons-doc.js`, and the foundation `*-doc.js` modules
- **`assets/`** — icons + section images.
- **`storybook/`** — the Storybook project (`.storybook/` config + `stories/`).
- **`scripts/gen-stories.mjs`** — regenerates the component + section stories from the
  sources. Re-run after adding a component or section:

  ```bash
  node scripts/gen-stories.mjs
  ```

## What's documented

- **Foundations** (8): Colors, Typography, Spacing, Corner radius, Border width,
  Elevations, Breakpoints, Icons.
- **Components** (41): each with a **Docs** page (live preview + written documentation)
  and a **Playground** (real prop controls).
- **Sections** (14): each with a **Docs** page and a live **Preview**.
