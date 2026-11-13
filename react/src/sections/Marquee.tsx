import { Fragment, type ReactNode } from 'react';
import { cx } from '../cx';
import { Head, Body, Actions, Col, type SectionActions } from './parts';
import { sectionImages } from './images';

export interface MarqueeLogoStripProps extends SectionActions {
  label?: ReactNode;
  /** Heading (heading L), centered. */
  title?: ReactNode;
  /** Centered intro paragraph. */
  children?: ReactNode;
  /** Logo image URLs for the scrolling strip (168×72, monochrome). Defaults to eight sample logos. */
  logos?: string[];
  className?: string;
}

/** Marquee Logo Strip — two Containers 100%: centered intro + a continuously scrolling strip of brand logos split by thin dividers. */
export function MarqueeLogoStrip({ label, title, children, primaryAction, onPrimaryAction, secondaryAction, onSecondaryAction, logos = sectionImages.logos, className }: MarqueeLogoStripProps) {
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
      <div className="ek-container ek-sec-intro"><Col span={12}>
        <div className="ek-marquee1__text">
          <Head label={label} title={title} size="l" className="ek-marquee1__head" />
          <Body>{children}</Body>
          <Actions primaryAction={primaryAction} onPrimaryAction={onPrimaryAction} secondaryAction={secondaryAction} onSecondaryAction={onSecondaryAction} />
        </div>
      </Col></div>
      <div className="ek-container ek-sec-strip"><Col span={12}>
        <div className="ek-marquee1__strip"><div className="ek-marquee1__lane">{group}{group}</div></div>
      </Col></div>
    </div>
  );
}

export interface MarqueeLogoTilesProps extends SectionActions {
  label?: ReactNode;
  /** Heading (heading L), centered. */
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

/** Marquee Logo Tiles — two Containers 100%: centered intro + two rows of logo tiles scrolling in opposite directions, faded at the edges. */
export function MarqueeLogoTiles({ label, title, children, primaryAction, onPrimaryAction, secondaryAction, onSecondaryAction, rows = sectionImages.logoTiles, className }: MarqueeLogoTilesProps) {
  return (
    <div className={cx('ek-marquee2', className)}>
      <div className="ek-container ek-sec-intro"><Col span={12}>
        <div className="ek-marquee2__intro">
          <Head label={label} title={title} size="l" className="ek-marquee2__head" />
          <Body>{children}</Body>
          <Actions primaryAction={primaryAction} onPrimaryAction={onPrimaryAction} secondaryAction={secondaryAction} onSecondaryAction={onSecondaryAction} />
        </div>
      </Col></div>
      <div className="ek-container ek-sec-strip"><Col span={12}>
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
      </Col></div>
    </div>
  );
}
