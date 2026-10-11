// POC bridge: reuse the portal's OWN markup generators as the single source of HTML,
// instead of re-writing each component's markup in the stories. previews.js builds the
// exact HTML the custom portal renders; it only needs EK_ICONS (at eval) and EK_BUILD
// (lazily, for star/rating), so we load those first.
import '../../js/icons.js';     // window.EK_ICONS (read by previews.js at eval)
import '../../js/builders.js';  // window.EK_BUILD (star/rating helpers)
import '../../js/previews.js';   // sets window.ERAIKI_PREVIEWS + window.ERAIKI_ITEM_DEMOS
import '../../js/docs-figma.js';  // window.ERAIKI_DOCS (per-component state lists, from Figma)
import '../../js/playgrounds.js'; // window.ERAIKI_PLAYGROUNDS (prop-driven live emulators)
import '../../js/components-data.js'; // window.ERAIKI_COMPONENTS (written docs per component)
import '../../js/sections.js';        // window.ERAIKI_SECTIONS + ERAIKI_SECTIONS_BUILD

// PREVIEWS[slug]()      -> [{ title, opts, html, stage }]  (overview variant blocks)
// ITEM_DEMOS[slug](s,n) -> html string for a single named Figma state
// DOCS[slug].sections   -> [{ title, items: [{ name, desc, default }] }]  (state catalogue)
// PLAYGROUNDS[slug]      -> { props|custom, render(state) }  (the portal's prop playground)
export const PREVIEWS = window.ERAIKI_PREVIEWS;
export const ITEM_DEMOS = window.ERAIKI_ITEM_DEMOS;
export const DOCS = window.ERAIKI_DOCS;
export const PLAYGROUNDS = window.ERAIKI_PLAYGROUNDS;
export const COMPONENTS = window.ERAIKI_COMPONENTS || [];
export const SECTIONS = window.ERAIKI_SECTIONS || [];
export const SECTIONS_BUILD = window.ERAIKI_SECTIONS_BUILD || {};
