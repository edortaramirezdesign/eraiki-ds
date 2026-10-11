// Eraiki DS — Spacing as a STORY (rendered in the Canvas): the T-shirt scale shown
// at its real desktop and mobile sizes. Same shared LOGIC as the portal
// (js/spacing-doc.js via _spacing.js): the scale's values and description, with each
// step drawn from its real token size (technical definition).
import { SPACING_DOC, SPACING_SHORT_MD } from './_spacing.js';

const ink = 'var(--color-fill-plain-text-standard-l)';
const muted = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 55%, transparent)';
const hair = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 12%, transparent)';
const square = 'var(--color-fill-plain-surface-standard-m)';
const mono = 'ui-monospace,SFMono-Regular,Menlo,monospace';
const cols = 'grid-template-columns:56px 150px 1fr 1fr';

const box = (px) => `
  <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-start">
    <span style="width:${px}px;height:${px}px;background:${square};border-radius:2px;flex-shrink:0"></span>
    <span style="font:400 11px/1 ${mono};color:${muted}">${px}px</span>
  </div>`;

const row = ([name, tok, d, m]) => `
  <div style="display:grid;${cols};gap:20px;align-items:start;padding:18px 0;border-bottom:1.5px solid ${hair}">
    <span style="font:600 13px/1.4 Inter,sans-serif;color:${ink}">${name}</span>
    <span style="font:400 12px/1.4 ${mono};color:${muted}">${tok}</span>
    ${box(d)}
    ${box(m)}
  </div>`;

const head = `
  <div style="display:grid;${cols};gap:20px;padding:0 0 10px;font:600 12px/1 Inter,sans-serif;color:${muted}">
    <span>Name</span><span>Token</span><span>Desktop</span><span>Mobile</span>
  </div>`;

export default {
  title: 'Foundations/Spacing',
  parameters: { layout: 'fullscreen' },
};

export const Overview = {
  render: () => `<div style="padding:28px 24px;overflow-x:auto">
    <p style="margin:0 0 24px;max-width:64ch;font:400 14px/1.6 Inter,sans-serif;color:${muted}">${SPACING_SHORT_MD}</p>
    ${head}
    ${SPACING_DOC.map(row).join('')}
  </div>`,
};
