import { useState, type InputHTMLAttributes } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  onChange?: (value: string) => void;
  /** Called with the query on Enter or the Search button. */
  onSearch?: (value: string) => void;
  /** Shows the primary "Search" button next to the field. */
  button?: boolean;
  buttonLabel?: string;
  error?: boolean;
  /** CSS width (default 320px). */
  width?: number | string;
  className?: string;
}

/** Search input with icon, clear button and optional submit button. */
export function SearchField({ onChange, onSearch, button = true, buttonLabel = 'Search', error, disabled, width, placeholder = 'Search…', defaultValue, className, ...input }: SearchFieldProps) {
  const [q, setQ] = useState(String(defaultValue ?? ''));
  const set = (v: string) => { setQ(v); onChange?.(v); };
  return (
    <div className={cx('ek-search', className)} style={width !== undefined ? { width } : undefined}>
      <div className={cx('ek-input', error && 'is-error', disabled && 'is-disabled')}>
        <Icon name="search" />
        <input value={q} placeholder={placeholder} disabled={disabled} onChange={(e) => set(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') onSearch?.(q); }} {...input} />
        <span role="button" aria-label="Clear" className="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm" onClick={() => set('')}><Icon name="closeXs" /></span>
      </div>
      {button && <button type="button" className={cx('ek-btn', 'ek-btn--primary', disabled && 'is-disabled')} disabled={disabled} onClick={() => onSearch?.(q)}>{buttonLabel}</button>}
    </div>
  );
}
