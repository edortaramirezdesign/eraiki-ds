import type { ReactNode } from 'react';
import { cx } from './cx';

export type CellKind = 'text' | 'amount' | 'label' | 'icon';

export interface PlainCellProps {
  /** `amount` right-aligns tabular figures; `label`/`icon` center their content. */
  kind?: CellKind;
  disabled?: boolean;
  /** Text, amount, a `<Label>` or an `<Icon>`. */
  children?: ReactNode;
  className?: string;
}

/** Static data cell for tables and cell rows. */
export function PlainCell({ kind = 'text', disabled, children, className }: PlainCellProps) {
  return (
    <div className={cx('ek-cell-plain', kind !== 'text' && `ek-cell-plain--${kind}`, disabled && 'is-disabled', className)}>
      <span className="ek-cell-plain__content">{children}</span>
    </div>
  );
}

export interface LinkableCellProps {
  kind?: CellKind;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
}

/** Interactive (clickable / selectable) data cell. */
export function LinkableCell({ kind = 'text', selected, disabled, onClick, children, className }: LinkableCellProps) {
  return (
    <div role="button" tabIndex={disabled ? -1 : 0} aria-pressed={selected} aria-disabled={disabled || undefined}
      className={cx('ek-cell-linkable', kind !== 'text' && `ek-cell-linkable--${kind}`, selected && 'is-selected', disabled && 'is-disabled', className)}
      onClick={() => !disabled && onClick?.()}>
      <span className="ek-cell-linkable__content">{children}</span>
    </div>
  );
}

export interface FeaturedCellProps {
  /** Highlighted value; omit for the empty variant. */
  children?: ReactNode;
  className?: string;
}

/** Emphasised cell (e.g. a header or highlighted value) for cell rows. */
export function FeaturedCell({ children, className }: FeaturedCellProps) {
  return (
    <div className={cx('ek-cell-featured', className)}>
      {children !== undefined && <span className="ek-cell-featured__value">{children}</span>}
    </div>
  );
}

export interface CellsColumnProps {
  /** Header text, shown in a FeaturedCell at the top. Pass `null` for the empty header; omit for no header. */
  header?: ReactNode | null;
  /** PlainCell children, one per row — use one `kind` per column. */
  children?: ReactNode;
  /** `fixed` (default, 145px — override with `className`/CSS) or `fill` to take the available width. */
  width?: 'fixed' | 'fill';
  className?: string;
}

/** Vertical column of cells (a table column): a Featured header over Plain cells. */
export function CellsColumn({ header, children, width = 'fixed', className }: CellsColumnProps) {
  return (
    <div className={cx('ek-cells-column', width === 'fill' && 'ek-cells-column--fill', className)}>
      {header !== undefined && <FeaturedCell>{header === null ? undefined : header}</FeaturedCell>}
      {children}
    </div>
  );
}
