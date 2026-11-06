// Generates react/docs/<Name>.md from the DS's single written-docs source
// (js/components-data.js), adding the React-side category. Re-run after editing
// design docs or adding a React component:  node react/scripts/gen-docs.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import vm from 'node:vm';

const root = new URL('../../', import.meta.url);
const ctx = { window: {} };
vm.runInNewContext(readFileSync(new URL('js/components-data.js', root), 'utf8'), ctx);
const BY_SLUG = Object.fromEntries(ctx.window.ERAIKI_COMPONENTS.map((c) => [c.slug, c]));
// Sections: written docs live per version in js/sections.js (ERAIKI_SECTIONS).
vm.runInNewContext(readFileSync(new URL('js/sections.js', root), 'utf8'), ctx);
const SECTION_BY_SLUG = {};
for (const sec of ctx.window.ERAIKI_SECTIONS) for (const v of sec.versions) SECTION_BY_SLUG[v.slug] = v;

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
  MobileTabs: ['tabs-group-mobile', 'Navigation'],
  Breadcrumb: ['breadcrumb', 'Navigation'],
  Pagination: ['pagination', 'Navigation'],
  Accordion: ['accordion', 'Layout'],
  Divider: ['divider', 'Layout'],
  Placeholder: ['placeholder', 'Layout'],
  TextGroup: ['text-group', 'Layout'],
  Image: ['image', 'Data display'],
  Rating: ['rating', 'Data display'],
  PlainCell: ['cell-plain', 'Data display'],
  LinkableCell: ['cell-linkable', 'Data display'],
  FeaturedCell: ['cell-featured', 'Data display'],
  CellsRow: ['cells-row', 'Data display'],
  DropdownInput: ['dropdown-input', 'Forms'],
  DropdownMenu: ['dropdown-options', 'Forms'],
  SearchField: ['search-field', 'Forms'],
  PasswordField: ['input-field-password', 'Forms'],
  TextArea: ['input-field-text-area', 'Forms'],
  DateField: ['input-field-date-selector', 'Forms'],
  DateRangeField: ['input-field-date-range', 'Forms'],
  Calendar: ['calendar', 'Forms'],
  PinCode: ['pin-code', 'Forms'],
  RadioGroup: ['radio-buttons-group', 'Forms'],
  FileDrop: ['file-drop', 'Forms'],
};

// React section -> js/sections.js version slug (category "Sections").
const SECTIONS = {
  HeroImageSlider: 'hero-image-slider',
  HeroSplitColumns: 'hero-split-columns',
  HeroMarqueeGallery: 'hero-marquee-gallery',
  ExplanationBannerCard: 'explanation-banner-card',
  ExplanationSplitMedia: 'explanation-split-media',
  ExplanationTwinCards: 'explanation-twin-cards',
  ExplanationTriplePanel: 'explanation-triple-panel',
  ExplanationImageMarquee: 'explanation-image-marquee',
  ExplanationDarkCard: 'explanation-dark-card',
  ValuesFeaturesIconGrid: 'values-icon-grid',
  ValuesFeaturesHighlightList: 'values-highlight-list',
  ValuesFeaturesNumberedList: 'values-numbered-list',
  ValuesFeaturesStaggeredCards: 'values-staggered-cards',
  MarqueeLogoStrip: 'marquee-logo-strip',
  ContactSplitForm: 'contact-split-form',
};

const EXTRA = {
  EraikiProvider: 'App root for Eraiki. Renders the `.ek` root class (the body font family that inputs and plain text inherit) and applies the light/dark theme. Wrap every screen in it exactly once.',
  ContactSplitForm: 'Contact Split Form is a two-column contact block: the message (eyebrow, heading and a short paragraph) on one side and a simple form on the other — labelled text fields, a message text area and a single primary submit button. On narrow screens the columns stack, message first. Use it at the end of a page to collect enquiries; keep the form short.',
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
  MobileTabs: 'tabs → `items`; Selected → `value` / `defaultValue`; Open → `defaultOpen`.',
  Breadcrumb: 'Levels → `items` (each `{label, href}`; the last one is the current page).',
  Pagination: 'Pages → `pages`; selected → `page` / `defaultPage`; Previous / Next → `arrows`; Ellipsis appears automatically when `pages` > `visible`.',
  Accordion: 'Fragments → `items` (each `{title, content}`); Open → `defaultOpen` (index). Hover / Pressed are real interaction states.',
  Divider: 'Direction → `direction`; Level → `level`.',
  Placeholder: 'Text → children; size → `width` / `height`.',
  TextGroup: 'Kind → `kind`; Icon → `icon`; Label → `label`; title → `title`; Text → children; Button → `action`; container color → `background`.',
  Image: 'Orientation → `orientation`; Aspect ratio → `ratio` ("golden" = Golden ratio).',
  Rating: 'Stars → `value` / `defaultValue`; hover preview is built in.',
  PlainCell: 'Kind → `kind`; State Disabled → `disabled`; content → children.',
  LinkableCell: 'Kind → `kind`; State Selected → `selected`, Disabled → `disabled`; content → children.',
  FeaturedCell: 'Kind Text → children; Empty → no children.',
  CellsRow: 'Kind → the cell components you put inside; Items → how many you put inside.',
  DropdownInput: 'Label → `label`; Left icon → `icon`; Badge → `badge`; Tooltip → `tooltip`; Detail text → `helperText`; State Error → `error`, Disabled → `disabled`, Active → open menu; Mandatory → `required`.',
  DropdownMenu: 'Kind → `kind` (single / multi); Left icon / Badge / Divider → per-option `icon` / `badge` / `divider`; Button → `buttonLabel`; State Disabled → per-option `disabled`.',
  SearchField: 'Button → `button`; State Error → `error`, Disabled → `disabled`; Filled → `defaultValue`.',
  PasswordField: 'Label → `label`; Detail text → `helperText`; State Error → `error`, Disabled → `disabled`; Filled → `defaultValue`. The eye toggle is built in.',
  TextArea: 'Label → `label`; Detail text → `helperText`; Word count → `showCount` (+ `maxLength`); State Error → `error`, Disabled → `disabled`; Mandatory → `required`.',
  DateField: 'Label → `label`; Detail text → `helperText`; Tooltip → `tooltip`; State Error → `error`, Disabled → `disabled`; Mandatory → `required`; Filled → `defaultValue` ({day, month, year}).',
  DateRangeField: 'Labels → `startLabel` / `endLabel`; Filled → `defaultStart` / `defaultEnd`; other properties as DateField.',
  Calendar: 'Mode → `mode`; Month selector → `monthSelector`; Year selector → `yearSelector`; Button → `buttonLabel`; selection → `defaultSelected` / `defaultRange`.',
  PinCode: 'cells → `length`; State Error → `error`, Disabled → `disabled`; Filled → `defaultValue`.',
  RadioGroup: 'Label → `label`; options → `options`; Selected → `value` / `defaultValue`; State Disabled → `disabled` (group) or per-option `disabled`.',
  HeroImageSlider: 'Eyebrow → `label`; heading → `title`; paragraph → children; button → `primaryAction`; arrows → `showNav` (+ `onPrevious` / `onNext`); photo → `image`.',
  HeroSplitColumns: 'Eyebrow → `label`; heading → `title`; paragraph → children; button → `primaryAction`; photo → `image`.',
  HeroMarqueeGallery: 'Intro → `label` / `title` / children / `primaryAction` / `secondaryAction`; progress tabs → `tabs` (`{label, images}`); active tab → `defaultActive` / `active`; fill time → `interval` (s); rotation → `autoAdvance`.',
  ExplanationBannerCard: 'Text group card → `label` / `title` / children / `primaryAction`; background photo → `image`.',
  ExplanationSplitMedia: 'Text + image / Image + text → `order`; text → `label` / `title` / children; buttons → `primaryAction` / `secondaryAction`; photo → `image`.',
  ExplanationTwinCards: 'Text + image / Image + text → `order`; text card → `label` / `title` / children / `primaryAction` / `secondaryAction`; image card → `image`.',
  ExplanationTriplePanel: 'Header → `label` / `title`; image panels → `images` (two); text card → `cardLabel` / `cardTitle` / children / `primaryAction`.',
  ExplanationImageMarquee: 'Intro → `label` / `title` / children; scrolling image row → `images`.',
  ExplanationDarkCard: 'Text → `label` / `title` / children / `primaryAction`; card image → `image`; full-bleed backdrop → `background`.',
  ValuesFeaturesIconGrid: 'Intro → `label` / `title` / children / `primaryAction` / `secondaryAction`; feature cards → `items` (`{icon, title, text}`).',
  ValuesFeaturesHighlightList: 'Heading → `label` / `title`; feature list → `items` (`{icon, title, text}`); open item → `defaultActive` / `active`; photo → `image`.',
  ValuesFeaturesNumberedList: 'Heading → `label` / `title`; numbered rows → `items` (`{title, text}`, numbers are automatic); photo → `image`.',
  ValuesFeaturesStaggeredCards: 'Intro → `label` / `title` / children / `primaryAction` / `secondaryAction`; staggered cards → `items` (`{title, text, illustration}`).',
  MarqueeLogoStrip: 'Intro → `label` / `title` / children / `primaryAction`; logo strip → `logos` (image URLs).',
  ContactSplitForm: 'Text + Form / Form + Text → `order`; message → `label` / `title` / children; fields → `fields` (`{label, placeholder, type, multiline}`); button → `submitLabel` (+ `onSubmit`).',
  FileDrop: 'State Uploading → `status="uploading"` + `progress`; Upload failed → `status="error"`; Dragging is live on drag-over; Uploaded files → `files`.',
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
for (const [name, slug] of Object.entries(SECTIONS)) {
  const v = SECTION_BY_SLUG[slug];
  if (!v) throw new Error(`no section ${slug}`);
  const out = ['---', 'category: Sections'];
  if (v.keywords?.length) out.push(`keywords: [${v.keywords.map((k) => JSON.stringify(k)).join(', ')}]`);
  out.push('---', '');
  if (v.short) out.push(v.short, '');
  out.push(v.description || EXTRA[name]);
  if (v.frameDesktop || v.frameMobile) out.push('', '## Layout', `- Desktop (> 1024px): ${v.frameDesktop}`, `- Mobile (≤ 1024px): ${v.frameMobile}`);
  if (v.options?.length) out.push('', '## Options', ...v.options.map((o) => `- ${o.name} (\`order="${o.kind}"\`): ${o.desc}`));
  if (v.whenToUse?.length) out.push('', '## When to use', ...v.whenToUse.map((x) => `- ${x}`));
  if (v.whenNotToUse?.length) out.push('', '## When not to use', ...v.whenNotToUse.map((x) => `- ${x}`));
  out.push('', '## Design properties → React props', PROPS_MAP[name]);
  out.push('', 'Sections are full-width page blocks: stack them directly inside `EraikiProvider`, one after another, with no extra wrapper or margins. Images default to built-in samples (`sectionImages`); pass your own URLs for real content.');
  writeFileSync(new URL(`docs/${name}.md`, new URL('../', import.meta.url)), out.join('\n') + '\n');
}
console.log(`  docs: ${Object.keys(MAP).length + Object.keys(SECTIONS).length} files written`);
