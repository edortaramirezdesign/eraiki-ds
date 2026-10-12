import { useState, type ReactNode, type TextareaHTMLAttributes } from 'react';
import { cx } from './cx';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
  helperText?: ReactNode;
  /** Error state; a string is shown as the message. */
  error?: boolean | string;
  required?: boolean;
  /** Shows a live "n/max" character counter (uses `maxLength`, default 100). */
  showCount?: boolean;
  className?: string;
}

/** Multi-line text input with label, helper/error text and optional counter. */
export function TextArea({ label, helperText, error, required, showCount, disabled, className, maxLength, value, defaultValue, onChange, ...ta }: TextAreaProps) {
  const [len, setLen] = useState(String(value ?? defaultValue ?? '').length);
  const message = typeof error === 'string' ? error : helperText;
  const max = maxLength ?? 100;
  return (
    <div className={cx('ek-datefield', 'ek-datefield--area', className)}>
      {label && <label className="ek-datefield__label">{required && <span className="ek-req">*</span>}{label}</label>}
      <div className={cx('ek-input', 'ek-textarea', error && 'is-error', disabled && 'is-disabled')}>
        <textarea disabled={disabled} required={required} maxLength={showCount ? max : maxLength} value={value} defaultValue={defaultValue}
          onChange={(e) => { setLen(e.target.value.length); onChange?.(e); }} {...ta} />
      </div>
      {(message || showCount) && (
        <div className="ek-taarea__footer">
          {message && <span className={cx('ek-datefield__info', error && 'is-error')}>{message}</span>}
          {showCount && <span className="ek-taarea__count">{len}/{max}</span>}
        </div>
      )}
    </div>
  );
}
