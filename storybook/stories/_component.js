// Connected component story helpers — everything comes from the repo's single sources,
// so Storybook never duplicates or drifts from the portal:
//  - docMarkdown : written documentation from js/components-data.js (the Docs page)
//  - playground* : prop-driven live emulator from js/playgrounds.js (the Playground)
import { PLAYGROUNDS, COMPONENTS } from './_previews.js';

// ---- Docs page content: assemble each component's written documentation as Markdown. ----
const BY_SLUG = {};
COMPONENTS.forEach((c) => { BY_SLUG[c.slug] = c; });

export function docMarkdown(slug) {
  const c = BY_SLUG[slug];
  if (!c) return '';
  const out = [];
  if (c.short) out.push(c.short);
  if (c.context) out.push('', c.context);
  if (c.whenToUse && c.whenToUse.length) out.push('', '### When to use', ...c.whenToUse.map((x) => `- ${x}`));
  if (c.whenNotToUse && c.whenNotToUse.length) out.push('', '### When not to use', ...c.whenNotToUse.map((x) => `- ${x}`));
  if (c.keywords && c.keywords.length) out.push('', '### Keywords', '', c.keywords.join(' · '));
  return out.join('\n');
}

// ---- Connected Playground: real prop knobs driven by the portal's own prop-based
// emulator (window.ERAIKI_PLAYGROUNDS). Each prop (enum -> select, bool -> boolean) maps
// to an arg; the live markup comes from the portal's render(state). Two components are
// `custom` (dependent controls) — we flatten their controls (including those revealed by
// toggling each bool) and rebuild state via their own onChange. ----
function controlsFor(slug) {
  const pg = PLAYGROUNDS[slug];
  if (!pg) return { pg: null, controls: [] };
  if (!pg.custom) return { pg, controls: pg.props || [] };
  const map = new Map();
  const add = (st) => pg.controls(st).forEach((c) => { if (!map.has(c.name)) map.set(c.name, c); });
  add(pg.state());
  pg.controls(pg.state()).filter((c) => c.type === 'bool').forEach((c) => {
    const st = pg.state(); pg.onChange(st, c.name, true); add(st);
  });
  return { pg, controls: [...map.values()] };
}

export function playgroundArgTypes(slug) {
  const { controls } = controlsFor(slug);
  const at = {};
  for (const c of controls) {
    at[c.name] = c.type === 'bool'
      ? { name: c.name, control: 'boolean' }
      : { name: c.name, options: c.options, control: { type: 'select' } };
  }
  return at;
}

export function playgroundArgs(slug) {
  const { controls } = controlsFor(slug);
  const args = {};
  for (const c of controls) args[c.name] = c.value;
  return args;
}

export function playgroundRender(slug, args) {
  const pg = PLAYGROUNDS[slug];
  if (!pg) return '';
  let html;
  if (pg.custom) {
    const st = pg.state();
    Object.keys(args || {}).forEach((k) => pg.onChange(st, k, args[k]));
    html = pg.render(st);
  } else {
    html = pg.render(args || {}); // args are keyed by prop name = the render's state shape
  }
  return `<div style="padding:28px 24px;font-family:var(--font-family-body);display:flex;flex-wrap:wrap;gap:28px;align-items:flex-start">${html}</div>`;
}
