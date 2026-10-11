// Bridge: expose the shared typography LOGIC (families + descriptions + sizes +
// role tokens) from the repo's single source (js/typography-doc.js) as ESM, so the
// Storybook stories read the same definition the portal does — no copy, no drift.
import '../../js/typography-doc.js'; // classic script → sets window.ERAIKI_TYPE

const EK = window.ERAIKI_TYPE;
export const TYPE_DOC = EK.TYPE_DOC;
export const TYPE_ROLES = EK.TYPE_ROLES;
export const TYPE_SHORT_MD = EK.TYPE_SHORT_MD;

export function family(name) {
  return TYPE_DOC.find((s) => s.h === name);
}
