import type { ReactNode } from 'react';
import { cx } from './cx';

export interface PlaceholderProps {
  /** Hint text inside the box (omit for an empty block). */
  children?: ReactNode;
  width?: number | string;
  height?: number | string;
  className?: string;
}

/** Neutral stand-in block for content still to be designed (image, chart, map…). */
export function Placeholder({ children, width = '100%', height = 120, className }: PlaceholderProps) {
  return <span className={cx('ek-placeholder', className)} style={{ width, height }}>{children}</span>;
}
