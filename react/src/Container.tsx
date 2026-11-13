import { Children, type ReactNode } from 'react';
import { cx } from './cx';

/** Container structures (Figma variants) → column spans on the 12-column grid. */
export const CONTAINER_STRUCTURES = {
  '100%': [12], '50% + 50%': [6, 6], '33% + 33% + 33%': [4, 4, 4], '25% + 25% + 25% + 25%': [3, 3, 3, 3],
  '8% + 84% + 8%': [1, 10, 1], '16% + 66% + 16%': [2, 8, 2], '25% + 50% + 25%': [3, 6, 3],
  '8% + 42% + 42% + 8%': [1, 5, 5, 1], '16% + 34% + 34% + 16%': [2, 4, 4, 2],
  '42% + 58%': [5, 7], '34% + 66%': [4, 8], '25% + 75%': [3, 9], '16% + 84%': [2, 10],
  '58% + 42%': [7, 5], '66% + 34%': [8, 4], '75% + 25%': [9, 3], '84% + 16%': [10, 2],
} as const;

export type ContainerStructure = keyof typeof CONTAINER_STRUCTURES;

export interface ContainerProps {
  /** Column structure on the 12-column grid. Default `100%`. */
  structure?: ContainerStructure;
  /** One child per column (Column 01–04 slots), in order. */
  children?: ReactNode;
  className?: string;
}

/** Layout frame on a 12-column grid with the system's margins and gutters; each child fills one column. */
export function Container({ structure = '100%', children, className }: ContainerProps) {
  const spans = CONTAINER_STRUCTURES[structure];
  const items = Children.toArray(children);
  return (
    <div className={cx('ek-container', className)}>
      {spans.map((span, i) => (
        <div key={i} className="ek-container__col" style={{ ['--ek-span' as string]: span }}>{items[i]}</div>
      ))}
    </div>
  );
}
