// Eraiki DS — Border width documentation, single source of truth.
// The portal (js/app.js) and the Storybook story both read from here, so the stroke
// set and its descriptions never drift. The actual value is read live from tokens.css
// (not stored here), so the token definition stays the source.
// BORDER_DOC: one row per stroke width [name, token].
(function () {
  const BORDER_DOC = [
    ['Default', '--border-width-default'],
  ];
  const BORDER_DESC = 'A single default stroke width of 1.5px, used for borders, dividers and input outlines across the system.';
  const BORDER_SHORT_MD = 'A single default stroke width (Strokes / Sizes / M).';

  window.ERAIKI_BORDER = { BORDER_DOC, BORDER_DESC, BORDER_SHORT_MD };
})();
