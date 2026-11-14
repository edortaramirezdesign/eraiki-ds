import { useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import { cx } from './cx';
import { observeSectionReveal } from './reveal';

export interface EraikiProviderProps {
  /** Section entrance reveal: section content fades in from a blur when it scrolls into view. Default true. */
  reveal?: boolean;
  /** Color theme. Sets `data-theme` on <html> (the tokens scope dark mode there). Omit to follow the OS setting. */
  theme?: 'light' | 'dark';
  children?: ReactNode;
  className?: string;
}

/**
 * App root for Eraiki: renders the `.ek` root class (sets the body font family that
 * inputs and plain text inherit) and applies the theme. Wrap every screen in it once.
 */
export function EraikiProvider({ theme, reveal = true, children, className }: EraikiProviderProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Layout effect: arm sections before the first paint so their content never flashes.
  useLayoutEffect(() => (reveal && ref.current ? observeSectionReveal(ref.current) : undefined), [reveal]);
  useEffect(() => {
    if (!theme) return;
    const el = document.documentElement;
    const prev = el.getAttribute('data-theme');
    el.setAttribute('data-theme', theme);
    return () => { if (prev === null) el.removeAttribute('data-theme'); else el.setAttribute('data-theme', prev); };
  }, [theme]);
  return <div ref={ref} className={cx('ek', className)}>{children}</div>;
}
