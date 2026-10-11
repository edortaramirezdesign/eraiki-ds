// Generates react/docs/<Name>.md from the DS's single written-docs source
// (js/components-data.js), adding the React-side category. Re-run after editing
// design docs or adding a React component:  node react/scripts/gen-docs.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import vm from 'node:vm';

const root = new URL('../../', import.meta.url);
const ctx = { window: {} };
vm.runInNewContext(readFileSync(new URL('js/components-data.js', root), 'utf8'), ctx);
const BY_SLUG = Object.fromEntries(ctx.window.ERAIKI_COMPONENTS.map((c) => [c.slug, c]));

// React component -> [DS slug | null, category]
const MAP = {
  EraikiProvider: [null, 'Foundations'],
  Icon: [null, 'Foundations'],
  Button: ['button', 'Actions'],
  ButtonGroup: ['buttons-group', 'Actions'],
  Pill: ['pill', 'Actions'],
  PillGroup: ['pills-group', 'Actions'],
  TextField: ['input-field-text', 'Forms'],
  Dropdown: ['dropdown', 'Forms'],
  Checkbox: ['checkbox', 'Forms'],
  CheckboxGroup: ['checkbox-group', 'Forms'],
  Switch: ['switch', 'Forms'],
  Banner: ['banner', 'Feedback'],
  Tooltip: ['tooltip', 'Feedback'],
  Badge: ['badge', 'Data display'],
  Label: ['label', 'Data display'],
  Avatar: ['avatar', 'Data display'],
  AvatarGroup: ['avatar-group', 'Data display'],
  ProductCard: ['card-product', 'Commerce'],
  Tabs: ['tabs-group-desktop', 'Navigation'],
};

const EXTRA = {
  EraikiProvider: 'App root for Eraiki. Renders the `.ek` root class (the body font family that inputs and plain text inherit) and applies the light/dark theme. Wrap every screen in it exactly once.',
  Icon: 'Eraiki line icon: a 20×20, 1.5px-stroke glyph that inherits `currentColor`. Use `size="s"` for the 16px variant. The available names are listed in the `name` prop.',
};

// How the design-doc (Figma) property names map onto the React props.
const PROPS_MAP = {
  Button: 'Level → `variant`; Size → `size`; Kind → `iconLeft` / `iconRight` / `icon` (icon-only); State Disabled → `disabled` (Hover is the real :hover).',
  Badge: 'Color → `color`; Size Small (dot) → omit children or `dot`; Large → pass the count as children.',
  Avatar: 'Kind Image → `src`; Initials → `initials`; Placeholder → neither; Size → `size`; Badge → `badge` (true = dot, or a count) + `badgeColor`.',
  Banner: 'Kind → `kind`; title → `title`; Description → children; Button → `action`; Closable → `closable`.',
  Checkbox: 'Selected → `checked` / `defaultChecked`; State Error → `error`, Disabled → `disabled`; Label → children.',
  Switch: 'Selected → `checked` / `defaultChecked`; State Disabled → `disabled`; Text → children.',
  TextField: 'Label → `label`; Detail text → `helperText`; State Error → `error` (string = message); Disabled → `disabled`; Mandatory → `required`; Tooltip → `tooltip`; Filled → `value` / `defaultValue`.',
  Dropdown: 'Label → `label`; options → `options`; Filled → `value` / `defaultValue`; Open → `defaultOpen`.',
  Tabs: 'tabs → `items`; Selected → `value` / `defaultValue`.',
  ProductCard: 'Label → `category`; Color options → `swatches`; Discount → `originalPrice` (+ `price` as the sale price).',
  Label: 'Kind → `kind`; Badge (dot) → `dot`.',
  Pill: 'Selected → `selected` / `defaultSelected`; State Disabled → `disabled`.',
  Tooltip: 'Position → `position`; text → `text`; trigger → children (defaults to an info icon).',
};

mkdirSync(new URL('docs/', new URL('../', import.meta.url)), { recursive: true });
for (const [name, [slug, category]] of Object.entries(MAP)) {
  const c = slug && BY_SLUG[slug];
  if (slug && !c) throw new Error(`no doc for slug ${slug}`);
  const out = ['---', `category: ${category}`];
  if (c?.keywords?.length) out.push(`keywords: [${c.keywords.map((k) => JSON.stringify(k)).join(', ')}]`);
  out.push('---', '');
  if (c) {
    out.push(c.short, '', c.context);
    if (c.whenToUse?.length) out.push('', '## When to use', ...c.whenToUse.map((x) => `- ${x}`));
    if (c.whenNotToUse?.length) out.push('', '## When not to use', ...c.whenNotToUse.map((x) => `- ${x}`));
  } else out.push(EXTRA[name]);
  if (PROPS_MAP[name]) out.push('', '## Design properties → React props', PROPS_MAP[name]);
  writeFileSync(new URL(`docs/${name}.md`, new URL('../', import.meta.url)), out.join('\n') + '\n');
}
console.log(`  docs: ${Object.keys(MAP).length} files written`);
