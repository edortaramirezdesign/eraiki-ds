import { useState } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DOW = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export interface CalendarProps {
  /** `single` picks one day; `range` picks start + end with two clicks. */
  mode?: 'single' | 'range';
  /** Initially shown month (0 = January). Defaults to today. */
  defaultMonth?: number;
  defaultYear?: number;
  /** Selected day of the shown month (single mode). */
  defaultSelected?: number;
  /** Selected [start, end] days of the shown month (range mode). */
  defaultRange?: [number, number];
  /** Shows the month header with prev/next arrows. */
  monthSelector?: boolean;
  /** Shows a year dropdown above the grid. */
  yearSelector?: boolean;
  /** Label of the full-width primary button under the grid (omit to hide). */
  buttonLabel?: string;
  onApply?: () => void;
  onSelect?: (date: Date) => void;
  className?: string;
}

/** Month grid date picker (single day or range), weeks start on Monday. */
export function Calendar({
  mode = 'single', defaultMonth, defaultYear, defaultSelected, defaultRange, monthSelector = true, yearSelector, buttonLabel, onApply, onSelect, className,
}: CalendarProps) {
  const today = new Date();
  const [y, setY] = useState(defaultYear ?? today.getFullYear());
  const [m, setM] = useState(defaultMonth ?? today.getMonth());
  const [sel, setSel] = useState<number | undefined>(defaultSelected);
  const [range, setRange] = useState<[number, number] | undefined>(defaultRange);
  const [pending, setPending] = useState<number | undefined>();
  const [yearOpen, setYearOpen] = useState(false);

  const nav = (d: number) => {
    let nm = m + d, ny = y;
    if (nm < 0) { nm += 12; ny--; } else if (nm > 11) { nm -= 12; ny++; }
    setM(nm); setY(ny); setPending(undefined);
  };
  const pick = (d: number) => {
    onSelect?.(new Date(y, m, d));
    if (mode === 'single') { setSel(d); return; }
    if (pending === undefined) { setPending(d); setRange(undefined); setSel(d); return; }
    const a = Math.min(pending, d), b = Math.max(pending, d);
    setRange([a, b]); setSel(a === b ? a : undefined); setPending(undefined);
  };

  const startDow = (new Date(y, m, 1).getDay() + 6) % 7;
  const days = new Date(y, m + 1, 0).getDate();
  const prev = new Date(y, m, 0).getDate();
  const trailing = (7 - ((startDow + days) % 7)) % 7;
  const cls = (d: number) => {
    if (range && range[0] !== range[1]) {
      if (d === range[0]) return 'is-range-start';
      if (d === range[1]) return 'is-range-end';
      if (d > range[0] && d < range[1]) return 'is-range-middle';
      return '';
    }
    return sel === d ? 'is-on' : '';
  };

  return (
    <div className={cx('ek-calendar', className)}>
      {yearSelector && (
        <div className="ek-field ek-calendar__year">
          <span className="ek-field__label">Year:</span>
          <div className={cx('ek-dropdown', yearOpen && 'is-open')}>
            <div className="ek-input" onClick={() => setYearOpen(!yearOpen)}><span style={{ flex: 1 }}>{y}</span><Icon name="chevronDown" size="s" /></div>
            <div className="ek-dropdown__menu">
              {[y - 2, y - 1, y, y + 1, y + 2].map((yy) => (
                <div key={yy} className={cx('ek-opt', yy === y && 'is-selected')} onClick={() => { setY(yy); setYearOpen(false); }}>{yy}</div>
              ))}
            </div>
          </div>
        </div>
      )}
      {monthSelector && (
        <div className="ek-calendar__head">
          <button type="button" aria-label="Previous month" className="ek-btn ek-btn--tertiary ek-btn--icon" onClick={() => nav(-1)}><Icon name="chevronLeft" size="s" /></button>
          <span className="ek-calendar__label">{yearSelector ? MONTHS[m] : `${MONTHS[m]} ${y}`}</span>
          <button type="button" aria-label="Next month" className="ek-btn ek-btn--tertiary ek-btn--icon" onClick={() => nav(1)}><Icon name="chevronRight" size="s" /></button>
        </div>
      )}
      <div className="ek-calendar__grid">
        {DOW.map((d, i) => <span key={'w' + i} className="ek-calendar__dow">{d}</span>)}
        {Array.from({ length: startDow }, (_, i) => prev - startDow + i + 1).map((d) => (
          <span key={'p' + d} className="ek-calendar__day is-muted"><span className="ek-calendar__num">{d}</span></span>
        ))}
        {Array.from({ length: days }, (_, i) => i + 1).map((d) => (
          <span key={d} className={cx('ek-calendar__day', cls(d))} onClick={() => pick(d)}><span className="ek-calendar__num">{d}</span></span>
        ))}
        {Array.from({ length: trailing }, (_, i) => i + 1).map((d) => (
          <span key={'n' + d} className="ek-calendar__day is-muted"><span className="ek-calendar__num">{d}</span></span>
        ))}
      </div>
      {buttonLabel && (
        <button type="button" className="ek-btn ek-btn--primary ek-btn--sm" style={{ width: '100%', marginTop: 'var(--spacing-m)' }} onClick={onApply}>{buttonLabel}</button>
      )}
    </div>
  );
}
