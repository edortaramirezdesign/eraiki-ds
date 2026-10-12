import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cx } from './cx';
import { Icon, type IconName } from './Icon';
import { useControllable } from './useControllable';
import type { DropdownOption } from './Dropdown';

export interface DropdownInputProps {
  label?: ReactNode;
  options: DropdownOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** Leading icon inside the field. */
  icon?: IconName;
  /** Small accent dot next to the chevron (e.g. "has changes"). */
  badge?: boolean;
  /** Info icon with this hint next to the field. */
  tooltip?: string;
  helperText?: ReactNode;
  /** Error state; a string is shown as the message. */
  error?: boolean | string;
  required?: boolean;
  disabled?: boolean;
  defaultOpen?: boolean;
  className?: string;
}

const norm = (o: DropdownOption) => (typeof o === 'string' ? { value: o, label: o } : o);

/** Full-featured select field: label, leading icon, badge, tooltip, helper/error text. */
export function DropdownInput({
  label, options, value, defaultValue = '', onChange, placeholder = 'Select…', icon, badge, tooltip, helperText, error, required, disabled, defaultOpen = false, className,
}: DropdownInputProps) {
  const [sel, setSel] = useControllable(value, defaultValue, onChange);
  const [open, setOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const off = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', off);
    return () => document.removeEventListener('mousedown', off);
  }, [open]);
  const opts = options.map(norm);
  const current = opts.find((o) => o.value === sel);
  const message = typeof error === 'string' ? error : helperText;
  return (
    <div className={cx('ek-ddinput', className)}>
      {label && <span className="ek-ddinput__label">{required && <span className="ek-req">*</span>}{label}</span>}
      <div className="ek-ddinput__row">
        <div ref={ref} className={cx('ek-dropdown', open && 'is-open')}>
          <div className={cx('ek-input', 'ek-input--select', error && 'is-error', disabled && 'is-disabled')} role="combobox" aria-expanded={open} tabIndex={disabled ? -1 : 0}
            onClick={() => !disabled && setOpen(!open)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (!disabled) setOpen(!open); } if (e.key === 'Escape') setOpen(false); }}>
            {icon && <Icon name={icon} />}
            <span className={cx('ek-ddinput__value', !current && 'is-placeholder')}>{current ? current.label : placeholder}</span>
            <span className="ek-ddinput__right">
              {badge && <span className="ek-ddinput__badge" />}
              <span className="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-ddinput__toggle"><Icon name="chevronDown" /></span>
            </span>
          </div>
          <div className="ek-dropdown__menu" role="listbox">
            {opts.map((o) => (
              <div key={o.value} role="option" aria-selected={o.value === sel} className={cx('ek-opt', o.value === sel && 'is-selected')}
                onClick={() => { setSel(o.value); setOpen(false); }}>{o.label}</div>
            ))}
          </div>
        </div>
        {tooltip && <span className="ek-ddinput__tooltip" title={tooltip}><Icon name="info" /></span>}
      </div>
      {message && <span className={cx('ek-ddinput__detail', error && 'is-error')}>{message}</span>}
    </div>
  );
}
