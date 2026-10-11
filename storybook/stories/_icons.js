// Bridge: expose the shared icon catalogue (window.ICON_DOC) from the repo's single
// source (js/icons-doc.js) as ESM, so the Storybook story reads the same definition
// the portal does — no copy, no drift. The SVG files are served from /assets (see
// .storybook/main.js staticDirs).
import '../../js/icons-doc.js'; // classic script → sets window.ICON_DOC

export const ICON_DOC = window.ICON_DOC || [];
