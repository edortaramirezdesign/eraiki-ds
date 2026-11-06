import { useState, type ReactNode } from 'react';
import { cx } from '../cx';
import { Button } from '../Button';
import { Head, Body, Primary, Actions, scrim, type SectionActions } from './parts';
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

export interface GalleryTab {
  /** Tab label (e.g. "Buy"). */
  label: ReactNode;
  /** Images shown in the scrolling row while this tab is active (alternating square / tall). */
  images: string[];
}

const g = sectionImages.gallery;
const DEFAULT_GALLERY_TABS: GalleryTab[] = [
  { label: 'Comprar', images: [g[1], g[0], g[2], g[3], g[4], g[0]] },
  { label: 'Vender', images: [g[2], g[3], g[4], g[0], g[1], g[3]] },
  { label: 'Alquilar', images: [g[4], g[0], g[1], g[3], g[2], g[0]] },
];

export interface HeroMarqueeGalleryProps extends SectionActions {
  label?: ReactNode;
  /** Headline (heading XL), centered. */
  title?: ReactNode;
  /** Centered intro paragraph. */
  children?: ReactNode;
  /** Progress tabs; each one swaps the images of the scrolling row. */
  tabs?: GalleryTab[];
  /** Index of the tab active initially (uncontrolled). */
  defaultActive?: number;
  /** Controlled active tab. */
  active?: number;
  onActiveChange?: (index: number) => void;
  /** Seconds each tab stays active before moving to the next one (the progress bar's fill time). */
  interval?: number;
  /** Advance to the next tab automatically each time the bar fills. */
  autoAdvance?: boolean;
  className?: string;
}

/** Hero Marquee Gallery — centered intro over a full-bleed scrolling row of mixed-size images, switched by progress tabs. */
export function HeroMarqueeGallery({ label, title, children, primaryAction, onPrimaryAction, secondaryAction, onSecondaryAction, tabs = DEFAULT_GALLERY_TABS, defaultActive = 0, active, onActiveChange, interval = 6, autoAdvance = true, className }: HeroMarqueeGalleryProps) {
  const [inner, setInner] = useState(defaultActive);
  const current = Math.min(active ?? inner, Math.max(tabs.length - 1, 0));
  const select = (i: number) => { setInner(i); onActiveChange?.(i); };
  const images = tabs[current]?.images ?? [];
  const group = (
    <div className="ek-hero3__group">
      {images.map((src, i) => <img key={i} className={cx('ek-hero3__img', i % 2 === 1 && 'ek-hero3__img--tall')} src={src} alt="" loading="lazy" />)}
    </div>
  );
  return (
    <div className={cx('ek-hero3', className)} style={{ ['--ek-hero3-duration' as string]: `${interval}s` }}>
      <div className="ek-hero3__intro">
        <Head label={label} title={title} size="xl" className="ek-hero3__head" />
        <Body>{children}</Body>
        <Actions primaryAction={primaryAction} onPrimaryAction={onPrimaryAction} secondaryAction={secondaryAction} onSecondaryAction={onSecondaryAction} />
      </div>
      <div className="ek-hero3__strip"><div key={current} className="ek-hero3__lane">{group}{group}</div></div>
      {tabs.length > 0 && (
        <div className="ek-hero3__tabs" role="tablist">
          {tabs.map((t, i) => (
            <button key={i} type="button" role="tab" aria-selected={i === current} className={cx('ek-hero3__tab', i === current && 'is-active')} onClick={() => select(i)}>
              <span className="ek-hero3__tab-label">{t.label}</span>
              <span className="ek-hero3__track">
                <span className="ek-hero3__progress" onAnimationIteration={autoAdvance ? () => select((current + 1) % tabs.length) : undefined} />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
