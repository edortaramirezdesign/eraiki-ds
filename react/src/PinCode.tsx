import { useRef, useState } from 'react';
import { cx } from './cx';

export interface PinCodeProps {
  /** Number of digits. */
  length?: number;
  defaultValue?: string;
  /** Called with the digits typed so far. */
  onChange?: (value: string) => void;
  /** Called once every cell is filled. */
  onComplete?: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
  className?: string;
}

/** One-digit-per-cell code entry (OTP / PIN) with auto-advance; digits show as dots. */
export function PinCode({ length = 4, defaultValue = '', onChange, onComplete, error, disabled, className }: PinCodeProps) {
  const [vals, setVals] = useState<string[]>(Array.from({ length }, (_, i) => defaultValue[i] ?? ''));
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  const update = (i: number, v: string) => {
    const next = [...vals]; next[i] = v; setVals(next);
    const joined = next.join(''); onChange?.(joined);
    if (next.every(Boolean)) onComplete?.(joined);
  };
  return (
    <div className={cx('ek-pin', className)}>
      {vals.map((v, i) => (
        <div key={i} className={cx('ek-pin__cell', error && 'is-error', disabled && 'is-disabled', v && 'is-filled')}>
          <input ref={(el) => { refs.current[i] = el; }} inputMode="numeric" maxLength={1} value={v} disabled={disabled} aria-label={`Digit ${i + 1}`}
            onChange={(e) => { const d = e.target.value.replace(/\D/g, '').slice(-1); update(i, d); if (d) refs.current[i + 1]?.focus(); }}
            onKeyDown={(e) => { if (e.key === 'Backspace' && !v && i > 0) { update(i - 1, ''); refs.current[i - 1]?.focus(); } }} />
          <span className="ek-pin__dot" />
        </div>
      ))}
    </div>
  );
}
