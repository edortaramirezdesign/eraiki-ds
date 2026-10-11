// Eraiki DS — Colours as STORIES (rendered in the Canvas), one per top-level token group.
// Same shared LOGIC as the portal (js/colors-doc.js via _colors.js): taxonomy + group
// descriptions (conceptualization) and token/value swatches (technical definition).
// The visual is a plain native swatch grid — NOT a copy of the portal's cdoc table.
import { colorItems, sectionDesc } from './_colors.js';

const ink = 'var(--color-fill-plain-text-standard-l)';
const muted = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 55%, transparent)';
const hairline = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 12%, transparent)';

const swatch = (label, value) => `
  <div style="width:132px">
    <div style="height:56px;border-radius:6px;background:${value};border:1px solid ${hairline}"></div>
    <div style="margin-top:8px;font:600 12px/1.3 Inter,sans-serif;color:${ink}">${label}</div>
    <div style="margin-top:2px;font:400 11px/1.35 ui-monospace,SFMono-Regular,Menlo,monospace;color:${muted};word-break:break-all">${value}</div>
  </div>`;

const group = (g) => `
  <section style="margin-bottom:32px">
    <h3 style="margin:0 0 4px;font:700 15px/1.3 Inter,sans-serif;color:${ink}">${g.title}</h3>
    ${g.subtitle ? `<p style="margin:0 0 16px;max-width:64ch;font:400 13px/1.55 Inter,sans-serif;color:${muted}">${g.subtitle}</p>` : ''}
    <div style="display:flex;flex-wrap:wrap;gap:20px">${Object.entries(g.colors).map(([l, v]) => swatch(l, v)).join('')}</div>
  </section>`;

const section = (name) => ({
  render: () => `
    <div style="padding:28px 24px">
      <p style="margin:0 0 28px;max-width:64ch;font:400 14px/1.6 Inter,sans-serif;color:${ink}">${sectionDesc(name)}</p>
      ${colorItems(name).map(group).join('')}
    </div>`,
});

export default {
  title: 'Foundations/Colors',
  parameters: { layout: 'fullscreen' },
};

export const Primitives = section('Primitives');
export const Fill = section('Fill');
export const Stroke = section('Stroke');
export const Semantic = section('Semantic');
