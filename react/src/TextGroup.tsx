import type { ReactNode } from 'react';
import { cx } from './cx';
import { textGroupIconSvg } from './builders';

export interface TextGroupProps {
  /** Small uppercase eyebrow above the title. */
  label?: ReactNode;
  title?: ReactNode;
  /** Body copy. */
  children?: ReactNode;
  /** Action under the text (usually a primary `<Button>`). */
  action?: ReactNode;
  /** Shows the DS's decorative icon tile; pass a node to use your own icon. */
  icon?: boolean | ReactNode;
  /** `contained` puts the group on a padded surface card. */
  kind?: 'default' | 'contained';
  /** Surface color for `contained` (a token, e.g. "var(--color-fill-plain-surface-standard-s)"); defaults to the base surface. */
  background?: string;
  /** Title size override — a font-size token, e.g. "var(--font-size-heading-l)". */
  titleSize?: string;
  className?: string;
}

/** Content block: icon · eyebrow · title · body · action — the building brick of sections. */
export function TextGroup({ label, title, children, action, icon, kind = 'default', background, titleSize, className }: TextGroupProps) {
  const titleStyle = titleSize ? { fontSize: titleSize, lineHeight: titleSize.replace('--font-size-', '--line-height-') } : undefined;
  return (
    <div className={cx('ek-textgroup', kind === 'contained' && 'ek-textgroup--contained', className)} style={kind === 'contained' && background ? { background } : undefined}>
      <div className="ek-textgroup__top">
        {icon === true && <span className="ek-textgroup__icon" dangerouslySetInnerHTML={{ __html: textGroupIconSvg() }} />}
        {icon && icon !== true && <span className="ek-textgroup__icon">{icon}</span>}
        {(label || title) && (
          <div className="ek-textgroup__head">
            {label && <div className="ek-textgroup__eyebrow">{label}</div>}
            {title && <h3 className="ek-textgroup__title" style={titleStyle}>{title}</h3>}
          </div>
        )}
        {children && <p className="ek-textgroup__body">{children}</p>}
      </div>
      {action}
    </div>
  );
}
