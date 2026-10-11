// Eraiki DS — Border width as a STORY (rendered in the Canvas): the stroke shown at
// its real width. Same shared LOGIC as the portal (js/border-width-doc.js via
// _border-width.js): the stroke set + description (conceptualization); the actual
// value is read live from tokens.css (technical definition), so nothing is copied.
import { BORDER_DOC, BORDER_DESC } from './_border-width.js';

const ink = 'var(--color-fill-plain-text-standard-l)';
const muted = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 55%, transparent)';
const hair = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 12%, transparent)';
const stroke = 'var(--color-stroke-plain-shape-standard-m)';
const mono = 'ui-monospace,SFMono-Regular,Menlo,monospace';

const val = (tok) => getComputedStyle(document.documentElement).getPropertyValue(tok).trim() || '—';

const row = ([name, tok]) => `
  <div style="display:grid;grid-template-columns:110px 190px 1fr;gap:24px;align-items:center;padding:22px 0;border-bottom:1.5px solid ${hair}">
    <span style="font:600 14px/1.4 Inter,sans-serif;color:${ink}">${name}</span>
    <div style="display:flex;flex-direction:column;gap:3px">
      <span style="font:400 12px/1.4 ${mono};color:${muted}">${tok}</span>
      <span style="font:400 12px/1.4 ${mono};color:${muted}">${val(tok)}</span>
    </div>
    <span style="display:block;width:100%;max-width:220px;border-top:var(${tok}) solid ${stroke}"></span>
  </div>`;

export default {
  title: 'Foundations/Border width',
  parameters: { layout: 'fullscreen' },
};

export const Overview = {
  render: () => `<div style="padding:28px 24px">
    <p style="margin:0 0 20px;max-width:64ch;font:400 14px/1.6 Inter,sans-serif;color:${muted}">${BORDER_DESC}</p>
    ${BORDER_DOC.map(row).join('')}
  </div>`,
};
