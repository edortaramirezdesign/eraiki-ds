import { useState } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';
import { useControllable } from './useControllable';

export interface MobileTabsProps {
  items: string[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Start expanded (useful for static mockups). */
  defaultOpen?: boolean;
  className?: string;
}

/** Mobile tabs: a collapsible selector showing the current tab; tap to choose another. */
export function MobileTabs({ items, value, defaultValue, onChange, defaultOpen = false, className }: MobileTabsProps) {
  const [sel, setSel] = useControllable(value, defaultValue ?? items[0] ?? '', onChange);
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={cx('ek-tabm', open && 'is-open', className)}>
      <div className="ek-tabm__head" role="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span className="ek-tabm__label">{sel}</span>
        <span className="ek-btn ek-btn--tertiary ek-btn--icon"><Icon name="chevronDown" /></span>
      </div>
      <div className="ek-tabm__list" role="tablist">
        {items.map((t) => (
          <span key={t} role="tab" aria-selected={t === sel} className={cx('ek-tabm__opt', t === sel && 'is-on')} onClick={() => { setSel(t); setOpen(false); }}>{t}</span>
        ))}
      </div>
    </div>
  );
}
