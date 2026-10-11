// Eraiki DS — Breakpoints documentation, single source of truth.
// The portal (js/app.js) and the Storybook story both read from here, so the ranges
// and description never drift. The actual min/max values are read live from tokens.css
// (not stored here), so the token definition stays the source.
// BREAKPOINT_DOC: one row per range [name, min token, max token | null].
(function () {
  const BREAKPOINT_DOC = [
    ['Mobile', '--breakpoint-mobile-min', '--breakpoint-mobile-max'],
    ['Desktop', '--breakpoint-desktop-min', null],
  ];
  const BREAKPOINT_DESC = 'Desktop and mobile ranges derived from the canvas widths.';

  window.ERAIKI_BREAKPOINTS = { BREAKPOINT_DOC, BREAKPOINT_DESC };
})();
