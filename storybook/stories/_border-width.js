// Bridge: expose the shared border-width LOGIC (strokes + descriptions) from the
// repo's single source (js/border-width-doc.js) as ESM, so the Storybook story reads
// the same definition the portal does — no copy, no drift.
import '../../js/border-width-doc.js'; // classic script → sets window.ERAIKI_BORDER

const EK = window.ERAIKI_BORDER;
export const BORDER_DOC = EK.BORDER_DOC;
export const BORDER_DESC = EK.BORDER_DESC;
