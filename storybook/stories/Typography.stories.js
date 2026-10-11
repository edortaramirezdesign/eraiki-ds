// Eraiki DS — Typography as STORIES (rendered in the Canvas), one per role family.
// Same shared LOGIC as the portal (js/typography-doc.js via _typography.js): the
// family descriptions (conceptualization) and the live samples + sizes/weights/role
// classes (technical definition). The sample is the real DS role class, token-driven.
import { family } from './_typography.js';

const ink = 'var(--color-fill-plain-text-standard-l)';
const muted = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 55%, transparent)';
const hair = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 12%, transparent)';
const mono = 'ui-monospace,SFMono-Regular,Menlo,monospace';

const row = ([label, cls, dFS, dLH, mFS, mLH, w]) => `
  <div style="padding:20px 0;border-bottom:1.5px solid ${hair}">
    <div class="${cls}" style="color:${ink};margin:0 0 12px">Abc 123 — the quick brown fox</div>
    <div style="display:flex;flex-wrap:wrap;gap:18px;align-items:baseline;font:400 11px/1.4 ${mono};color:${muted}">
      <span style="font:600 12px/1.4 Inter,sans-serif;color:${ink};min-width:72px">${label}</span>
      <span>.${cls.replace(/ /g, ' .')}</span>
      <span>Desktop&nbsp;${dFS}/${dLH}</span>
      <span>Mobile&nbsp;${mFS}/${mLH}</span>
      <span>Weight&nbsp;${w}</span>
    </div>
  </div>`;

const section = (name) => ({
  render: () => {
    const sec = family(name);
    return `<div style="padding:28px 24px">
      <p style="margin:0 0 20px;max-width:64ch;font:400 14px/1.6 Inter,sans-serif;color:${muted}">${sec.desc}</p>
      ${sec.rows.map(row).join('')}
    </div>`;
  },
});

export default {
  title: 'Foundations/Typography',
  parameters: { layout: 'fullscreen' },
};

export const Display = section('Display');
export const Headings = section('Headings');
export const Labels = section('Labels');
export const Body = section('Body');
export const Detail = section('Detail');
