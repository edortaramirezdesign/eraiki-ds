import { useState } from 'react';
import { cx } from './cx';
import { starSvg } from './builders';
import { useControllable } from './useControllable';

export interface RatingProps {
  /** Filled stars (0–5). */
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  /** Display only (no hover / click). */
  readOnly?: boolean;
  className?: string;
}

/** Five-star rating; click to set, hover previews. */
export function Rating({ value, defaultValue = 0, onChange, readOnly, className }: RatingProps) {
  const [v, setV] = useControllable(value, defaultValue, onChange);
  const [hover, setHover] = useState(0);
  const svg = starSvg();
  return (
    <span className={cx('ek-rating', className)} role={readOnly ? 'img' : 'radiogroup'} aria-label={`${v} out of 5`} onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} data-val={n} className={cx('ek-star', n > v && 'is-empty', !readOnly && n > v && n <= hover && 'is-preview')}
          onMouseEnter={() => !readOnly && setHover(n)} onClick={() => !readOnly && setV(n)}
          dangerouslySetInnerHTML={{ __html: svg }} />
      ))}
    </span>
  );
}
