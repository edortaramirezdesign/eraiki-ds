// Connected section story helpers — section markup + docs come from the repo's single
// source (js/sections.js: ERAIKI_SECTIONS data + ERAIKI_SECTIONS_BUILD live markup), the
// same source the portal uses, so the two never drift.
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

// Written docs as Markdown, shown below the live section — same order and labels as the
// component Docs pages: short, context, when to use, when not to use, keywords (last).
export function sectionDoc(slug) {
  const v = BY_VER[slug];
  if (!v) return '';
  const out = [];
  if (v.short) out.push(v.short);
  if (v.description) out.push('', v.description);
  if (v.whenToUse && v.whenToUse.length) out.push('', '### When to use', '', ...v.whenToUse.map((x) => `- ${x}`));
  if (v.whenNotToUse && v.whenNotToUse.length) out.push('', '### When not to use', '', ...v.whenNotToUse.map((x) => `- ${x}`));
  if (v.keywords && v.keywords.length) out.push('', '### Keywords', '', v.keywords.join(' · '));
  return out.join('\n');
}
