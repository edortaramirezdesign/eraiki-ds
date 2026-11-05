import { addons } from 'storybook/manager-api';

// Old section links keep working: the numbered versions were renamed to semantic names,
// which changed their ids. Before Storybook reads the URL, rewrite an old id in ?path=
// to its new one, e.g. …/sections-hero-hero-001-documentation--documentation
//                   → …/sections-hero-hero-image-slider-documentation--documentation
const RENAMED = {
  'contact-001': 'contact-split-form',
  'explanation-001': 'explanation-banner-card',
  'explanation-002': 'explanation-split-media',
  'explanation-003': 'explanation-twin-cards',
  'explanation-004': 'explanation-triple-panel',
  'explanation-005': 'explanation-image-marquee',
  'explanation-006': 'explanation-dark-card',
  'hero-001': 'hero-image-slider',
  'hero-002': 'hero-split-columns',
  'marquee-001': 'marquee-logo-strip',
  'values-features-001': 'values-features-icon-grid',
  'values-features-002': 'values-features-highlight-list',
  'values-features-003': 'values-features-numbered-list',
  'values-features-004': 'values-features-staggered-cards',
};
try {
  const url = new URL(window.location.href);
  const path = url.searchParams.get('path') || '';
  if (path.includes('/sections-')) {
    for (const [oldName, newName] of Object.entries(RENAMED)) {
      const next = path.replace(new RegExp(`-${oldName}-(documentation|playground)--`), `-${newName}-$1--`);
      if (next !== path) {
        url.searchParams.set('path', next);
        window.history.replaceState(window.history.state, '', url.toString());
        break;
      }
    }
  }
} catch (_) { /* never block Storybook over a redirect */ }

// Section pages keep their full titles ("<Version> - Documentation" / "<Version> - Playground")
// so ids and URLs stay unique and stable, but the sidebar shows just "<Version>": the
// coloured icon in front (docs page vs story) already tells the two apart.
const SUFFIX = / - (Documentation|Playground)$/;

addons.setConfig({
  sidebar: {
    renderLabel: (item) => (typeof item.name === 'string' ? item.name.replace(SUFFIX, '') : item.name),
  },
});
