// Eraiki DS — Spacing documentation, single source of truth.
// The portal (js/app.js) and the Storybook stories both read from here, so the
// scale never drifts between the two.
// SPACING_DOC: one row per step [name, token, desktop px, mobile px]. The largest
// steps (3XL–6XL) shrink on mobile; everything up to XXL is identical on both.
(function () {
  const SPACING_DOC = [
    ['XXS', '--spacing-xxs', 4, 4],
    ['XS', '--spacing-xs', 8, 8],
    ['S', '--spacing-s', 12, 12],
    ['M', '--spacing-m', 16, 16],
    ['L', '--spacing-l', 24, 24],
    ['XL', '--spacing-xl', 32, 32],
    ['2XL', '--spacing-xxl', 40, 40],
    ['3XL', '--spacing-3xl', 64, 48],
    ['4XL', '--spacing-4xl', 80, 52],
    ['5XL', '--spacing-5xl', 120, 64],
    ['6XL', '--spacing-6xl', 200, 80],
  ];
  const SPACING_SHORT_MD = 'A T-shirt spacing scale on a mobile/desktop pair; the largest steps (3XL–6XL) shrink on mobile.';

  window.ERAIKI_SPACING = { SPACING_DOC, SPACING_SHORT_MD };
})();
