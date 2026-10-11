import { useState, type ReactNode } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface BannerProps {
  kind?: 'info' | 'error' | 'alert' | 'success';
  /** Bold first line. */
  title: ReactNode;
  /** Optional supporting text. */
  children?: ReactNode;
  /** Optional action, rendered as a direct child: `<Button variant="tertiary" size="small" style={{alignSelf:'center'}}>`. */
  action?: ReactNode;
  /** Shows the close button; the banner hides itself on click. */
  closable?: boolean;
  onClose?: () => void;
  className?: string;
}

const ICON = { info: 'info', error: 'error', alert: 'alert', success: 'success' } as const;

/** Inline feedback message with semantic color and icon. */
export function Banner({ kind = 'info', title, children, action, closable, onClose, className }: BannerProps) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className={cx('ek-banner', `ek-banner--${kind}`, className)} role={kind === 'error' ? 'alert' : 'status'}>
      <span className="ek-banner__ico"><Icon name={ICON[kind]} /></span>
      <div style={{ flex: 1 }}>
        <div className="ek-banner__title">{title}</div>
        {children && <div className="ek-banner__body">{children}</div>}
      </div>
      {action}
      {closable && (
        <button type="button" aria-label="Close" className="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm" style={{ marginLeft: 'auto' }}
          onClick={() => { setOpen(false); onClose?.(); }}>
          <Icon name="closeSm" size="s" />
        </button>
      )}
    </div>
  );
}
