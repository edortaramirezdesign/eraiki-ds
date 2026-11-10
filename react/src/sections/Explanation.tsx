import type { ReactNode } from 'react';
import { cx } from '../cx';
import { Button } from '../Button';
import { TextGroup } from '../TextGroup';
import { Head, Body, Actions, Primary, bg, type SectionActions } from './parts';
import { sectionImages } from './images';

interface TextProps {
  /** Uppercase eyebrow above the heading. */
  label?: ReactNode;
  /** Section heading. */
  title?: ReactNode;
  /** Body copy. */
  children?: ReactNode;
  className?: string;
}

export interface ExplanationBannerCardProps extends TextProps, Pick<SectionActions, 'primaryAction' | 'onPrimaryAction'> {
  /** Full-bleed background photo behind the card. */
  image?: string;
}

/** Explanation Banner Card — full-bleed image banner with a contained Text group card (top-left). */
export function ExplanationBannerCard({ label, title, children, primaryAction, onPrimaryAction, image = sectionImages.landscape, className }: ExplanationBannerCardProps) {
  return (
    <div className={cx('ek-explain', className)} style={bg(image)}>
      <TextGroup kind="contained" label={label} title={title}
        action={primaryAction ? <Button onClick={onPrimaryAction}>{primaryAction}</Button> : undefined}>{children}</TextGroup>
    </div>
  );
}

export interface ExplanationSplitMediaProps extends TextProps, SectionActions {
  /** Supporting portrait photo (3:4). */
  image?: string;
  /** Which column leads: text on the left (default) or the image. */
  order?: 'text-image' | 'image-text';
}

/** Explanation Split Media — two columns: text group (large heading, body, two actions) + a supporting image. */
export function ExplanationSplitMedia({ label, title, children, image = sectionImages.portrait, order = 'text-image', className, ...actions }: ExplanationSplitMediaProps) {
  const text = (
    <div className="ek-textgroup ek-explain2__text">
      <div className="ek-textgroup__top"><Head label={label} title={title} size="l" /><Body>{children}</Body></div>
      <Actions {...actions} />
    </div>
  );
  const media = <div className="ek-explain2__media"><img src={image} alt="" loading="lazy" /></div>;
  return <div className={cx('ek-explain2', className)}>{order === 'image-text' ? <>{media}{text}</> : <>{text}{media}</>}</div>;
}

export interface ExplanationTwinCardsProps extends TextProps, SectionActions {
  /** Photo filling the image card. */
  image?: string;
  /** Which card leads: the text card (default) or the image card. */
  order?: 'text-image' | 'image-text';
}

/** Explanation Twin Cards — two equal cards side by side: a tinted text card and an image card. */
export function ExplanationTwinCards({ label, title, children, image = sectionImages.landscape, order = 'text-image', className, ...actions }: ExplanationTwinCardsProps) {
  const text = (
    <div className="ek-explain3__text"><div className="ek-textgroup">
      <div className="ek-textgroup__top"><Head label={label} title={title} size="l" mobileSize="xl" /><Body>{children}</Body></div>
      <Actions {...actions} />
    </div></div>
  );
  const media = <div className="ek-explain3__media" style={bg(image)} />;
  return <div className={cx('ek-explain3', className)}>{order === 'image-text' ? <>{media}{text}</> : <>{text}{media}</>}</div>;
}

export interface ExplanationTriplePanelProps extends Pick<SectionActions, 'primaryAction' | 'onPrimaryAction'> {
  /** Section eyebrow (header). */
  label?: ReactNode;
  /** Section heading (header). */
  title?: ReactNode;
  /** Eyebrow of the text card (third panel). */
  cardLabel?: ReactNode;
  /** Title of the text card. */
  cardTitle?: ReactNode;
  /** Body copy of the text card. */
  children?: ReactNode;
  /** The two image panels (portrait photos). */
  images?: [string, string];
  className?: string;
}

/** Explanation Triple Panel — header over a row of three equal panels: two images and a text card with a primary action. */
export function ExplanationTriplePanel({ label, title, cardLabel, cardTitle, children, primaryAction, onPrimaryAction, images = [sectionImages.portrait2, sectionImages.portrait3], className }: ExplanationTriplePanelProps) {
  return (
    <div className={cx('ek-explain4', className)}>
      <div className="ek-textgroup ek-explain4__head"><div className="ek-textgroup__top"><Head label={label} title={title} size="l" /></div></div>
      <div className="ek-explain4__block">
        {images.slice(0, 2).map((src, i) => <div key={i} className="ek-explain4__img" style={bg(src)} />)}
        <div className="ek-explain4__card">
          <TextGroup label={cardLabel} title={cardTitle}
            action={primaryAction ? <Button onClick={onPrimaryAction}>{primaryAction}</Button> : undefined}>{children}</TextGroup>
        </div>
      </div>
    </div>
  );
}

export interface ExplanationImageMarqueeProps extends TextProps {
  /** Photos of the scrolling row (the set loops seamlessly). Defaults to six samples. */
  images?: string[];
}

/** Explanation Image Marquee — text intro (left half, heading XL, no action) over a full-bleed, continuously scrolling row of images. */
export function ExplanationImageMarquee({ label, title, children, images, className }: ExplanationImageMarqueeProps) {
  const imgs = images?.length ? images : Array(6).fill(sectionImages.portrait);
  const group = <div className="ek-explain5__mgroup" style={{ ['--ek-marquee-items' as string]: imgs.length }}>{imgs.map((src, i) => <div key={i} className="ek-explain5__img" style={bg(src)} />)}</div>;
  return (
    <div className={cx('ek-explain5', className)}>
      <div className="ek-explain5__contained">
        <div className="ek-explain5__text ek-textgroup"><div className="ek-textgroup__top"><Head label={label} title={title} size="l" /><Body>{children}</Body></div></div>
      </div>
      <div className="ek-explain5__fluid"><div className="ek-explain5__marquee">{group}{group}</div></div>
    </div>
  );
}

export interface ExplanationDarkCardProps extends TextProps, Pick<SectionActions, 'primaryAction' | 'onPrimaryAction'> {
  /** Full-bleed photo behind the dark card. */
  background?: string;
  /** Photo in the card's right column. */
  image?: string;
}

/** Explanation Dark Card — dark card over a full-bleed background image: heading top-left, body + primary action bottom-left, image on the right. */
export function ExplanationDarkCard({ label, title, children, primaryAction, onPrimaryAction, background = sectionImages.backdrop, image = sectionImages.portrait, className }: ExplanationDarkCardProps) {
  return (
    <div className={cx('ek-explain6', className)} style={bg(background)}>
      <div className="ek-explain6__card theme-dark">
        <div className="ek-explain6__col">
          <Head label={label} title={title} size="l" />
          <div className="ek-explain6__foot"><Body>{children}</Body><Primary primaryAction={primaryAction} onPrimaryAction={onPrimaryAction} /></div>
        </div>
        <div className="ek-explain6__media" style={bg(image)} />
      </div>
    </div>
  );
}
