// Eraiki DS — Icons as a STORY (rendered in the Canvas): the full icon catalogue,
// grouped by category. Same shared source as the portal (js/icons-doc.js via
// _icons.js): the categories and icon names; the SVG files are the repo's own
// (served at /assets), and the size / stroke read live from tokens.css.
import { ICON_DOC } from './_icons.js';

const ink = 'var(--color-fill-plain-text-standard-l)';
const muted = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 55%, transparent)';
const hair = 'color-mix(in srgb, var(--color-fill-plain-text-standard-l) 14%, transparent)';

const val = (tok) => getComputedStyle(document.documentElement).getPropertyValue(tok).trim();
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const cell = (num, ic) => {
  const file = 'assets/icons/' + encodeURIComponent(num + '-' + ic) + '.svg';
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:12px 6px">
    <span style="display:grid;place-items:center;width:40px;height:40px;border:1.5px solid ${hair};border-radius:6px">
      <img src="${file}" alt="" loading="lazy" style="width:var(--icon-size,20px);height:var(--icon-size,20px)">
    </span>
    <span style="font:400 11px/1.3 Inter,sans-serif;color:${muted};text-align:center;word-break:break-word">${esc(ic)}</span>
  </div>`;
};

const category = ([num, name, icons]) => `
  <section style="margin-bottom:40px">
    <h3 style="margin:0 0 16px;font:600 15px/1.3 Inter,sans-serif;color:${ink}">${esc(num)}. ${esc(name)}</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(92px,1fr));gap:6px">
      ${icons.map((ic) => cell(num, ic)).join('')}
    </div>
  </section>`;

export default {
  title: 'Foundations/Icons',
  parameters: { layout: 'fullscreen' },
};

export const Overview = {
  render: () => {
    const total = ICON_DOC.reduce((n, c) => n + c[2].length, 0);
    const size = val('--icon-size') || '20px';
    const stroke = val('--icon-stroke') || '1.5px';
    return `<div style="padding:28px 24px">
      <p style="margin:0 0 28px;max-width:72ch;font:400 14px/1.6 Inter,sans-serif;color:${muted}">A ${total.toLocaleString()}-icon set at ${size} with a ${stroke} stroke, grouped into ${ICON_DOC.length} categories (including a country-flag set).</p>
      ${ICON_DOC.map(category).join('')}
    </div>`;
  },
};
