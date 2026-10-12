# Eraiki DS — how to build with it

Eraiki is a token + CSS design system (`.ek-*` classes) with thin React components on `window.Eraiki`. The components only render the canonical `.ek-*` markup; **all styling lives in `styles.css`** (tokens + component CSS + Inter / Plus Jakarta Sans fonts). Never restyle components with ad-hoc colors, fonts or radii — use the tokens below.

## Setup — always wrap the screen in `EraikiProvider`
`EraikiProvider` renders the `.ek` root class, which sets the body font. Without it, `<input>` text and plain copy fall back to the browser serif font.

```jsx
const { EraikiProvider, Button, TextField } = window.Eraiki;

<EraikiProvider>
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-m)', width: 320 }}>
    <h2 className="ek-heading-m">Sign in</h2>
    <TextField label="Email:" placeholder="ane@eraiki.com" required />
    <Button>Continue</Button>
  </div>
</EraikiProvider>
```
- Theme: `<EraikiProvider theme="dark">` sets `data-theme="dark"` on `<html>`; omit `theme` to follow the OS.
- Do NOT also load the vanilla `eraiki.js` runtime — the React components manage their own state (open, checked, selected) and the runtime would toggle classes twice.

## Components (props, not classes)
- Actions: Button / ButtonGroup, Pill / PillGroup
- Forms: TextField, TextArea, PasswordField, SearchField, Dropdown, DropdownInput, DropdownMenu, Checkbox / CheckboxGroup, RadioGroup, Switch, DateField, DateRangeField, Calendar, PinCode, FileDrop
- Navigation: Tabs (desktop), MobileTabs, Breadcrumb, Pagination
- Feedback: Banner, Tooltip
- Data display: Badge, Label, Avatar / AvatarGroup, Rating, Image, CellsRow + PlainCell / LinkableCell / FeaturedCell (tables)
- Layout: TextGroup (eyebrow · title · body · action — the brick of marketing sections), Accordion, Divider, Placeholder
- Commerce: ProductCard · Foundations: EraikiProvider, Icon
- Sections (full-width page blocks): Hero001, Hero002, Explanation001–006, ValuesFeatures001–004, Marquee001, Contact001

 Each has a `.d.ts` (exact props) and `.prompt.md` (when to use / when not). Key conventions:
- Labels are uppercase by design and end with a colon: `label="Email:"`.
- `Button variant`: `primary` (one per view, main action) · `secondary` · `tertiary` (text only). `size`: `medium` (40px) · `small` (32px). Icons via `iconLeft` / `iconRight` / `icon`.
- Tables: stack `CellsRow`s; first row of `FeaturedCell`s as the header; `kind="amount"` right-aligns numbers.
- Semantic kinds everywhere: `info` · `success` · `alert` · `error` (Banner `kind`, Label `kind`, Badge `color`).
- Icons: `<Icon name="search" />` — names listed in `IconName` (check, chevronDown, plus, trash, info, heart, close, user…). They inherit `currentColor`.

## Building pages from sections
A landing page is a vertical stack of sections. Put them directly inside `EraikiProvider`, one after another — no wrapper, margins or gaps between them (each section carries its own padding and background).

```jsx
const { EraikiProvider, Hero001, ValuesFeatures001, Explanation002, Marquee001, Contact001 } = window.Eraiki;

<EraikiProvider>
  <Hero001 label="New collection" title="Designed to last a lifetime" primaryAction="Explore">Handmade furniture from local oak.</Hero001>
  <ValuesFeatures001 label="Why us" title="Built with confidence" primaryAction="Get started"
    items={[{ icon: 'calendar', title: 'Fixed timeline', text: '…' }, { icon: 'check', title: 'Fixed price', text: '…' }]}>Intro copy.</ValuesFeatures001>
  <Explanation002 label="Materials" title="Natural materials" primaryAction="View materials" image="https://…/photo.jpg">Body copy.</Explanation002>
  <Explanation002 order="image-text" label="Craft" title="Cut by hand" primaryAction="Meet the team">Body copy.</Explanation002>
  <Marquee001 title="Trusted by" />
  <Contact001 label="Contact" title="Let's talk" submitLabel="Send">We reply within two days.</Contact001>
</EraikiProvider>
```
- Content goes in props, never in custom markup: `label` (eyebrow), `title`, children (body copy), `primaryAction` / `secondaryAction` (button labels, + `onPrimaryAction` / `onSecondaryAction`), and `items` arrays for lists/cards.
- Typical order: one hero first (Hero001 or Hero002) → values/features → explanations (alternate `order="text-image"` / `"image-text"` for rhythm) → marquee (social proof) → Contact001 last.
- Images: `image` / `images` / `background` / `logos` take URLs. Every section ships with built-in sample images (also exposed as `sectionImages`), so omit them for a quick mock and pass real URLs for real content.
- Sections reflow to a single column at ≤ 1024px viewport width (real media query) — design desktop at 1440px wide and mobile at 390px.
- Use only one hero per page and at most one primary action per section.

## Your own layout glue — tokens and type classes
Use `var(--…)` tokens in inline styles; never hard-code hex values, px font sizes or font families.
- Spacing: `--spacing-zero, -xxs, -xs, -s, -m, -l, -xl, -xxl, -3xl … -6xl`
- Radius: `--radius-standard`, `--radius-circle`
- Text color: `--color-fill-plain-text-standard-l` (primary), `-standard-m` (secondary), `-standard-s` (muted), `--color-fill-plain-text-accent`, `--color-fill-plain-text-oncolor`
- Surfaces: `--color-fill-plain-surface-base` (page), `-standard-s` / `-m` / `-l` / `-xl` (neutral fills), `--color-fill-plain-surface-accent`, `--color-fill-plain-surface-complementary`
- Lines: `--color-stroke-plain-shape-standard-s` / `-m` / `-l`; shadows: `--elevation-small`, `--elevation-medium`
- Typography classes (apply to any element): `ek-display-m`, `ek-heading-xl` / `-l` / `-m` / `-s`, `ek-body-l` / `-m`, `ek-label-l` / `-m` (uppercase), `ek-detail-m` / `-s`

## Where the truth lives
`styles.css` → `_ds_bundle.css` (the full token definitions and every `.ek-*` rule) and `fonts/fonts.css`. Read it before styling anything custom; read each component's `.prompt.md` before using it.
