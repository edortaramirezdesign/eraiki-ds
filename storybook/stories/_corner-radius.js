// Bridge: expose the shared corner-radius LOGIC (radii + descriptions) from the
// repo's single source (js/corner-radius-doc.js) as ESM, so the Storybook story
// reads the same definition the portal does — no copy, no drift.
import '../../js/corner-radius-doc.js'; // classic script → sets window.ERAIKI_RADIUS

const EK = window.ERAIKI_RADIUS;
export const RADIUS_DOC = EK.RADIUS_DOC;
export const RADIUS_DESC = EK.RADIUS_DESC;
