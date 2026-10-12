// Shared bits of the section markup (js/sections.js): the text-group head with an
// h2 at a heading size, and the primary / secondary button pair.
import type { ReactNode } from 'react';
import { cx } from '../cx';
import { Button, ButtonGroup } from '../Button';

export type HeadingSize = 'xl' | 'l' | 'm';

export function Head({ label, title, size, className }: { label?: ReactNode; title?: ReactNode; size?: HeadingSize; className?: string }) {
  if (!label && !title) return null;
  return (
    <div className={cx('ek-textgroup__head', className)}>
      {label && <div className="ek-textgroup__eyebrow">{label}</div>}
      {title && <h2 className={cx('ek-textgroup__title', size && `ek-heading-${size}`)}>{title}</h2>}
    </div>
  );
}

export function Body({ children }: { children?: ReactNode }) {
  return children ? <p className="ek-textgroup__body">{children}</p> : null;
}

export interface SectionActions {
  /** Label of the primary button (omit to hide it). */
  primaryAction?: ReactNode;
  onPrimaryAction?: () => void;
  /** Label of the secondary button (omit to hide it). */
  secondaryAction?: ReactNode;
  onSecondaryAction?: () => void;
}

export function Primary({ primaryAction, onPrimaryAction }: SectionActions) {
  return primaryAction ? <Button onClick={onPrimaryAction}>{primaryAction}</Button> : null;
}

/** Primary + secondary pair in a ButtonGroup (a lone primary when no secondary). */
export function Actions(a: SectionActions) {
  if (!a.primaryAction && !a.secondaryAction) return null;
  return (
    <ButtonGroup>
      {a.primaryAction && <Button onClick={a.onPrimaryAction}>{a.primaryAction}</Button>}
      {a.secondaryAction && <Button variant="secondary" onClick={a.onSecondaryAction}>{a.secondaryAction}</Button>}
    </ButtonGroup>
  );
}

export const bg = (src: string) => ({ backgroundImage: `url("${src}")` });
export const scrim = (src: string) => ({ backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.2),rgba(0,0,0,.64)),url("${src}")` });
