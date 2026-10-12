import { useState, type InputHTMLAttributes, type ReactNode } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface PasswordFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: ReactNode;
  helperText?: ReactNode;
  /** Error state; a string is shown as the message. */
  error?: boolean | string;
  className?: string;
}

const dots = (n: number) => {
  const count = n || 8, w = count * 12 - 4;
  return (
    <svg width={w} height="8" viewBox={`0 0 ${w} 8`} fill="currentColor" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => <circle key={i} cx={4 + i * 12} cy="4" r="4" />)}
    </svg>
  );
};

/** Password input masked with the DS's dot glyphs, with a show/hide eye toggle. */
export function PasswordField({ label, helperText, error, disabled, className, value, defaultValue, onChange, ...input }: PasswordFieldProps) {
  const [revealed, setRevealed] = useState(false);
  const [len, setLen] = useState(String(value ?? defaultValue ?? '').length);
  const message = typeof error === 'string' ? error : helperText;
  return (
    <div className={cx('ek-datefield', className)}>
      {label && <span className="ek-datefield__label">{label}</span>}
      <div className={cx('ek-pwbox', error && 'is-error', disabled && 'is-disabled', revealed && 'is-revealed')}>
        <span className="ek-pwbox__field">
          <input className="ek-pwbox__input" type="text" autoComplete="current-password" disabled={disabled} value={value} defaultValue={defaultValue}
            onChange={(e) => { setLen(e.target.value.length); onChange?.(e); }} {...input} />
          <span className={cx('ek-pwbox__dots', len === 0 && 'is-empty')} aria-hidden="true">{dots(len)}</span>
        </span>
        <button type="button" className="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-pwbox__eye" aria-label={revealed ? 'Hide password' : 'Show password'}
          onClick={() => setRevealed(!revealed)}>
          <span className="ek-pwbox__off"><Icon name="eyeOff" /></span><span className="ek-pwbox__on"><Icon name="eye" /></span>
        </button>
      </div>
      {message && <span className={cx('ek-datefield__info', error && 'is-error')}>{message}</span>}
    </div>
  );
}
