import type { ReactNode } from 'react';
import { cx } from '../cx';
import { Button } from '../Button';
import { Head, Col } from './parts';
import { sectionImages } from './images';

export interface TeamMember {
  /** Member's name (heading S). */
  name: string;
  /** Short identifier shown above the name, e.g. `No. 0412` (label M, accent colour). */
  number?: string;
  /** Role and place, e.g. `Carpenter · Davenport` (body M). */
  role?: string;
  /** 3:4 portrait. */
  image: string;
}

export interface TeamPortraitGridProps {
  /** Uppercase eyebrow above the heading. */
  label?: ReactNode;
  /** Section heading (heading L). */
  title?: ReactNode;
  /** Label of the tertiary action bottom-right of the header (omit to hide it). */
  action?: ReactNode;
  onAction?: () => void;
  /** Members, four per row on desktop and two on mobile. */
  members?: TeamMember[];
  className?: string;
}

const p = sectionImages.team;
const DEFAULT_MEMBERS: TeamMember[] = [
  { name: 'Ana R.', number: 'No. 0412', role: 'Carpenter · Davenport', image: p[0] },
  { name: 'Tomás V.', number: 'No. 0087', role: 'Line cook · Waddell', image: p[1] },
  { name: 'Ruth O.', number: 'No. 0028', role: 'Nurse · Davenport', image: p[2] },
  { name: 'Jesse L.', number: 'No. 0339', role: 'Electrician · Santa Cruz', image: p[3] },
  { name: 'Mara K.', number: 'No. 0263', role: 'Teacher · Scott Creek', image: p[4] },
  { name: 'Kai M.', number: 'No. 0204', role: 'Shaper · Año Nuevo', image: p[5] },
  { name: 'Ines D.', number: 'No. 0151', role: 'Dentist · Pigeon Point', image: p[6] },
  { name: 'Nico B.', number: 'No. 0377', role: 'Fisherman · Half Moon Bay', image: p[7] },
];

/** Team Portrait Grid — a label + heading with a tertiary action (Container 50% + 50%) over rows of Member cards (Container 25% × 4; two columns on mobile): a 3:4 portrait, the member number over the name, and the role. */
export function TeamPortraitGrid({ label = 'Lorem ipsum', title = 'Nam a bibendum nunc eget tincidunt eros', action = 'Lorem ipsum', onAction, members = DEFAULT_MEMBERS, className }: TeamPortraitGridProps) {
  const rows: TeamMember[][] = [];
  for (let i = 0; i < members.length; i += 4) rows.push(members.slice(i, i + 4));
  return (
    <div className={cx('ek-section ek-team1', className)}>
      <div className="ek-container ek-team1__top">
        <Col span={6} className="ek-team1__headcol">
          <div className="ek-textgroup ek-team1__head"><div className="ek-textgroup__top"><Head label={label} title={title} size="l" /></div></div>
        </Col>
        <Col span={6} className="ek-team1__actioncol">{action && <Button variant="tertiary" onClick={onAction}>{action}</Button>}</Col>
      </div>
      {rows.map((row, r) => (
        <div key={r} className={cx('ek-container ek-team1__row', r === rows.length - 1 && 'ek-team1__row--last')}>
          {row.map((m, i) => (
            <Col key={i} span={3}>
              <figure className="ek-team1__card">
                <div className="ek-team1__img"><img src={m.image} alt="" loading="lazy" /></div>
                <figcaption className="ek-team1__info">
                  <span className="ek-team1__namerow">{m.number && <span className="ek-team1__no ek-label-m">{m.number}</span>}<span className="ek-team1__name ek-heading-s">{m.name}</span></span>
                  {m.role && <span className="ek-team1__role ek-body-m">{m.role}</span>}
                </figcaption>
              </figure>
            </Col>
          ))}
        </div>
      ))}
    </div>
  );
}
