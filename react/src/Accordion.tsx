import { useState, type ReactNode } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface AccordionItem {
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Index open initially (`null` = all closed). Only one item is open at a time. */
  defaultOpen?: number | null;
  className?: string;
}

/** Vertical stack of headers that expand one section at a time. */
export function Accordion({ items, defaultOpen = 0, className }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className={cx('ek-accordion', className)}>
      {items.map((it, i) => (
        <div key={i} className={cx('ek-accordion__item', open === i && 'is-open')}>
          <button type="button" className="ek-accordion__head" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
            <span className="ek-accordion__title">{it.title}</span>
            <span className="ek-btn ek-btn--tertiary ek-btn--sm ek-btn--icon"><Icon name="chevronDown" /></span>
          </button>
          <div className="ek-accordion__body">{it.content}</div>
        </div>
      ))}
    </div>
  );
}
