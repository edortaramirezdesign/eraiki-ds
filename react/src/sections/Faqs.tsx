import { useState, type ReactNode } from 'react';
import { cx } from '../cx';
import { Button } from '../Button';
import { Head, Body, Primary, Col, type SectionActions } from './parts';

export interface FaqItem {
  /** The question (heading S). */
  question: ReactNode;
  /** The answer, shown when the question is open (body L). */
  answer: ReactNode;
}

export interface FAQsSplitListProps extends Pick<SectionActions, 'primaryAction' | 'onPrimaryAction'> {
  /** Uppercase eyebrow above the heading. */
  label?: ReactNode;
  /** Section heading (heading L), left column. */
  title?: ReactNode;
  /** Paragraph under the heading. */
  children?: ReactNode;
  /** Questions in the right column. */
  items?: FaqItem[];
  /** Index open initially (uncontrolled); `null` starts with all closed. */
  defaultOpen?: number | null;
  /** Controlled open index (`null` = all closed). */
  open?: number | null;
  onOpenChange?: (index: number | null) => void;
  className?: string;
}

const Q = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?';
const A = 'Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.';
const DEFAULT_ITEMS: FaqItem[] = Array.from({ length: 6 }, () => ({ question: Q, answer: A }));

/** FAQs Split List — Container 34% + 66%: a heading, paragraph and primary action on the left and expandable questions on the right (one open at a time). */
export function FAQsSplitList({ label = 'Lorem ipsum', title = 'Nam a bibendum nunc eget tincidunt eros', children = A, primaryAction = 'Lorem ipsum', onPrimaryAction, items = DEFAULT_ITEMS, defaultOpen = 0, open, onOpenChange, className }: FAQsSplitListProps) {
  const [inner, setInner] = useState<number | null>(defaultOpen);
  const current = open !== undefined ? open : inner;
  const toggle = (i: number) => { const next = current === i ? null : i; setInner(next); onOpenChange?.(next); };
  return (
    <div className={cx('ek-section ek-container ek-faq1', className)}>
      <Col span={4}>
        <div className="ek-textgroup ek-faq1__head">
          <div className="ek-textgroup__top"><Head label={label} title={title} size="l" /><Body>{children}</Body></div>
          <Primary primaryAction={primaryAction} onPrimaryAction={onPrimaryAction} />
        </div>
      </Col>
      <Col span={8}>
        <div className="ek-faq1__list">
          {items.map((it, i) => {
            const isOpen = current === i;
            return (
              <div key={i} className={cx('ek-faq1__item', isOpen && 'is-open')}>
                <div className="ek-faq1__q" onClick={() => toggle(i)}>
                  <h3 className="ek-faq1__question ek-heading-s">{it.question}</h3>
                  <Button variant="tertiary" size="small" icon={isOpen ? 'minus' : 'plus'} aria-label={isOpen ? 'Hide answer' : 'Show answer'} aria-expanded={isOpen} className="ek-faq1__toggle" onClick={(e) => { e.stopPropagation(); toggle(i); }} />
                </div>
                <div className="ek-faq1__a"><div className="ek-faq1__a-inner"><p className="ek-textgroup__body">{it.answer}</p></div></div>
              </div>
            );
          })}
        </div>
      </Col>
    </div>
  );
}
