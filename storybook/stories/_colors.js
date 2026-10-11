// Bridge: expose the shared colour LOGIC (taxonomy + descriptions + tokens) from the
// repo's single source (js/colors-doc.js) as ESM, so Storybook can present it its own
// native way (ColorPalette) instead of copying the portal's visual.
import '../../js/colors-doc.js'; // classic script → sets window.ERAIKI_COLORS

const EK = window.ERAIKI_COLORS;
export const COLOR_DOC = EK.COLOR_DOC;
export const COLOR_META = EK.COLOR_META;

// Conceptualization: the description of a top-level group.
export function sectionDesc(name) {
  return (COLOR_DOC.find((n) => n.h === name) || {}).desc || '';
}

// Technical definition: flatten a top-level group into its leaf token groups,
// each as { title, subtitle, colors: { tokenName: var(tokenName) } }.
export function colorItems(sectionName) {
  const section = COLOR_DOC.find((n) => n.h === sectionName);
  const out = [];
  (function walk(node) {
    if (node.rows) {
      const colors = {};
      node.rows.forEach(([label, token]) => { colors[label] = `var(${token})`; });
      out.push({ title: node.h, subtitle: node.desc, colors });
    }
    if (node.children) node.children.forEach(walk);
  })(section);
  return out;
}
