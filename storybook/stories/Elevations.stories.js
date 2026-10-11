// Eraiki DS — Elevations as a STORY (rendered in the Canvas): the shadows shown on a
// real lifted surface. Same shared LOGIC as the portal (js/elevations-doc.js via
// _elevations.js): the shadow set + description (conceptualization); the actual shadow
// value is read live from tokens.css (technical definition), so nothing is copied.
import { ELEVATION_DOC, ELEVATION_DESC } from './_elevations.js';

const ink = 'var(--color-fill-plain-text-standard-l)';
const muted = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 55%, transparent)';
const paper = 'var(--color-fill-plain-surface-base)';
const mono = 'ui-monospace,SFMono-Regular,Menlo,monospace';

const val = (tok) => getComputedStyle(document.documentElement).getPropertyValue(tok).trim() || '—';

const card = ([name, tok]) => `
  <div style="display:flex;flex-direction:column;gap:14px">
    <div style="height:104px;border-radius:8px;background:${paper};box-shadow:var(${tok})"></div>
    <div style="display:flex;flex-direction:column;gap:4px">
      <span style="font:600 14px/1.4 Inter,sans-serif;color:${ink}">${name}</span>
      <span style="font:400 12px/1.4 ${mono};color:${muted}">${tok}</span>
      <span style="font:400 11px/1.5 ${mono};color:${muted};word-break:break-word">${val(tok)}</span>
    </div>
  </div>`;

export default {
  title: 'Foundations/Elevations',
  parameters: { layout: 'fullscreen' },
};

export const Overview = {
  render: () => `<div style="padding:40px 24px 28px">
    <p style="margin:0 0 32px;max-width:64ch;font:400 14px/1.6 Inter,sans-serif;color:${muted}">${ELEVATION_DESC}</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:36px 28px">
      ${ELEVATION_DOC.map(card).join('')}
    </div>
  </div>`,
};
