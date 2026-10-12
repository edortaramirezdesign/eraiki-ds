import { cx } from './cx';

export interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  /** `medium` = standard-l stroke, `low` = lighter standard-m stroke. */
  level?: 'medium' | 'low';
  className?: string;
}

/** Thin separator line between content groups. */
export function Divider({ direction = 'horizontal', level = 'medium', className }: DividerProps) {
  const color = level === 'low' ? 'var(--color-stroke-plain-shape-standard-m)' : 'var(--color-stroke-plain-shape-standard-l)';
  return direction === 'vertical'
    ? <span role="separator" aria-orientation="vertical" className={cx('ek-divider--v', className)} style={{ borderLeftColor: color }} />
    : <hr className={cx('ek-divider', className)} style={{ borderTopColor: color }} />;
}
