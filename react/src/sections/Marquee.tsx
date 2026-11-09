import { Fragment, type ReactNode } from 'react';
import { cx } from '../cx';
import { Head, Body, Primary, type SectionActions } from './parts';
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
