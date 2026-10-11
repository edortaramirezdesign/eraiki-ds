// Bridge: expose the shared breakpoints LOGIC (ranges + description) from the repo's
// single source (js/breakpoints-doc.js) as ESM, so the Storybook story reads the same
// definition the portal does — no copy, no drift.
import '../../js/breakpoints-doc.js'; // classic script → sets window.ERAIKI_BREAKPOINTS

const EK = window.ERAIKI_BREAKPOINTS;
export const BREAKPOINT_DOC = EK.BREAKPOINT_DOC;
export const BREAKPOINT_DESC = EK.BREAKPOINT_DESC;
