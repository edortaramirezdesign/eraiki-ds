// Connected section story helpers — section markup + docs come from the repo's single
// source (js/sections.js: ERAIKI_SECTIONS data + ERAIKI_SECTIONS_BUILD live markup), the
// same source the portal uses, so the two never drift.
import { SECTIONS, SECTIONS_BUILD } from './_previews.js';

const BY_VER = {};
SECTIONS.forEach((sec) => (sec.versions || []).forEach((v) => { BY_VER[v.slug] = { ...v, sectionName: sec.name, sectionDesc: sec.desc }; }));

// Live markup of a built section version (the portal's own builder).
export function sectionRender(slug) {
  const build = SECTIONS_BUILD[slug];
  if (!build) return '<p style="padding:24px;font-family:var(--font-family-body)">No live build for this version.</p>';
  const v = BY_VER[slug] || {};
  return build(v.overviewKind);
}

// Written documentation (from the section/version config) as Markdown for the Docs page.
export function sectionDoc(slug) {
  const v = BY_VER[slug];
  if (!v) return '';
  const out = [];
  if (v.short) out.push(v.short);
  if (v.description) out.push('', v.description);
  if (v.keywords && v.keywords.length) out.push('', '### Keywords', '', v.keywords.join(' · '));
  return out.join('\n');
}
