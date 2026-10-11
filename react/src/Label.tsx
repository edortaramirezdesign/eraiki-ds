import type { ReactNode } from 'react';
import { cx } from './cx';

export interface LabelProps {
  kind?: 'neutral' | 'info' | 'alert' | 'error' | 'success';
  /** Leading status dot. */
  dot?: boolean;
  children?: ReactNode;
  className?: string;
}

/** Uppercase status tag (e.g. "NEW", "PENDING"). */
export function Label({ kind = 'neutral', dot, children, className }: LabelProps) {
  return (
    <span className={cx('ek-label', kind !== 'neutral' && `ek-label--${kind}`, className)}>
      {dot && <span className="ek-label__dot" />}
      {children}
    </span>
  );
}
