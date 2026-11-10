import { Fragment, type ReactNode } from 'react';
import { cx } from '../cx';
import { Head, Body, Primary, Actions, type SectionActions } from './parts';
import { sectionImages } from './images';

export interface MarqueeLogoStripProps extends Pick<SectionActions, 'primaryAction' | 'onPrimaryAction'> {
  label?: ReactNode;
  /** Heading (heading M), centered. */
  title?: ReactNode;
  /** Centered intro paragraph. */
  children?: ReactNode;
  /** Logo image URLs for the scrolling strip (168×72, monochrome). Defaults to eight sample logos. */
  logos?: string[];
  className?: string;
}

/** Marquee Logo Strip — centered intro + a continuously scrolling strip of brand logos split by thin dividers. */
export function MarqueeLogoStrip({ label, title, children, primaryAction, onPrimaryAction, logos = sectionImages.logos, className }: MarqueeLogoStripProps) {
  const group = (
    <div className="ek-marquee1__group" style={{ ['--ek-marquee-items' as string]: logos.length }}>
      {logos.map((src, i) => (
        <Fragment key={i}>
          <img className="ek-marquee1__logo" src={src} alt="" loading="lazy" />
          <span className="ek-marquee1__divider" aria-hidden="true" />
        </Fragment>
      ))}
    </div>
  );
  return (
    <div className={cx('ek-marquee1', className)}>
      <div className="ek-marquee1__text">
        <Head label={label} title={title} size="m" className="ek-marquee1__head" />
        <Body>{children}</Body>
        <Primary primaryAction={primaryAction} onPrimaryAction={onPrimaryAction} />
      </div>
      <div className="ek-marquee1__strip"><div className="ek-marquee1__lane">{group}{group}</div></div>
    </div>
  );
}

export interface MarqueeLogoTilesProps extends SectionActions {
  label?: ReactNode;
  /** Heading (heading XL), centered. */
  title?: ReactNode;
  /** Centered intro paragraph. */
  children?: ReactNode;
  /**
   * Two rows of logo image URLs (shown at 48×48 inside 88×88 tiles, in their own colours).
   * The first row scrolls left, the second right. Defaults to the sample shapes from Figma.
   */
  rows?: [string[], string[]];
  className?: string;
}

/** Marquee Logo Tiles — centered intro + two rows of logo tiles scrolling in opposite directions, faded at the edges. */
export function MarqueeLogoTiles({ label, title, children, primaryAction, onPrimaryAction, secondaryAction, onSecondaryAction, rows = sectionImages.logoTiles, className }: MarqueeLogoTilesProps) {
  return (
    <div className={cx('ek-marquee2', className)}>
      <div className="ek-marquee2__intro">
        <Head label={label} title={title} size="xl" className="ek-marquee2__head" />
        <Body>{children}</Body>
        <Actions primaryAction={primaryAction} onPrimaryAction={onPrimaryAction} secondaryAction={secondaryAction} onSecondaryAction={onSecondaryAction} />
      </div>
      <div className="ek-marquee2__strip">
        {rows.map((logos, r) => {
          const group = (
            <div className="ek-marquee2__group" style={{ ['--ek-marquee-items' as string]: logos.length }}>
              {logos.map((src, i) => <span key={i} className="ek-marquee2__tile"><img src={src} alt="" loading="lazy" /></span>)}
            </div>
          );
          return <div key={r} className={cx('ek-marquee2__lane', r === 1 && 'ek-marquee2__lane--reverse')}>{group}{group}</div>;
        })}
      </div>
    </div>
  );
}
