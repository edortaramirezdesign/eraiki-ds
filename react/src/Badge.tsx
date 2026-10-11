import type { ReactNode } from 'react';
import { cx } from './cx';

export type BadgeColor = 'primary' | 'error' | 'alert' | 'info' | 'success';

export interface BadgeProps {
  /** Semantic color; `primary` is the brand accent. */
  color?: BadgeColor;
  /** Count or short text. Omit (or set `dot`) for an 8px status dot. */
  children?: ReactNode;
  /** Force the dot variant. */
  dot?: boolean;
  className?: string;
}

/** Small count / status indicator. */
export function Badge({ color = 'primary', children, dot, className }: BadgeProps) {
  const isDot = dot || children === undefined || children === null;
  return (
    <span className={cx('ek-badge', color !== 'primary' && `ek-badge--${color}`, isDot && 'ek-badge--dot', className)}>
      {isDot ? null : children}
    </span>
  );
}
