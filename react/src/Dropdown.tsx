import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';
import { useControllable } from './useControllable';

export type DropdownOption = string | { value: string; label: ReactNode };

export interface DropdownProps {
  /** Uppercase label above the field. */
  label?: ReactNode;
  options: DropdownOption[];
  /** Controlled selected value. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** Start with the menu open (useful for static mockups). */
  defaultOpen?: boolean;
  disabled?: boolean;
  className?: string;
}

const norm = (o: DropdownOption) => (typeof o === 'string' ? { value: o, label: o } : o);

/** Select field with an Eraiki options menu. */
export function Dropdown({ label, options, value, defaultValue = '', onChange, placeholder = 'Select…', defaultOpen = false, disabled, className }: DropdownProps) {
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
  return (
    <div className={cx('ek-ddinput', className)}>
      {label && <span className="ek-ddinput__label">{label}</span>}
      <div className="ek-ddinput__row">
        <div ref={ref} className={cx('ek-dropdown', open && 'is-open')}>
          <div className={cx('ek-input', 'ek-input--select', disabled && 'is-disabled')} role="combobox" aria-expanded={open} tabIndex={disabled ? -1 : 0}
            onClick={() => !disabled && setOpen(!open)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (!disabled) setOpen(!open); } if (e.key === 'Escape') setOpen(false); }}>
            <span className={cx('ek-ddinput__value', !current && 'is-placeholder')}>{current ? current.label : placeholder}</span>
            <span className="ek-ddinput__right"><span className="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-ddinput__toggle"><Icon name="chevronDown" /></span></span>
          </div>
          <div className="ek-dropdown__menu" role="listbox">
            {opts.map((o) => (
              <div key={o.value} role="option" aria-selected={o.value === sel} className={cx('ek-opt', o.value === sel && 'is-selected')}
                onClick={() => { setSel(o.value); setOpen(false); }}>{o.label}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
