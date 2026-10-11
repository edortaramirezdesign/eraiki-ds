import type { InputHTMLAttributes, ReactNode } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Uppercase label above the field (a trailing colon is the DS convention, e.g. "Email:"). */
  label?: ReactNode;
  /** Helper text below the field. */
  helperText?: ReactNode;
  /** Error state; pass a string to show it as the message below. */
  error?: boolean | string;
  /** Adds a red asterisk to the label. */
  required?: boolean;
  /** Shows an info icon with this hint next to the field. */
  tooltip?: string;
  className?: string;
}

/** Single-line text input with label, helper/error text and states. */
export function TextField({ label, helperText, error, required, tooltip, disabled, className, type = 'text', ...input }: TextFieldProps) {
  const message = typeof error === 'string' ? error : helperText;
  return (
    <div className={cx('ek-datefield', 'ek-datefield--text', className)}>
      {label && <label className="ek-datefield__label">{required && <span className="ek-req">*</span>}{label}</label>}
      <div className="ek-datefield__row">
        <div className={cx('ek-input', 'ek-input--field', error && 'is-error', disabled && 'is-disabled')}>
          <input type={type} disabled={disabled} required={required} aria-invalid={error ? true : undefined} {...input} />
        </div>
        {tooltip && <span className="ek-ddinput__tooltip" title={tooltip}><Icon name="info" /></span>}
      </div>
      {message && <span className={cx('ek-datefield__info', error && 'is-error')}>{message}</span>}
    </div>
  );
}
