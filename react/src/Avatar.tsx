import type { ReactNode } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';
import type { BadgeColor } from './Badge';

export interface AvatarProps {
  /** Image URL. When omitted, shows `initials`, else the user placeholder icon. */
  src?: string;
  alt?: string;
  /** 1–2 letters shown when there is no image. */
  initials?: string;
  size?: 'small' | 'medium' | 'large';
  /** Shows a badge at the top-right: `true` = dot, or pass a count. */
  badge?: boolean | ReactNode;
  badgeColor?: BadgeColor;
  className?: string;
}

const SIZE = { small: 'sm', medium: 'md', large: 'lg' } as const;

/** Circular user avatar: image, initials or placeholder, with optional badge. */
export function Avatar({ src, alt = '', initials, size = 'medium', badge, badgeColor = 'primary', className }: AvatarProps) {
  const color = badgeColor !== 'primary' ? `ek-badge--${badgeColor}` : '';
  return (
    <span className={cx('ek-avatar', `ek-avatar--${SIZE[size]}`, className)}>
      {src ? <img src={src} alt={alt} /> : initials ? initials : <span className="ek-ic ek-avatar__ph"><Icon name="user" /></span>}
      {badge === true && <span className={cx('ek-badge', 'ek-badge--dot', color, 'ek-avatar__badge')} />}
      {badge !== undefined && badge !== false && badge !== true && <span className={cx('ek-badge', color, 'ek-avatar__badge')}>{badge}</span>}
    </span>
  );
}

export interface AvatarGroupProps {
  children?: ReactNode;
  className?: string;
}

/** Overlapping row of Avatars (put a `+N` Avatar with `initials` last). */
export function AvatarGroup({ children, className }: AvatarGroupProps) {
  return <span className={cx('ek-avatar-group', className)}>{children}</span>;
}
