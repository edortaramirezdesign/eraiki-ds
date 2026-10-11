import type { KeyboardEvent, ReactNode } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';
import { useControllable } from './useControllable';

export interface CheckboxProps {
  /** Controlled checked state. */
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  /** Shows a dash instead of the check (partial selection). */
  indeterminate?: boolean;
  disabled?: boolean;
  /** Error styling (red box + text). */
  error?: boolean;
  /** Text next to the box. */
  children?: ReactNode;
  className?: string;
}

/** Eraiki checkbox with optional label. */
export function Checkbox({ checked, defaultChecked = false, onChange, indeterminate, disabled, error, children, className }: CheckboxProps) {
  const [on, setOn] = useControllable(checked, defaultChecked, onChange);
  const toggle = () => { if (!disabled) setOn(!on); };
  const onKey = (e: KeyboardEvent) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); } };
  return (
    <span
      role="checkbox" aria-checked={indeterminate ? 'mixed' : on} aria-disabled={disabled || undefined} tabIndex={disabled ? -1 : 0}
      className={cx('ek-check', on && !indeterminate && 'is-on', indeterminate && 'is-indeterminate', error && 'is-error', disabled && 'is-disabled', className)}
      onClick={toggle} onKeyDown={onKey}
    >
      <span className="ek-check__box"><Icon name="check" /></span>
      {children !== undefined && <span>{children}</span>}
    </span>
  );
}

export interface CheckboxGroupProps {
  /** Uppercase group heading. */
  label?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/** Vertical list of Checkboxes with an optional heading. */
export function CheckboxGroup({ label, children, className }: CheckboxGroupProps) {
  return (
    <div className={cx('ek-check-group', className)} role="group">
      {label && <span className="ek-group-label">{label}</span>}
      {children}
    </div>
  );
}
