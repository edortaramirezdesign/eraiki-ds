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
Button / ButtonGroup, TextField, Dropdown, Checkbox / CheckboxGroup, Switch, Pill / PillGroup, Tabs, Banner, Tooltip, Badge, Label, Avatar / AvatarGroup, ProductCard, Icon. Each has a `.d.ts` (exact props) and `.prompt.md` (when to use / when not). Key conventions:
- Labels are uppercase by design and end with a colon: `label="Email:"`.
- `Button variant`: `primary` (one per view, main action) · `secondary` · `tertiary` (text only). `size`: `medium` (40px) · `small` (32px). Icons via `iconLeft` / `iconRight` / `icon`.
- Semantic kinds everywhere: `info` · `success` · `alert` · `error` (Banner `kind`, Label `kind`, Badge `color`).
- Icons: `<Icon name="search" />` — names listed in `IconName` (check, chevronDown, plus, trash, info, heart, close, user…). They inherit `currentColor`.

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
