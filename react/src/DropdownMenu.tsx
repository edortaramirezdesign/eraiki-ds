import type { ReactNode } from 'react';
import { cx } from './cx';
import { Icon, type IconName } from './Icon';
import { useControllable } from './useControllable';

export interface DropdownMenuOption {
  value: string;
  label: ReactNode;
  icon?: IconName;
  /** Trailing accent dot. */
  badge?: boolean;
  disabled?: boolean;
  /** Draw a divider after this option. */
  divider?: boolean;
}

export interface DropdownMenuProps {
  options: DropdownMenuOption[];
  /** `multi` renders a checkbox per option and keeps several selected. */
  kind?: 'single' | 'multi';
  /** Selected value(s): a string in single mode, string[] in multi mode. */
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  /** Footer primary button label (omit to hide). */
  buttonLabel?: string;
  onApply?: () => void;
  className?: string;
}

/** Standalone options panel (the menu of a dropdown) — single or multi select, optional footer action. */
export function DropdownMenu({ options, kind = 'single', defaultValue, onChange, buttonLabel, onApply, className }: DropdownMenuProps) {
  const multi = kind === 'multi';
  const initial = defaultValue ?? (multi ? [] : '');
  const [val, setVal] = useControllable<string | string[]>(undefined, initial, onChange);
  const isOn = (v: string) => (multi ? (val as string[]).includes(v) : val === v);
  const toggle = (v: string) => {
    if (!multi) return setVal(v);
    const arr = val as string[];
    setVal(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  };
  return (
    <div className={cx('ek-dropdown__menu', className)} role="listbox" aria-multiselectable={multi || undefined} style={{ width: 280 }}>
      {options.map((o) => (
        <div key={o.value} style={{ display: 'contents' }}>
          <div role="option" aria-selected={isOn(o.value)} className={cx('ek-opt', !multi && isOn(o.value) && 'is-selected')}
            style={o.disabled ? { opacity: 0.5, pointerEvents: 'none' } : undefined} onClick={() => toggle(o.value)}>
            {multi && <span className={cx('ek-check', isOn(o.value) && 'is-on')}><span className="ek-check__box"><Icon name="check" /></span></span>}
            {o.icon && <Icon name={o.icon} />}
            <span>{o.label}</span>
            {o.badge && <span className="ek-badge ek-badge--dot" style={{ marginLeft: 'auto' }} />}
          </div>
          {o.divider && <hr className="ek-divider" />}
        </div>
      ))}
      {buttonLabel && <div className="ek-dropdown__foot"><button type="button" className="ek-btn ek-btn--primary" onClick={onApply}>{buttonLabel}</button></div>}
    </div>
  );
}
