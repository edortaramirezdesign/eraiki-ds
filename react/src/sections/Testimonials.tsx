import type { ReactNode } from 'react';
import { cx } from '../cx';
import { Button } from '../Button';
import { Head, Body, Actions, Col, type SectionActions } from './parts';
import { Icon } from '../Icon';
import { sectionImages } from './images';

export interface Testimonial {
  /** The quote (heading S), including its quotation marks. */
  quote: ReactNode;
  /** Author's name. */
  name: ReactNode;
  /** Author's role or company. */
  role?: ReactNode;
  /** Portrait photo behind the quote (a dark scrim is added at the bottom). */
  image: string;
}

export interface TestimonialsImageCardsProps {
  /** Uppercase eyebrow above the heading. */
  label?: ReactNode;
  /** Section heading (heading L). */
  title?: ReactNode;
  /** Testimonial cards — four per row on desktop, a swipeable carousel on mobile. */
  items?: Testimonial[];
  /** Shows the previous / next arrows. */
  showNav?: boolean;
  /** Disables the previous arrow (e.g. at the start of the carousel). */
  previousDisabled?: boolean;
  /** Disables the next arrow (e.g. at the end of the carousel). */
  nextDisabled?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  className?: string;
}

const SCRIM = 'linear-gradient(to bottom,rgba(0,0,0,.16) 0%,rgba(0,0,0,.1) 45%,rgba(0,0,0,.86) 100%)';
const t = sectionImages.testimonials;
const DEFAULT_ITEMS: Testimonial[] = [
  { quote: '“Their fast shipping & branding made us stand out. We save hours every day”', name: 'Julek Cesar', role: 'CEO of Lorem ipsum', image: t[0] },
  { quote: '“We’ve really made a mark in the market. It’s incredible how much time we save each day!”', name: 'Klaudia Czarna', role: 'CEO of Dolor sit', image: t[1] },
  { quote: '“With their speedy shipping and eye-catching branding, we’ve truly distinguished ourselves”', name: 'Jessica Mercedes', role: 'Marketer at Amet', image: t[2] },
  { quote: '“Their fast shipping & branding made us stand out. We save hours every day”', name: 'Julek Cesar', role: 'CEO of Lorem ipsum', image: t[0] },
];

/** Testimonials Image Cards — a label + heading with prev/next arrows (Container 50% + 50%) over portrait cards with the quote and author (Container 25% × 4; a carousel on mobile). */
export function TestimonialsImageCards({ label = 'Testimonials', title = 'Nam a bibendum nunc eget tincidunt eros', items = DEFAULT_ITEMS, showNav = true, previousDisabled = true, nextDisabled = false, onPrevious, onNext, className }: TestimonialsImageCardsProps) {
  return (
    <div className={cx('ek-section ek-testi1', className)}>
      <div className="ek-container ek-testi1__top">
        <Col span={6} className="ek-testi1__headcol">
          <div className="ek-textgroup ek-testi1__head"><div className="ek-textgroup__top"><Head label={label} title={title} size="l" /></div></div>
        </Col>
        <Col span={6} className="ek-testi1__navcol">
          {showNav && (
            <div className="ek-testi1__nav">
              <Button variant="secondary" icon="chevronLeft" aria-label="Previous" disabled={previousDisabled} onClick={onPrevious} />
              <Button variant="secondary" icon="chevronRight" aria-label="Next" disabled={nextDisabled} onClick={onNext} />
            </div>
          )}
        </Col>
      </div>
      <div className="ek-container ek-testi1__track">
        {items.map((it, i) => (
          <Col key={i} span={3}>
            <figure className="ek-testi1__card theme-dark" style={{ backgroundImage: `${SCRIM},url("${it.image}")` }}>
              <blockquote className="ek-testi1__quote ek-heading-s">{it.quote}</blockquote>
              <figcaption className="ek-testi1__author">
                <span className="ek-testi1__name ek-body-m ek-strong">{it.name}</span>
                {it.role && <span className="ek-testi1__role ek-detail-m">{it.role}</span>}
              </figcaption>
            </figure>
          </Col>
        ))}
      </div>
    </div>
  );
}

export interface QuoteTestimonial {
  /** The quote (heading S). */
  quote: ReactNode;
  /** Author's name. */
  name: ReactNode;
  /** Author's role or company. */
  role?: ReactNode;
  /** Author's photo (Avatar, medium). */
  avatar?: string;
}

export interface TestimonialsQuoteMarqueeProps extends SectionActions {
  label?: ReactNode;
  /** Section heading (heading L), centered. */
  title?: ReactNode;
  /** Intro paragraph. */
  children?: ReactNode;
  /** Quote cards of the auto-scrolling row (the set loops seamlessly). */
  items?: QuoteTestimonial[];
  className?: string;
}

const Q2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem leo, mollis non diam eu, venenatis feugiat est.';
const QUOTE_DEFAULT: QuoteTestimonial[] = [0, 1, 2, 0, 1].map((i) => ({ quote: Q2, name: 'Lorem ipsum', role: 'Lorem ipsum dolor', avatar: t[i] }));

/** Testimonials Quote Marquee — a centered intro over a full-bleed, auto-scrolling row of quote cards with the author's avatar. */
export function TestimonialsQuoteMarquee({ label = 'Lorem ipsum', title = 'Nam a bibendum nunc eget tincidunt eros', children = 'Cras lorem leo, mollis non diam eu, venenatis feugiat est. Nam scelerisque iaculis bibendum. Integer quis rhoncus leo. Fusce in sodales lorem.', primaryAction = 'Lorem ipsum', secondaryAction = 'Lorem ipsum', onPrimaryAction, onSecondaryAction, items = QUOTE_DEFAULT, className }: TestimonialsQuoteMarqueeProps) {
  const group = (
    <div className="ek-testi2__group" style={{ ['--ek-marquee-items' as string]: items.length }}>
      {items.map((it, i) => (
        <figure key={i} className="ek-testi2__card">
          <div className="ek-testi2__quote"><span className="ek-testi2__icon"><Icon name="quote" /></span><blockquote className="ek-heading-s">{it.quote}</blockquote></div>
          <figcaption className="ek-testi2__author">
            <span className="ek-avatar ek-avatar--md">{it.avatar && <img src={it.avatar} alt="" loading="lazy" />}</span>
            <span className="ek-testi2__who"><span className="ek-testi2__name ek-body-l ek-strong">{it.name}</span>{it.role && <span className="ek-testi2__role ek-detail-m">{it.role}</span>}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
  return (
    <div className={cx('ek-section ek-testi2', className)}>
      <div className="ek-container ek-sec-intro"><Col span={12}>
        <div className="ek-testi2__intro">
          <Head label={label} title={title} size="l" />
          <Body>{children}</Body>
          <Actions primaryAction={primaryAction} onPrimaryAction={onPrimaryAction} secondaryAction={secondaryAction} onSecondaryAction={onSecondaryAction} />
        </div>
      </Col></div>
      <div className="ek-container ek-sec-strip"><Col span={12}>
        <div className="ek-testi2__strip"><div className="ek-testi2__lane">{group}{group}</div></div>
      </Col></div>
    </div>
  );
}
