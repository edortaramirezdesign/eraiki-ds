// Connected section story helpers — section markup + docs come from the repo's single
// source (js/sections.js: ERAIKI_SECTIONS data + ERAIKI_SECTIONS_BUILD live markup), the
// same source the portal uses, so the two never drift.
//
// The Documentation page mirrors the Figma doc frame of each section version:
//   Overview (Desktop + Mobile) → Options (one preview per kind) → Description
//   (context, keywords, when to use / when not to use).
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

// Description block as Markdown — same order and labels as the Figma doc frame and the
// component Docs pages: context, keywords, when to use, when not to use.
export function sectionDoc(slug) {
  const v = BY_VER[slug];
  if (!v) return '';
  const out = [];
  if (v.description) out.push(v.description);
  if (v.keywords && v.keywords.length) out.push('', '### Keywords', '', v.keywords.join(' · '));
  if (v.whenToUse && v.whenToUse.length) out.push('', '### When to use', '', ...v.whenToUse.map((x) => `- ${x}`));
  if (v.whenNotToUse && v.whenNotToUse.length) out.push('', '### When not to use', '', ...v.whenNotToUse.map((x) => `- ${x}`));
  return out.join('\n');
}

// Framed preview box shared by the Options and Mobile previews (same look as a Canvas).
const frame = {
  border: '1px solid rgba(38, 85, 115, 0.15)',
  borderRadius: 4,
  boxShadow: 'rgba(0, 0, 0, 0.1) 0 1px 3px 0',
  margin: '16px 0 40px',
  overflow: 'hidden',
  background: 'var(--color-fill-plain-surface-base, #fff)',
};

// Live preview of one option (kind) of a section version, rendered inline.
export const SectionPreview = ({ slug, kind }) => React.createElement('div', {
  className: 'sb-unstyled',
  style: frame,
  dangerouslySetInnerHTML: { __html: sectionRender(slug, kind) },
});

// Mobile preview: the Playground story in a 375px-wide iframe, so the section's own
// viewport media queries kick in exactly as on a phone. The iframe grows to its content.
export const SectionMobile = ({ storyId, width = 375 }) => {
  const fit = (e) => {
    try {
      const doc = e.currentTarget.contentDocument;
      const resize = () => { e.currentTarget && (e.currentTarget.style.height = `${doc.documentElement.scrollHeight}px`); };
      resize();
      setTimeout(resize, 300);
    } catch (_) { /* cross-origin: keep the default height */ }
  };
  return React.createElement('div', {
    className: 'sb-unstyled',
    style: { ...frame, display: 'flex', justifyContent: 'center', padding: 24, background: 'var(--color-fill-plain-surface-standard-s, #f6f6f6)' },
  }, React.createElement('iframe', {
    title: 'Mobile preview',
    src: `iframe.html?id=${storyId}&viewMode=story`,
    onLoad: fit,
    style: { width, height: 800, border: 0, display: 'block', background: '#fff' },
  }));
};
