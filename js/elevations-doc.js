// Eraiki DS — Elevations documentation, single source of truth.
// The portal (js/app.js) and the Storybook story both read from here, so the set of
// shadows and its description never drift. The actual shadow value is read live from
// tokens.css (not stored here), so the token definition stays the source.
// ELEVATION_DOC: one row per shadow [name, token].
(function () {
  const ELEVATION_DOC = [
    ['Small', '--elevation-small'],
    ['Medium', '--elevation-medium'],
  ];
  const ELEVATION_DESC = 'Two shadows to lift menus, popovers and cards off the surface.';

  window.ERAIKI_ELEVATION = { ELEVATION_DOC, ELEVATION_DESC };
})();
