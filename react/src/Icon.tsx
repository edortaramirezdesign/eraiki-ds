// The glyphs come from the DS's canonical icon set (js/icons.js -> window.EK_ICONS),
// so React and the vanilla previews never diverge.
import '../../js/icons.js';
import { cx } from './cx';

export type IconName =
  | 'check' | 'chevronDown' | 'chevronRight' | 'chevronLeft' | 'search' | 'eye' | 'eyeOff'
  | 'calendar' | 'plus' | 'trash' | 'info' | 'alert' | 'success' | 'error' | 'upload'
  | 'user' | 'image' | 'heart' | 'close' | 'closeXs' | 'closeSm';

const inner = (name: string): string => {
  const src: string = ((globalThis as any).EK_ICONS || {})[name] || '';
  return src.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
};

export interface IconProps {
  /** Glyph from the Eraiki line-icon set (20px, 1.5 stroke). */
  name: IconName;
  /** `s` renders the 16px variant (.ek-ic--s). */
  size?: 'm' | 's';
  className?: string;
}

/** Eraiki line icon — 20×20 stroke glyph that inherits `currentColor`. */
export function Icon({ name, size = 'm', className }: IconProps) {
  return (
    <svg
      className={cx('ek-ic', size === 's' && 'ek-ic--s', className)}
      viewBox="0 0 20 20"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: inner(name) }}
    />
  );
}
