import type { ReactNode } from 'react';
import { cx } from '../cx';
import { Button } from '../Button';
import { Head, Body, Primary, scrim, type SectionActions } from './parts';
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

/** Hero Image Slider — full-bleed image hero; text lower-left, primary action + prev/next arrows along the base. */
export function HeroImageSlider({ label, title, children, image = sectionImages.landscape, primaryAction, onPrimaryAction, showNav = true, onPrevious, onNext, className }: HeroImageSliderProps) {
  return (
    <div className={cx('ek-hero theme-dark', className)} style={scrim(image)}>
      <div className="ek-hero__row--text">
        <div className="ek-textgroup ek-hero__text"><div className="ek-textgroup__top">
          <Head label={label} title={title} size="xl" />
          <Body>{children}</Body>
        </div></div>
      </div>
      <div className="ek-hero__actions">
        {primaryAction ? <Primary primaryAction={primaryAction} onPrimaryAction={onPrimaryAction} /> : <span />}
        {showNav && (
          <div className="ek-hero__nav">
            <Button variant="secondary" icon="chevronLeft" aria-label="Previous" onClick={onPrevious} />
            <Button variant="secondary" icon="chevronRight" aria-label="Next" onClick={onNext} />
          </div>
        )}
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

/** Hero Split Columns — full-screen image; headline bottom-left, paragraph + primary action in a column on the right. */
export function HeroSplitColumns({ label, title, children, image = sectionImages.landscape, primaryAction, onPrimaryAction, className }: HeroSplitColumnsProps) {
  return (
    <div className={cx('ek-hero2 theme-dark', className)} style={scrim(image)}>
      <div className="ek-hero2__row">
        <div className="ek-hero2__heading-group">
          {label && <div className="ek-textgroup__eyebrow">{label}</div>}
          {title && <h2 className="ek-textgroup__title ek-heading-xl">{title}</h2>}
        </div>
        <div className="ek-hero2__aside">
          <Body>{children}</Body>
          <Primary primaryAction={primaryAction} onPrimaryAction={onPrimaryAction} />
        </div>
      </div>
    </div>
  );
}
