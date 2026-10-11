import type { ReactNode } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface TooltipProps {
  /** Bubble text. */
  text: ReactNode;
  position?: 'top' | 'top-left' | 'top-right' | 'left' | 'right' | 'bottom' | 'bottom-left' | 'bottom-right';
  /** Keep the bubble visible (otherwise it shows on hover). */
  open?: boolean;
  /** Trigger element; defaults to the DS info-icon button. */
  children?: ReactNode;
  className?: string;
}

/** Hover hint bubble anchored to a trigger. */
export function Tooltip({ text, position = 'top', open, children, className }: TooltipProps) {
  return (
    <span className={cx('ek-tooltip', open && 'is-open', className)}>
      {children ?? <span className="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-tooltip__trigger"><Icon name="info" /></span>}
      <span role="tooltip" className={cx('ek-tooltip__bubble', `ek-tooltip__bubble--${position}`)}>{text}</span>
    </span>
  );
}
