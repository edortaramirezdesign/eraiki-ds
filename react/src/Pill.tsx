import type { ReactNode } from 'react';
import { cx } from './cx';
import { useControllable } from './useControllable';

export interface PillProps {
  selected?: boolean;
  defaultSelected?: boolean;
  onChange?: (selected: boolean) => void;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

/** Toggleable filter chip. Place several inside `<PillGroup>`. */
export function Pill({ selected, defaultSelected = false, onChange, disabled, children, className }: PillProps) {
  const [on, setOn] = useControllable(selected, defaultSelected, onChange);
  return (
    <button type="button" aria-pressed={on} disabled={disabled}
      className={cx('ek-pill', on && 'is-on', disabled && 'is-disabled', className)}
      onClick={() => !disabled && setOn(!on)}>{children}</button>
  );
}

export interface PillGroupProps {
  children?: ReactNode;
  className?: string;
}

/** Wrapping row of Pills. */
export function PillGroup({ children, className }: PillGroupProps) {
  return <div className={cx('ek-pills', className)}>{children}</div>;
}
