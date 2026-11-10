// Connected section story helpers — section markup + docs come from the repo's single
// source (js/sections.js: ERAIKI_SECTIONS data + ERAIKI_SECTIONS_BUILD live markup), the
// same source the portal uses, so the two never drift.
import React from 'react';
import { SECTIONS, SECTIONS_BUILD } from './_previews.js';

// Written docs can live on the version or, when the family has a single shared write-up
// (e.g. Contact), on the section family — the version's own fields win.
const DOC_FIELDS = ['short', 'description', 'keywords', 'whenToUse', 'whenNotToUse'];
const BY_VER = {};
SECTIONS.forEach((sec) => (sec.versions || []).forEach((v) => {
  const merged = { ...v, sectionName: sec.name, sectionDesc: sec.desc };
  DOC_FIELDS.forEach((k) => { if (merged[k] == null && sec[k] != null) merged[k] = sec[k]; });
  if (merged.short == null && sec.desc) merged.short = sec.desc;
  BY_VER[v.slug] = merged;
}));

// Widest a section renders in Storybook; wider viewports centre it.
const SECTION_MAX_WIDTH = 1920;

// Live markup of a built section version (the portal's own builder). `kind` picks one of
// the version's options (e.g. 'text-form' / 'form-text'); defaults to its overview kind.
export function sectionRender(slug, kind) {
  const build = SECTIONS_BUILD[slug];
  if (!build) return '<p style="padding:24px;font-family:var(--font-family-body)">No live build for this version.</p>';
  const v = BY_VER[slug] || {};
  return `<div style="max-width:${SECTION_MAX_WIDTH}px;margin:0 auto">${build(kind || v.overviewKind)}</div>`;
}

// One written field of a version (with the family fallback above), as plain text.
export function sectionField(slug, field) {
  const v = BY_VER[slug];
  return (v && v[field]) || '';
}

// The version's layout options (e.g. Text + image / Image + text), as documented in Figma.
// Empty for versions with a single layout.
export function sectionOptions(slug) {
  const v = BY_VER[slug];
  return (v && v.options) || [];
}

// Storybook control for a version with options: an "Option" radio that re-renders the
// section with that kind. Versions without options get no controls.
export function sectionControls(slug) {
  const opts = sectionOptions(slug);
  if (!opts.length) return { parameters: { controls: { disable: true } } };
  const v = BY_VER[slug] || {};
  return {
    args: { option: v.overviewKind || opts[0].kind },
    argTypes: {
      option: {
        name: 'Option',
        description: opts.map((o) => `**${o.name}** — ${o.desc}`).join('<br>'),
        options: opts.map((o) => o.kind),
        control: { type: 'radio', labels: Object.fromEntries(opts.map((o) => [o.kind, o.name])) },
      },
    },
  };
}

// Written docs as Markdown, shown below the live section — same order and labels as the
// component Docs pages. part 'short' = the one-line summary under the preview; part
// 'body' = context, when to use, when not to use, keywords (last). No part = everything.
export function sectionDoc(slug, part) {
  const v = BY_VER[slug];
  if (!v) return '';
  const out = [];
  if (part !== 'body' && v.short) out.push(v.short);
  if (part === 'short') return out.join('\n');
  if (v.description) out.push('', v.description);
  if (v.whenToUse && v.whenToUse.length) out.push('', '### When to use', '', ...v.whenToUse.map((x) => `- ${x}`));
  if (v.whenNotToUse && v.whenNotToUse.length) out.push('', '### When not to use', '', ...v.whenNotToUse.map((x) => `- ${x}`));
  if (v.keywords && v.keywords.length) out.push('', '### Keywords', '', v.keywords.join(' · '));
  return out.join('\n').replace(/^\n+/, '');
}

// Framed live preview of one option (kind), same look as a docs Canvas.
const frame = {
  border: '1px solid rgba(38, 85, 115, 0.15)',
  borderRadius: 4,
  boxShadow: 'rgba(0, 0, 0, 0.1) 0 1px 3px 0',
  margin: '16px 0 40px',
  overflow: 'hidden',
  background: 'var(--color-fill-plain-surface-base, #fff)',
};
export const SectionPreview = ({ slug, kind }) => React.createElement('div', {
  className: 'sb-unstyled',
  style: frame,
  dangerouslySetInnerHTML: { __html: sectionRender(slug, kind) },
});

// Options block for the Documentation page: one heading, description and live preview
// per option. Renders nothing for versions with a single layout.
export const SectionOptions = ({ slug }) => {
  const opts = sectionOptions(slug);
  if (!opts.length) return null;
  const h = React.createElement;
  return h(React.Fragment, null,
    h('h2', null, 'Options'),
    ...opts.map((o) => h(React.Fragment, { key: o.kind },
      h('h3', null, o.name),
      h('p', null, o.desc),
      h(SectionPreview, { slug, kind: o.kind }))));
};

// "Show code" / "Copy code" on the section docs: drop the preview-only max-width wrapper
// that sectionRender adds, so the copied markup is just the section itself.
// Storybook may run the transform more than once, so only unwrap when the wrapper is there.
export const sectionSourceTransform = (code) => {
  const m = String(code).trim().match(/^<div style="max-width:\d+px;margin:0 auto">([\s\S]*)<\/div>$/);
  return m ? m[1].trim() : String(code).trim();
};
