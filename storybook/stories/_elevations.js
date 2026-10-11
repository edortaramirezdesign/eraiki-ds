// Bridge: expose the shared elevations LOGIC (shadows + description) from the repo's
// single source (js/elevations-doc.js) as ESM, so the Storybook story reads the same
// definition the portal does — no copy, no drift.
import '../../js/elevations-doc.js'; // classic script → sets window.ERAIKI_ELEVATION

const EK = window.ERAIKI_ELEVATION;
export const ELEVATION_DOC = EK.ELEVATION_DOC;
export const ELEVATION_DESC = EK.ELEVATION_DESC;
