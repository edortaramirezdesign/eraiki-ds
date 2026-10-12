import { cx } from './cx';
import { Icon } from './Icon';
import { useControllable } from './useControllable';

export interface PaginationProps {
  /** Total number of pages. */
  pages: number;
  page?: number;
  defaultPage?: number;
  onChange?: (page: number) => void;
  /** How many leading page numbers to show before collapsing to "… last". */
  visible?: number;
  /** Show the previous / next arrows. */
  arrows?: boolean;
  className?: string;
}

/** Page selector with numbered pages, ellipsis and prev/next arrows. */
export function Pagination({ pages, page, defaultPage = 1, onChange, visible = 4, arrows = true, className }: PaginationProps) {
  const [cur, setCur] = useControllable(page, defaultPage, onChange);
  const go = (p: number) => setCur(Math.min(pages, Math.max(1, p)));
  const head = Math.min(pages, Math.max(visible, cur));
  const list = Array.from({ length: head }, (_, i) => i + 1);
  return (
    <nav className={cx('ek-pagination', className)} aria-label="Pagination">
      {arrows && <span role="button" aria-label="Previous page" className="ek-page" onClick={() => go(cur - 1)}><Icon name="chevronLeft" size="s" /></span>}
      {list.map((p) => <span key={p} role="button" aria-current={p === cur ? 'page' : undefined} className={cx('ek-page', p === cur && 'is-on')} onClick={() => go(p)}>{p}</span>)}
      {head < pages && (
        <>
          {head < pages - 1 && <span className="ek-page ek-page--ellipsis">…</span>}
          <span role="button" className={cx('ek-page', cur === pages && 'is-on')} onClick={() => go(pages)}>{pages}</span>
        </>
      )}
      {arrows && <span role="button" aria-label="Next page" className="ek-page" onClick={() => go(cur + 1)}><Icon name="chevronRight" size="s" /></span>}
    </nav>
  );
}
