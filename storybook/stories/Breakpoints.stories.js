// Eraiki DS — Breakpoints as a STORY (rendered in the Canvas): the mobile/desktop
// ranges. Same shared LOGIC as the portal (js/breakpoints-doc.js via _breakpoints.js):
// the ranges + description (conceptualization); the actual min/max values are read
// live from tokens.css (technical definition), so nothing is copied.
import { BREAKPOINT_DOC, BREAKPOINT_DESC } from './_breakpoints.js';

const ink = 'var(--color-fill-plain-text-standard-l)';
const muted = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 55%, transparent)';
const hair = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 12%, transparent)';
const mono = 'ui-monospace,SFMono-Regular,Menlo,monospace';
const cols = 'grid-template-columns:120px 1fr 1fr';

const val = (tok) => getComputedStyle(document.documentElement).getPropertyValue(tok).trim();

const cell = (v) => `<span style="font:400 13px/1.4 ${mono};color:${v ? ink : muted}">${v || '—'}</span>`;

const row = ([name, min, max]) => `
  <div style="display:grid;${cols};gap:24px;align-items:center;padding:18px 0;border-bottom:1.5px solid ${hair}">
    <span style="font:600 13px/1.4 Inter,sans-serif;color:${ink}">${name}</span>
    ${cell(val(min))}
    ${cell(max ? val(max) : '')}
  </div>`;

const head = `
  <div style="display:grid;${cols};gap:24px;padding:0 0 10px;font:600 12px/1 Inter,sans-serif;color:${muted}">
    <span>Range</span><span>Min</span><span>Max</span>
  </div>`;

export default {
  title: 'Foundations/Breakpoints',
  parameters: { layout: 'fullscreen' },
};

export const Overview = {
  render: () => `<div style="padding:28px 24px">
    <p style="margin:0 0 24px;max-width:64ch;font:400 14px/1.6 Inter,sans-serif;color:${muted}">${BREAKPOINT_DESC}</p>
    ${head}
    ${BREAKPOINT_DOC.map(row).join('')}
  </div>`,
};
