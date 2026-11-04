// Eraiki DS — Border width documentation, single source of truth.
// The portal (js/app.js) and the Storybook story both read from here, so the stroke
// set and its descriptions never drift. The actual value is read live from tokens.css
// (not stored here), so the token definition stays the source.
// BORDER_DOC: one row per stroke width [name, token].
(function () {
  const BORDER_DOC = [
    ['S', '--stroke-size-s'],
    ['Default', '--border-width-default'],
  ];
  const BORDER_DESC = 'Two stroke widths: S (1px) for the finest hairlines, and the default 1.5px used for borders, dividers and input outlines across the system.';
  const BORDER_SHORT_MD = 'Two stroke widths: S (1px) and the default (Strokes / Sizes / M, 1.5px).';

  window.ERAIKI_BORDER = { BORDER_DOC, BORDER_DESC, BORDER_SHORT_MD };
})();
