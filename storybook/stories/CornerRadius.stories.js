// Eraiki DS — Corner radius as a STORY (rendered in the Canvas): the two radii shown
// on a real shape. Same shared LOGIC as the portal (js/corner-radius-doc.js via
// _corner-radius.js): the set of radii + description (conceptualization); the actual
// value is read live from tokens.css (technical definition), so nothing is copied.
import { RADIUS_DOC, RADIUS_DESC } from './_corner-radius.js';

const ink = 'var(--color-fill-plain-text-standard-l)';
const muted = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 55%, transparent)';
const hair = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 12%, transparent)';
const square = 'var(--color-fill-plain-surface-standard-m)';
const mono = 'ui-monospace,SFMono-Regular,Menlo,monospace';

const val = (tok) => getComputedStyle(document.documentElement).getPropertyValue(tok).trim() || '—';

const row = ([name, tok]) => `
  <div style="display:grid;grid-template-columns:110px 180px 1fr;gap:24px;align-items:center;padding:22px 0;border-bottom:1.5px solid ${hair}">
    <span style="font:600 14px/1.4 Inter,sans-serif;color:${ink}">${name}</span>
    <div style="display:flex;flex-direction:column;gap:3px">
      <span style="font:400 12px/1.4 ${mono};color:${muted}">${tok}</span>
      <span style="font:400 12px/1.4 ${mono};color:${muted}">${val(tok)}</span>
    </div>
    <span style="width:72px;height:72px;background:${square};border-radius:var(${tok})"></span>
  </div>`;

export default {
  title: 'Foundations/Corner radius',
  parameters: { layout: 'fullscreen' },
};

export const Overview = {
  render: () => `<div style="padding:28px 24px">
    <p style="margin:0 0 20px;max-width:64ch;font:400 14px/1.6 Inter,sans-serif;color:${muted}">${RADIUS_DESC}</p>
    ${RADIUS_DOC.map(row).join('')}
  </div>`,
};
