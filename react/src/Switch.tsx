import type { KeyboardEvent, ReactNode } from 'react';
import { cx } from './cx';
import { useControllable } from './useControllable';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** Text next to the track. */
  children?: ReactNode;
  className?: string;
}

/** On/off toggle for settings that apply immediately. */
export function Switch({ checked, defaultChecked = false, onChange, disabled, children, className }: SwitchProps) {
  const [on, setOn] = useControllable(checked, defaultChecked, onChange);
  const toggle = () => { if (!disabled) setOn(!on); };
  const onKey = (e: KeyboardEvent) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); } };
  return (
    <span
      role="switch" aria-checked={on} aria-disabled={disabled || undefined} tabIndex={disabled ? -1 : 0}
      className={cx('ek-switch', on && 'is-on', disabled && 'is-disabled', className)}
      onClick={toggle} onKeyDown={onKey}
    >
      <span className="ek-switch__track" />
      {children !== undefined && <span>{children}</span>}
    </span>
  );
}
