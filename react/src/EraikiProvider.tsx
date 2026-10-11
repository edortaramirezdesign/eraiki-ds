import { useEffect, type ReactNode } from 'react';
import { cx } from './cx';

export interface EraikiProviderProps {
  /** Color theme. Sets `data-theme` on <html> (the tokens scope dark mode there). Omit to follow the OS setting. */
  theme?: 'light' | 'dark';
  children?: ReactNode;
  className?: string;
}

/**
 * App root for Eraiki: renders the `.ek` root class (sets the body font family that
 * inputs and plain text inherit) and applies the theme. Wrap every screen in it once.
 */
export function EraikiProvider({ theme, children, className }: EraikiProviderProps) {
  useEffect(() => {
    if (!theme) return;
    const el = document.documentElement;
    const prev = el.getAttribute('data-theme');
    el.setAttribute('data-theme', theme);
    return () => { if (prev === null) el.removeAttribute('data-theme'); else el.setAttribute('data-theme', prev); };
  }, [theme]);
  return <div className={cx('ek', className)}>{children}</div>;
}
