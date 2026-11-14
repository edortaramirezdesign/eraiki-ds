import type { ReactNode } from 'react';
import { cx } from '../cx';
import { Button } from '../Button';
import { Head, Col } from './parts';
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
export function TestimonialsImageCards({ label = 'Testimonials', title = 'Why entrepreneurs trust our templates?', items = DEFAULT_ITEMS, showNav = true, previousDisabled = true, nextDisabled = false, onPrevious, onNext, className }: TestimonialsImageCardsProps) {
  return (
    <div className={cx('ek-testi1', className)}>
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
