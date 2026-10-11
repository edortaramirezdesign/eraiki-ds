import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from './cx';
import { Icon, type IconName } from './Icon';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Visual level: accent fill, neutral fill, or text-only. */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** `medium` = 40px tall, `small` = 32px. */
  size?: 'medium' | 'small';
  /** Icon before the label. */
  iconLeft?: IconName;
  /** Icon after the label. */
  iconRight?: IconName;
  /** Icon-only square button (pass `aria-label`). */
  icon?: IconName;
  /** Button label (rendered uppercase by the DS). */
  children?: ReactNode;
}

/** Eraiki button — primary / secondary / tertiary, two sizes, optional icons. */
export function Button({
  variant = 'primary', size = 'medium', iconLeft, iconRight, icon, disabled, className, children, type = 'button', ...rest
}: ButtonProps) {
  const cls = cx(
    'ek-btn', `ek-btn--${variant}`, size === 'small' && 'ek-btn--sm',
    icon ? 'ek-btn--icon' : iconLeft ? 'ek-btn--icon-left' : iconRight ? 'ek-btn--icon-right' : '',
    disabled && 'is-disabled', className,
  );
  return (
    <button type={type} className={cls} disabled={disabled} {...rest}>
      {icon ? <Icon name={icon} /> : (
        <>
          {iconLeft && <Icon name={iconLeft} />}
          {children}
          {iconRight && <Icon name={iconRight} />}
        </>
      )}
    </button>
  );
}

export interface ButtonGroupProps {
  /** Stack vertically instead of a row. */
  vertical?: boolean;
  /** Buttons stretch to share the full width equally. */
  fill?: boolean;
  children?: ReactNode;
  className?: string;
}

/** Spaced set of buttons (typically Primary + Secondary + Tertiary). */
export function ButtonGroup({ vertical, fill, children, className }: ButtonGroupProps) {
  return <div className={cx('ek-btn-group', vertical && 'ek-btn-group--vertical', fill && 'ek-btn-group--fill', className)}>{children}</div>;
}
