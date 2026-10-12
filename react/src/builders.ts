// Decorative glyphs that live in the DS's shared builders (js/builders.js ->
// window.EK_BUILD), extracted from its output so React never re-draws them.
import '../../js/icons.js';
import '../../js/builders.js';

const B = () => (globalThis as any).EK_BUILD || {};
/** Inner SVG of the rating star. */
export const starSvg = (): string => (B().star?.(false, 1) || '').replace(/^<span[^>]*>/, '').replace(/<\/span>$/, '');
/** Text-group decorative icon SVG. */
export const textGroupIconSvg = (): string => {
  const m = /<span class="ek-textgroup__icon">([\s\S]*?)<\/span>/.exec(B().textGroup?.({}) || '');
  return m ? m[1] : '';
};
