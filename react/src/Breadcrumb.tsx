import { Fragment, type ReactNode } from 'react';
import { cx } from './cx';

export interface BreadcrumbItem {
  label: ReactNode;
  /** Link target; the last item is always rendered as the current page. */
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/** Hierarchical trail from the root to the current page. */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={cx('ek-crumb', className)} aria-label="Breadcrumb">
      {items.map((it, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="ek-crumb__sep" />}
          {i === items.length - 1
            ? <span className="ek-crumb__cur" aria-current="page">{it.label}</span>
            : <a href={it.href ?? '#'}>{it.label}</a>}
        </Fragment>
      ))}
    </nav>
  );
}
