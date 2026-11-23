// Saas sections (Figma page 004): product UI blocks — Table, Notifications, KPIs.
// Same markup and classes as the live builders in js/sections.js.
import type { ReactNode } from 'react';
import { cx } from '../cx';
import { Button } from '../Button';
import { Icon, type IconName } from '../Icon';
import { Label, type LabelProps } from '../Label';
import { Switch } from '../Switch';
import { Dropdown, type DropdownOption } from '../Dropdown';

/* ------------------------------------------------------------------ Table */

export interface TableFilter {
  /** Placeholder shown while nothing is selected. */
  placeholder?: string;
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export interface TableProps {
  /** Table title (heading S). */
  title?: ReactNode;
  /** Text next to the switch in the header (omit to hide the switch). */
  switchLabel?: ReactNode;
  switchChecked?: boolean;
  onSwitchChange?: (checked: boolean) => void;
  /** Dropdown filters in the header (desktop; behind the menu button on mobile). */
  filters?: TableFilter[];
  /** Menu button shown instead of the controls on mobile. */
  onMenu?: () => void;
  /** Column headings (Featured cells). */
  columns?: ReactNode[];
  /** Rows of values, one Plain cell per column. */
  rows?: ReactNode[][];
  className?: string;
}

const LOREM = 'Lorem ipsum';
const DEFAULT_COLUMNS = Array.from({ length: 8 }, () => LOREM);
const DEFAULT_ROWS = Array.from({ length: 13 }, () => DEFAULT_COLUMNS);
const DEFAULT_FILTERS: TableFilter[] = Array.from({ length: 3 }, () => ({ placeholder: 'Lorem ipsum...', options: ['Lorem ipsum', 'Dolor sit', 'Amet'] }));

/** Table — a header (title, switch and dropdown filters) over Cells columns: a Featured header cell over Plain cells per column. On mobile the controls move behind a menu button and the table scrolls sideways with the first column pinned. */
export function Table({ title = LOREM, switchLabel = LOREM, switchChecked, onSwitchChange, filters = DEFAULT_FILTERS, onMenu, columns = DEFAULT_COLUMNS, rows = DEFAULT_ROWS, className }: TableProps) {
  return (
    <div className={cx('ek-saas', className)}>
      <div className="ek-table1">
        <div className="ek-table1__head">
          <h3 className="ek-table1__title ek-heading-s">{title}</h3>
          <div className="ek-table1__options">
            {switchLabel !== undefined && switchLabel !== null && <Switch checked={switchChecked} onChange={onSwitchChange}>{switchLabel}</Switch>}
            {filters.map((f, i) => <Dropdown key={i} className="ek-table1__filter" options={f.options} value={f.value} onChange={f.onChange} placeholder={f.placeholder} />)}
          </div>
          <Button variant="secondary" icon="menu" aria-label="Table options" className="ek-table1__menu" onClick={onMenu} />
        </div>
        <div className="ek-table1__scroll">
          <div className="ek-table1__grid">
            {columns.map((c, ci) => (
              <div key={ci} className="ek-cells-column ek-table1__col">
                <div className="ek-cell-featured"><span className="ek-cell-featured__value">{c}</span></div>
                {rows.map((r, ri) => <div key={ri} className="ek-cell-plain"><span className="ek-cell-plain__content">{r[ci]}</span></div>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- Notifications */

export interface NotificationTask {
  icon?: IconName;
  title: ReactNode;
  /** Source and timing, e.g. "Discharge Agent · 14 min ago" (body M). */
  description?: ReactNode;
  /** Status label on the right (omit to hide it). */
  label?: ReactNode;
  labelKind?: LabelProps['kind'];
}

export interface NotificationsProps {
  /** Card heading (heading S). */
  title?: ReactNode;
  /** Counter label next to the heading, e.g. "7 waiting" (omit to hide it). */
  count?: ReactNode;
  tasks?: NotificationTask[];
  /** Label of the primary button that opens the full inbox (omit to hide it). */
  action?: ReactNode;
  onAction?: () => void;
  className?: string;
}

const DEFAULT_TASKS: NotificationTask[] = [
  { icon: 'home', title: 'Place 6 boarders on 5W and 6W', description: 'Bed Placement Agent · on hold until the feed catches up', label: 'Urgent' },
  { icon: 'logout', title: 'Fast-track 5 discharges on 6W', description: 'Discharge Agent · 14 min ago', label: 'Urgent' },
  { icon: 'truck', title: 'Accept ICU transfer from Valley', description: 'Transfer Agent · needs sign-off', label: 'Urgent' },
];

/** Notifications — a card with a heading and counter, the tasks waiting for a decision (icon tile, title, description, status label) and a primary action to open the full inbox. */
export function Notifications({ title = 'Needs your call', count = '7 waiting', tasks = DEFAULT_TASKS, action = 'Open agent inbox', onAction, className }: NotificationsProps) {
  return (
    <div className={cx('ek-saas', className)}>
      <section className="ek-notif1">
        <div className="ek-notif1__head">
          <h3 className="ek-notif1__heading ek-heading-s">{title}</h3>
          {count && <Label kind="info" dot>{count}</Label>}
        </div>
        <ul className="ek-notif1__tasks">
          {tasks.map((t, i) => (
            <li key={i} className="ek-notif1__task">
              <div className="ek-notif1__main">
                {t.icon && <span className="ek-notif1__tile"><Icon name={t.icon} /></span>}
                <div className="ek-notif1__text">
                  <span className="ek-notif1__title ek-body-l">{t.title}</span>
                  {t.description && <span className="ek-notif1__desc ek-body-m">{t.description}</span>}
                </div>
              </div>
              {t.label && <Label kind={t.labelKind || 'alert'} dot>{t.label}</Label>}
            </li>
          ))}
        </ul>
        {action && <div className="ek-notif1__foot"><Button iconRight="chevronRight" onClick={onAction}>{action}</Button></div>}
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------- KPIs */

export type KpiTone = 'info' | 'success' | 'alert' | 'error';

export interface Kpi {
  label: ReactNode;
  value: ReactNode;
  /** Unit after the value, in heading M (e.g. "%"). */
  unit?: ReactNode;
  /** Short context below the value (omit to hide it — "Show caption"). */
  caption?: ReactNode;
  /** Tone of the icon tile. */
  tone?: KpiTone;
  /** Icon in the tile; defaults to the tone's icon. Pass `null` to hide it ("Show icon"). */
  icon?: IconName | null;
  /** Status label on the right (omit to hide it — "Show status"). */
  status?: ReactNode;
  statusKind?: LabelProps['kind'];
  /** Makes the card a link (Default / Hover / Active states on the border). */
  href?: string;
  onClick?: () => void;
}

export interface KPIsProps {
  /** One KPI card per metric; they wrap onto new rows on desktop and stack on mobile. */
  items?: Kpi[];
  className?: string;
}

const TONE_ICON: Record<KpiTone, IconName> = { info: 'infoCircle', success: 'checkCircle', alert: 'bell', error: 'alertCircle' };
const DEFAULT_KPIS: Kpi[] = (['info', 'success', 'alert', 'error'] as KpiTone[]).map((tone) => ({ tone, label: 'Messages today', value: '1.280', unit: '%', caption: 'Since midnight', status: 'Under 10 sec', statusKind: 'success' }));

/** KPIs — key-metric cards (icon tile by tone, label, status, value with unit, caption) in a wrapping row; one column on mobile. Each card is interactive (Default / Hover / Active). */
export function KPIs({ items = DEFAULT_KPIS, className }: KPIsProps) {
  return (
    <div className={cx('ek-saas', className)}>
      <div className="ek-kpi1">
        {items.map((k, i) => {
          const tone = k.tone || 'info';
          const icon = k.icon === undefined ? TONE_ICON[tone] : k.icon;
          return (
            <a key={i} className="ek-kpi1__card" href={k.href || '#'} onClick={(e) => { if (!k.href) e.preventDefault(); k.onClick?.(); }}>
              <span className="ek-kpi1__head">
                <span className="ek-kpi1__name">
                  {icon && <span className={`ek-kpi1__tile ek-kpi1__tile--${tone}`}><Icon name={icon} /></span>}
                  <span className="ek-kpi1__label ek-body-l ek-strong">{k.label}</span>
                </span>
                {k.status && <Label kind={k.statusKind || 'success'} dot>{k.status}</Label>}
              </span>
              <span className="ek-kpi1__body">
                <span className="ek-kpi1__value"><span className="ek-display-m">{k.value}</span>{k.unit && <span className="ek-heading-m">{k.unit}</span>}</span>
                {k.caption && <span className="ek-kpi1__caption ek-body-m">{k.caption}</span>}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
