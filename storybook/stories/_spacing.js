// Bridge: expose the shared spacing LOGIC (scale + descriptions) from the repo's
// single source (js/spacing-doc.js) as ESM, so the Storybook story reads the same
// definition the portal does — no copy, no drift.
import '../../js/spacing-doc.js'; // classic script → sets window.ERAIKI_SPACING

const EK = window.ERAIKI_SPACING;
export const SPACING_DOC = EK.SPACING_DOC;
export const SPACING_SHORT_MD = EK.SPACING_SHORT_MD;
