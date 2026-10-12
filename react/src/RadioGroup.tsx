import type { KeyboardEvent, ReactNode } from 'react';
import { cx } from './cx';
import { useControllable } from './useControllable';

export interface RadioOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps {
  /** Uppercase heading above the options. */
  label?: ReactNode;
  options: Array<string | RadioOption>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Disable every option. */
  disabled?: boolean;
  className?: string;
}

const norm = (o: string | RadioOption): RadioOption => (typeof o === 'string' ? { value: o, label: o } : o);

/** Vertical list of mutually exclusive options. */
export function RadioGroup({ label, options, value, defaultValue = '', onChange, disabled, className }: RadioGroupProps) {
  const [sel, setSel] = useControllable(value, defaultValue, onChange);
  return (
    <div className={cx('ek-check-group', className)} role="radiogroup">
      {label && <span className="ek-group-label">{label}</span>}
      {options.map(norm).map((o) => {
        const off = disabled || o.disabled;
        const pick = () => { if (!off) setSel(o.value); };
        return (
          <span key={o.value} role="radio" aria-checked={sel === o.value} aria-disabled={off || undefined} tabIndex={off ? -1 : 0}
            className={cx('ek-radio', sel === o.value && 'is-on', off && 'is-disabled')} onClick={pick}
            onKeyDown={(e: KeyboardEvent) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); pick(); } }}>
            <span className="ek-radio__dot" /><span>{o.label}</span>
          </span>
        );
      })}
    </div>
  );
}
