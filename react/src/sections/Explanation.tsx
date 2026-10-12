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

export interface Explanation001Props extends TextProps, Pick<SectionActions, 'primaryAction' | 'onPrimaryAction'> {
  /** Full-bleed background photo behind the card. */
  image?: string;
}

/** Explanation 001 — full-bleed image banner with a contained Text group card (top-left). */
export function Explanation001({ label, title, children, primaryAction, onPrimaryAction, image = sectionImages.banner, className }: Explanation001Props) {
  return (
    <div className={cx('ek-explain', className)} style={bg(image)}>
      <TextGroup kind="contained" label={label} title={title}
        action={primaryAction ? <Button onClick={onPrimaryAction}>{primaryAction}</Button> : undefined}>{children}</TextGroup>
    </div>
  );
}

export interface Explanation002Props extends TextProps, SectionActions {
  /** Supporting portrait photo (3:4). */
  image?: string;
  /** Which column leads: text on the left (default) or the image. */
  order?: 'text-image' | 'image-text';
}

/** Explanation 002 — two columns: text group (large heading, body, two actions) + a supporting image. */
export function Explanation002({ label, title, children, image = sectionImages.portrait, order = 'text-image', className, ...actions }: Explanation002Props) {
  const text = (
    <div className="ek-textgroup ek-explain2__text">
      <div className="ek-textgroup__top"><Head label={label} title={title} size="l" /><Body>{children}</Body></div>
      <Actions {...actions} />
    </div>
  );
  const media = <div className="ek-explain2__media"><img src={image} alt="" loading="lazy" /></div>;
  return <div className={cx('ek-explain2', className)}>{order === 'image-text' ? <>{media}{text}</> : <>{text}{media}</>}</div>;
}

export interface Explanation003Props extends TextProps, SectionActions {
  /** Photo filling the image card. */
  image?: string;
  /** Which card leads: the text card (default) or the image card. */
  order?: 'text-image' | 'image-text';
}

/** Explanation 003 — two equal cards side by side: a tinted text card and an image card. */
export function Explanation003({ label, title, children, image = sectionImages.landscape, order = 'text-image', className, ...actions }: Explanation003Props) {
  const text = (
    <div className="ek-explain3__text"><div className="ek-textgroup">
      <div className="ek-textgroup__top"><Head label={label} title={title} size="l" /><Body>{children}</Body></div>
      <Actions {...actions} />
    </div></div>
  );
  const media = <div className="ek-explain3__media" style={bg(image)} />;
  return <div className={cx('ek-explain3', className)}>{order === 'image-text' ? <>{media}{text}</> : <>{text}{media}</>}</div>;
}

export interface Explanation004Props extends Pick<SectionActions, 'primaryAction' | 'onPrimaryAction'> {
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

/** Explanation 004 — header over a row of three equal panels: two images and a text card with a primary action. */
export function Explanation004({ label, title, cardLabel, cardTitle, children, primaryAction, onPrimaryAction, images = [sectionImages.portrait2, sectionImages.portrait3], className }: Explanation004Props) {
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

export interface Explanation005Props extends TextProps {
  /** Photos of the scrolling row (the set loops seamlessly). Defaults to six samples. */
  images?: string[];
}

/** Explanation 005 — text intro (left half, heading XL, no action) over a full-bleed, continuously scrolling row of images. */
export function Explanation005({ label, title, children, images, className }: Explanation005Props) {
  const imgs = images?.length ? images : Array(6).fill(sectionImages.portrait);
  const group = <div className="ek-explain5__mgroup">{imgs.map((src, i) => <div key={i} className="ek-explain5__img" style={bg(src)} />)}</div>;
  return (
    <div className={cx('ek-explain5', className)}>
      <div className="ek-explain5__contained">
        <div className="ek-explain5__text ek-textgroup"><div className="ek-textgroup__top"><Head label={label} title={title} size="xl" /><Body>{children}</Body></div></div>
      </div>
      <div className="ek-explain5__fluid"><div className="ek-explain5__marquee">{group}{group}</div></div>
    </div>
  );
}

export interface Explanation006Props extends TextProps, Pick<SectionActions, 'primaryAction' | 'onPrimaryAction'> {
  /** Full-bleed photo behind the dark card. */
  background?: string;
  /** Photo in the card's right column. */
  image?: string;
}

/** Explanation 006 — dark card over a full-bleed background image: heading top-left, body + primary action bottom-left, image on the right. */
export function Explanation006({ label, title, children, primaryAction, onPrimaryAction, background = sectionImages.backdrop, image = sectionImages.portrait, className }: Explanation006Props) {
  return (
    <div className={cx('ek-explain6', className)} style={bg(background)}>
      <div className="ek-explain6__card theme-dark">
        <div className="ek-explain6__col">
          <Head label={label} title={title} size="xl" />
          <div className="ek-explain6__foot"><Body>{children}</Body><Primary primaryAction={primaryAction} onPrimaryAction={onPrimaryAction} /></div>
        </div>
        <div className="ek-explain6__media" style={bg(image)} />
      </div>
    </div>
  );
}
