// Eraiki DS — Typography documentation, single source of truth.
// The portal (js/app.js) and the Storybook stories both read from here, so the
// taxonomy, descriptions and sizes never drift between the two.
// TYPE_DOC: one entry per role family { h, desc, rows }, where each row is
//   [size label, DS role class, desktop font-size, desktop line-height,
//    mobile font-size, mobile line-height, weight].
// TYPE_ROLES: the token names behind every role (the technical definition).
(function () {
  const TYPE_DOC = [
    { h: 'Display', desc: 'We will resort to the display text size on very specific occasions, when the text to be displayed is in a page header or as a prominent KPI. We will use it to construct very short sentences or specific figures that are not very long.', rows: [
      ['M', 'ek-display-m', 64, 72, 40, 46, 500],
    ] },
    { h: 'Headings', desc: 'We will use headings for titles that help identify a screen, section, or functionality. While ideally the headings should only be a few words, in smaller sizes we can also construct short sentences.', rows: [
      ['XL', 'ek-heading-xl', 48, 56, 40, 46, 500],
      ['L', 'ek-heading-l', 40, 48, 34, 40, 500],
      ['M', 'ek-heading-m', 32, 40, 28, 32, 500],
      ['S', 'ek-heading-s', 24, 32, 24, 32, 500],
    ] },
    { h: 'Labels', desc: 'Labels are a size we will use both to identify small elements or subsections, as well as for CTA-type elements: buttons, dropdowns, pills… We will avoid constructing sentences; they should consist of just a few words.', rows: [
      ['L', 'ek-label-l', 12, 18, 12, 18, 600],
      ['M', 'ek-label-m', 10, 18, 10, 18, 600],
    ] },
    { h: 'Body', desc: 'We will use Body text sizes when constructing long sentences or paragraphs. By default we will use size M, although size L can be used for impactful statements we want to highlight.', rows: [
      ['L Bold', 'ek-body-l ek-strong', 18, 26, 18, 26, 600],
      ['L Regular', 'ek-body-l', 18, 26, 18, 26, 400],
      ['M Bold', 'ek-body-m ek-strong', 14, 22, 14, 22, 600],
      ['M Regular', 'ek-body-m', 14, 22, 14, 22, 400],
    ] },
    { h: 'Detail', desc: 'We’ll use the Detail text size for short phrases that provide additional information or context.', rows: [
      ['M', 'ek-detail-m', 12, 20, 12, 20, 400],
      ['S', 'ek-detail-s', 8, 16, 8, 16, 400],
    ] },
  ];
  const TYPE_FAMILY_MD = '**Font family (per role)**\n| Role | Family |\n|---|---|\n| Display | Plus Jakarta Sans |\n| Heading | Plus Jakarta Sans |\n| Label | Plus Jakarta Sans |\n| Body | Inter |\n| Detail | Inter |';
  const TYPE_LETTERSPACING_MD = '**Letter spacing**\n| Token | Value |\n|---|---|\n| S | −1.5px |\n| M (default) | 0 |\n| L | 4px |';
  const TYPE_SHORT_MD = 'Two families — **Plus Jakarta Sans** (Display / Heading / Label) and **Inter** (Body / Detail) — on a responsive scale, with per-role weights and letter-spacing tokens.';
  const TYPE_ROLES = [
    ['Display M','--font-size-display-m','--line-height-display-m','--font-weight-display','--font-family-display'],
    ['Heading XL','--font-size-heading-xl','--line-height-heading-xl','--font-weight-heading','--font-family-heading'],
    ['Heading L','--font-size-heading-l','--line-height-heading-l','--font-weight-heading','--font-family-heading'],
    ['Heading M','--font-size-heading-m','--line-height-heading-m','--font-weight-heading','--font-family-heading'],
    ['Heading S','--font-size-heading-s','--line-height-heading-s','--font-weight-heading','--font-family-heading'],
    ['Body L','--font-size-body-l','--line-height-body-l','--font-weight-body','--font-family-body'],
    ['Body M','--font-size-body-m','--line-height-body-m','--font-weight-body','--font-family-body'],
    ['Label L','--font-size-label-l','--line-height-label-l','--font-weight-label','--font-family-label'],
    ['Label M','--font-size-label-m','--line-height-label-m','--font-weight-label','--font-family-label'],
    ['Detail M','--font-size-detail-m','--line-height-detail-m','--font-weight-detail','--font-family-detail'],
    ['Detail S','--font-size-detail-s','--line-height-detail-s','--font-weight-detail','--font-family-detail'],
  ];

  window.ERAIKI_TYPE = { TYPE_DOC, TYPE_FAMILY_MD, TYPE_LETTERSPACING_MD, TYPE_SHORT_MD, TYPE_ROLES };
})();
