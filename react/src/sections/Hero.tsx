import type { ReactNode } from 'react';
import { cx } from '../cx';
import { Button } from '../Button';
import { Head, Body, Primary, Actions, Col, scrim, type SectionActions } from './parts';
import { sectionImages } from './images';

export interface HeroImageSliderProps extends Pick<SectionActions, 'primaryAction' | 'onPrimaryAction'> {
  /** Uppercase eyebrow above the headline. */
  label?: ReactNode;
  /** Headline (heading XL). */
  title?: ReactNode;
  /** Supporting paragraph. */
  children?: ReactNode;
  /** Full-bleed background photo (a dark scrim is applied on top). */
  image?: string;
  /** Shows the previous / next arrow buttons (for a rotating hero). */
  showNav?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  className?: string;
}

/** Hero Image Slider — Container 50% + 50% over a full-bleed image: text + primary action lower-left, prev/next arrows lower-right. */
export function HeroImageSlider({ label, title, children, image = sectionImages.landscape, primaryAction, onPrimaryAction, showNav = true, onPrevious, onNext, className }: HeroImageSliderProps) {
  return (
    <div className={cx('ek-hero-frame', className)}>
      <div className="ek-container ek-hero theme-dark" style={scrim(image)}>
        <Col span={6} className="ek-hero__textcol">
          <div className="ek-textgroup ek-hero__text">
            <div className="ek-textgroup__top"><Head label={label} title={title} size="xl" /><Body>{children}</Body></div>
            <Primary primaryAction={primaryAction} onPrimaryAction={onPrimaryAction} />
          </div>
        </Col>
        <Col span={6} className="ek-hero__navcol">
          {showNav && (
            <div className="ek-hero__nav">
              <Button variant="secondary" icon="chevronLeft" aria-label="Previous" onClick={onPrevious} />
              <Button variant="secondary" icon="chevronRight" aria-label="Next" onClick={onNext} />
            </div>
          )}
        </Col>
      </div>
    </div>
  );
}

export interface HeroSplitColumnsProps extends Pick<SectionActions, 'primaryAction' | 'onPrimaryAction'> {
  label?: ReactNode;
  /** Headline (heading XL), left column. */
  title?: ReactNode;
  /** Paragraph in the narrower right column, above the button. */
  children?: ReactNode;
  /** Full-screen background photo (a dark scrim is applied on top). */
  image?: string;
  className?: string;
}

/** Hero Split Columns — Container 50% + 50% over a full-screen image; headline bottom-left, paragraph + primary action bottom-right (max 480). */
export function HeroSplitColumns({ label, title, children, image = sectionImages.landscape, primaryAction, onPrimaryAction, className }: HeroSplitColumnsProps) {
  return (
    <div className={cx('ek-container ek-hero2 theme-dark', className)} style={scrim(image)}>
      <Col span={6} className="ek-hero2__headcol">
        <div className="ek-hero2__heading-group">
          {label && <div className="ek-textgroup__eyebrow">{label}</div>}
          {title && <h2 className="ek-textgroup__title ek-heading-xl">{title}</h2>}
        </div>
      </Col>
      <Col span={6} className="ek-hero2__asidecol">
        <div className="ek-hero2__aside">
          <Body>{children}</Body>
          <Primary primaryAction={primaryAction} onPrimaryAction={onPrimaryAction} />
        </div>
      </Col>
    </div>
  );
}

const g = sectionImages.gallery;
const DEFAULT_GALLERY: string[] = [g[1], g[0], g[2], g[3], g[4], g[0], g[2], g[3]];

export interface HeroMarqueeGalleryProps extends SectionActions {
  label?: ReactNode;
  /** Headline (heading L on desktop, XL on mobile), centered. */
  title?: ReactNode;
  /** Centered intro paragraph. */
  children?: ReactNode;
  /** Images of the scrolling row, alternating square / tall (the set loops seamlessly). */
  images?: string[];
  className?: string;
}

/** Hero Marquee Gallery — two Containers 100%: a centered intro over a full-bleed, auto-scrolling row of mixed-size images. */
export function HeroMarqueeGallery({ label, title, children, primaryAction, onPrimaryAction, secondaryAction, onSecondaryAction, images = DEFAULT_GALLERY, className }: HeroMarqueeGalleryProps) {
  const group = (
    <div className="ek-hero3__group" style={{ ['--ek-marquee-items' as string]: images.length }}>
      {images.map((src, i) => <img key={i} className={cx('ek-hero3__img', i % 2 === 1 && 'ek-hero3__img--tall')} src={src} alt="" loading="lazy" />)}
    </div>
  );
  return (
    <div className={cx('ek-hero3', className)}>
      <div className="ek-container ek-sec-intro"><Col span={12}>
        <div className="ek-hero3__intro">
          <Head label={label} title={title} size="l" mobileSize="xl" className="ek-hero3__head" />
          <Body>{children}</Body>
          <Actions primaryAction={primaryAction} onPrimaryAction={onPrimaryAction} secondaryAction={secondaryAction} onSecondaryAction={onSecondaryAction} />
        </div>
      </Col></div>
      <div className="ek-container ek-sec-strip"><Col span={12}>
        <div className="ek-hero3__strip"><div className="ek-hero3__lane">{group}{group}</div></div>
      </Col></div>
    </div>
  );
}
