// Eraiki DS — Corner radius documentation, single source of truth.
// The portal (js/app.js) and the Storybook story both read from here, so the set of
// radii and their descriptions never drift between the two. Actual values are read
// live from tokens.css (not stored here), so the token definition stays the source.
// RADIUS_DOC: one row per radius [name, token].
(function () {
  const RADIUS_DOC = [
    ['Zero', '--radius-zero'],
    ['Standard', '--radius-standard'],
    ['M', '--radius-m'],
    ['Circle', '--radius-circle'],
  ];
  const RADIUS_DESC = 'Four radii: zero for square edges, a standard control rounding (4px), M (16px) for large media and panels, and a full radius for circular and pill shapes.';
  const RADIUS_SHORT_MD = 'Four radii: zero, standard (controls), M (large media and panels) and full (circular / pill).';

  window.ERAIKI_RADIUS = { RADIUS_DOC, RADIUS_DESC, RADIUS_SHORT_MD };
})();
