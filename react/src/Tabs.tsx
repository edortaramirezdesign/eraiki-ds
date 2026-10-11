import type { ReactNode } from 'react';
import { cx } from './cx';
import { useControllable } from './useControllable';

export type TabItem = string | { value: string; label: ReactNode };

export interface TabsProps {
  items: TabItem[];
  /** Controlled selected value. */
  value?: string;
  /** Defaults to the first item. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const norm = (t: TabItem) => (typeof t === 'string' ? { value: t, label: t } : t);

/** Segmented tabs (desktop): selected tab gets the accent fill. Render the panel yourself from `value`. */
export function Tabs({ items, value, defaultValue, onChange, className }: TabsProps) {
  const list = items.map(norm);
  const [sel, setSel] = useControllable(value, defaultValue ?? list[0]?.value ?? '', onChange);
  return (
    <div className={cx('ek-tabs', className)} role="tablist">
      {list.map((t) => (
        <button key={t.value} type="button" role="tab" aria-selected={t.value === sel} className={cx('ek-tab', t.value === sel && 'is-on')}
          onClick={() => setSel(t.value)}>{t.label}</button>
      ))}
    </div>
  );
}
