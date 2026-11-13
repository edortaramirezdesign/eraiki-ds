import { useState, type ReactNode } from 'react';
import { cx } from '../cx';
import { Icon, type IconName } from '../Icon';
import { Head, Body, Actions, Col, type SectionActions } from './parts';
import { sectionImages } from './images';

interface IntroProps {
  /** Uppercase eyebrow above the heading. */
  label?: ReactNode;
  /** Section heading (heading L). */
  title?: ReactNode;
  className?: string;
}

export interface FeatureItem {
  title: ReactNode;
  text?: ReactNode;
  /** Icon in the feature's box (defaults to `info`). */
  icon?: IconName;
}

export interface ValuesFeaturesIconGridProps extends IntroProps, SectionActions {
  /** Intro paragraph under the heading. */
  children?: ReactNode;
  /** Feature cards in a row (designed for four). */
  items: FeatureItem[];
}

/** Values & Features Icon Grid — two Containers: centered intro with two actions (100%) above feature cards (25% × 4: icon, title, copy). */
export function ValuesFeaturesIconGrid({ label, title, children, items, className, ...actions }: ValuesFeaturesIconGridProps) {
  return (
    <div className={cx('ek-values1', className)}>
      <div className="ek-container ek-values1__top"><Col span={12}>
        <div className="ek-values1__intro">
          <Head label={label} title={title} size="l" className="ek-values1__head" />
          <Body>{children}</Body>
          <Actions {...actions} />
        </div>
      </Col></div>
      <div className="ek-container ek-values1__boxes">
        {items.map((it, i) => (
          <Col key={i} span={3}>
            <div className="ek-values1__card">
              <span className="ek-textgroup__icon"><Icon name={it.icon ?? 'info'} /></span>
              <h3 className="ek-textgroup__title">{it.title}</h3>
              {it.text && <p className="ek-textgroup__body">{it.text}</p>}
            </div>
          </Col>
        ))}
      </div>
    </div>
  );
}

export interface ValuesFeaturesHighlightListProps extends IntroProps {
  /** Feature list; the active item is highlighted and expands to show its text. */
  items: FeatureItem[];
  /** Index of the item open initially (uncontrolled). */
  defaultActive?: number;
  /** Controlled active index. */
  active?: number;
  onActiveChange?: (index: number) => void;
  /** Square photo on the right. */
  image?: string;
}

/** Values & Features Highlight List — Container 100% (no margin, 4XL inset): heading + an expandable feature list (one open at a time) beside a square image. */
export function ValuesFeaturesHighlightList({ label, title, items, defaultActive = 0, active, onActiveChange, image = sectionImages.portrait, className }: ValuesFeaturesHighlightListProps) {
  const [inner, setInner] = useState(defaultActive);
  const current = active ?? inner;
  const select = (i: number) => { setInner(i); onActiveChange?.(i); };
  return (
    <div className={cx('ek-container ek-values2', className)}><Col span={12} className="ek-values2__inner"><div className="ek-values2__row">
      <div className="ek-values2__col">
        <div className="ek-values2__intro"><Head label={label} title={title} size="l" /></div>
        <div className="ek-values2__list">
          {items.map((it, i) => (
            <button key={i} type="button" className={cx('ek-values2__item', i === current && 'is-active')} aria-expanded={i === current} onClick={() => select(i)}>
              <span className="ek-values2__icon"><Icon name={it.icon ?? 'info'} /></span>
              <span className="ek-values2__text">
                <span className="ek-textgroup__title">{it.title}</span>
                <span className="ek-values2__body"><span className="ek-values2__body-inner"><span className="ek-textgroup__body ek-body-m">{it.text}</span></span></span>
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="ek-values2__mediacol"><div className="ek-values2__media"><img src={image} alt="" loading="lazy" /></div></div>
    </div></Col></div>
  );
}

export interface NumberedItem {
  title: ReactNode;
  text?: ReactNode;
}

export interface ValuesFeaturesNumberedListProps extends IntroProps {
  /** Numbered rows (01., 02.… added automatically), split by thin rules. */
  items: NumberedItem[];
  /** Photo on the left (5:4). */
  image?: string;
}

/** Values & Features Numbered List — two Containers: heading (100%), then an image beside a numbered list (50% + 50%). */
export function ValuesFeaturesNumberedList({ label, title, items, image = sectionImages.portrait, className }: ValuesFeaturesNumberedListProps) {
  return (
    <div className={cx('ek-values3', className)}>
      <div className="ek-container ek-values3__top"><Col span={12}><div className="ek-values3__head"><Head label={label} title={title} size="l" /></div></Col></div>
      <div className="ek-container ek-values3__row">
        <Col span={6}><div className="ek-values3__media"><img src={image} alt="" loading="lazy" /></div></Col>
        <Col span={6} className="ek-values3__listcol"><div className="ek-values3__list">
          {items.map((it, i) => (
            <div key={i} className="ek-values3__item">
              <div className="ek-values3__label">
                <span className="ek-values3__num ek-label-m">{String(i + 1).padStart(2, '0')}.</span>
                <span className="ek-values3__title ek-body-l ek-strong">{it.title}</span>
              </div>
              {it.text && <p className="ek-values3__desc ek-body-m">{it.text}</p>}
            </div>
          ))}
        </div></Col>
      </div>
    </div>
  );
}

export interface IllustratedItem {
  title: ReactNode;
  text?: ReactNode;
  /** Illustration URL (defaults to the DS's abstract illustrations, by position). */
  illustration?: string;
}

export interface ValuesFeaturesStaggeredCardsProps extends IntroProps, SectionActions {
  /** Intro paragraph under the heading. */
  children?: ReactNode;
  /** Three staggered cards: title, illustration, copy. */
  items: IllustratedItem[];
}

/** Values & Features Staggered Cards — two Containers: centered intro with two actions (100%) over three staggered cards (33% × 3: title, illustration, copy). */
export function ValuesFeaturesStaggeredCards({ label, title, children, items, className, ...actions }: ValuesFeaturesStaggeredCardsProps) {
  return (
    <div className={cx('ek-values4', className)}>
      <div className="ek-container ek-values4__top"><Col span={12}>
        <div className="ek-values4__intro">
          <Head label={label} title={title} size="l" />
          <Body>{children}</Body>
          <Actions {...actions} />
        </div>
      </Col></div>
      <div className="ek-container ek-values4__grid">
        {items.map((it, i) => (
          <Col key={i} span={4} className="ek-values4__col">
            <div className="ek-values4__card">
              <h3 className="ek-textgroup__title">{it.title}</h3>
              <div className="ek-values4__illus"><img src={it.illustration ?? sectionImages.illustrations[i % 3]} alt="" /></div>
              {it.text && <p className="ek-textgroup__body">{it.text}</p>}
            </div>
          </Col>
        ))}
      </div>
    </div>
  );
}
