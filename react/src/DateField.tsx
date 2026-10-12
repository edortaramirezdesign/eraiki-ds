import { useRef, type ReactNode } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface DateParts { day: string; month: string; year: string }

interface DateInputProps {
  value?: Partial<DateParts>;
  defaultValue?: Partial<DateParts>;
  onChange?: (v: DateParts) => void;
  error?: boolean;
  disabled?: boolean;
}

/** DD / MM / AAAA numeric segments with auto-advance. */
function DateInput({ value, defaultValue, onChange, error, disabled }: DateInputProps) {
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
  const cur = useRef<DateParts>({ day: '', month: '', year: '', ...defaultValue, ...value });
  const seg = (i: number, key: keyof DateParts, ph: string, max: number) => (
    <input ref={refs[i]} className={`ek-dateinput__seg ek-dateinput__seg--${['dd', 'mm', 'yy'][i]}`} inputMode="numeric" maxLength={max} placeholder={ph}
      disabled={disabled} {...(value ? { value: value[key] ?? '' } : { defaultValue: defaultValue?.[key] ?? '' })}
      onChange={(e) => {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, max);
        cur.current = { ...cur.current, [key]: e.target.value };
        onChange?.(cur.current);
        if (e.target.value.length >= max) refs[i + 1]?.current?.focus();
      }} />
  );
  return (
    <div className={cx('ek-dateinput', error && 'is-error', disabled && 'is-disabled')}>
      {seg(0, 'day', 'DD', 2)}<span className="ek-dateinput__div" />{seg(1, 'month', 'MM', 2)}<span className="ek-dateinput__div" />{seg(2, 'year', 'AAAA', 4)}
    </div>
  );
}

export interface DateFieldProps extends Omit<DateInputProps, 'error'> {
  label?: ReactNode;
  helperText?: ReactNode;
  /** Error state; a string is shown as the message. */
  error?: boolean | string;
  required?: boolean;
  tooltip?: string;
  className?: string;
}

/** Date entry field (DD / MM / AAAA) with label and helper/error text. */
export function DateField({ label, helperText, error, required, tooltip, className, ...input }: DateFieldProps) {
  const message = typeof error === 'string' ? error : helperText;
  return (
    <div className={cx('ek-datefield', className)}>
      {label && <span className="ek-datefield__label">{required && <span className="ek-req">*</span>}{label}</span>}
      <div className="ek-datefield__row">
        <DateInput {...input} error={!!error} />
        {tooltip && <span className="ek-ddinput__tooltip" title={tooltip}><Icon name="info" /></span>}
      </div>
      {message && <span className={cx('ek-datefield__info', error && 'is-error')}>{message}</span>}
    </div>
  );
}

export interface DateRangeFieldProps {
  startLabel?: ReactNode;
  endLabel?: ReactNode;
  defaultStart?: Partial<DateParts>;
  defaultEnd?: Partial<DateParts>;
  onChange?: (range: { start: DateParts; end: DateParts }) => void;
  helperText?: ReactNode;
  error?: boolean | string;
  required?: boolean;
  disabled?: boolean;
  tooltip?: string;
  className?: string;
}

/** Two date fields side by side (start / end). */
export function DateRangeField({ startLabel = 'From:', endLabel = 'To:', defaultStart, defaultEnd, onChange, helperText, error, required, disabled, tooltip, className }: DateRangeFieldProps) {
  const range = useRef({ start: { day: '', month: '', year: '', ...defaultStart }, end: { day: '', month: '', year: '', ...defaultEnd } });
  return (
    <div className={cx('ek-daterange', className)}>
      <DateField label={startLabel} defaultValue={defaultStart} error={!!error} required={required} disabled={disabled}
        onChange={(v) => { range.current.start = v; onChange?.(range.current); }} />
      <DateField label={endLabel} defaultValue={defaultEnd} helperText={helperText} error={error} required={required} disabled={disabled} tooltip={tooltip}
        onChange={(v) => { range.current.end = v; onChange?.(range.current); }} />
    </div>
  );
}
