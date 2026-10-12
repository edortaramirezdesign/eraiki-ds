import { cx } from './cx';

const RATIOS = { '1:1': '1/1', '5:4': '5/4', '4:3': '4/3', '3:2': '3/2', '16:10': '16/10', '16:9': '16/9', '2:1': '2/1', '21:9': '21/9', golden: '1.618/1' } as const;

export interface ImageProps {
  src: string;
  alt?: string;
  /** Frame aspect ratio (landscape). */
  ratio?: keyof typeof RATIOS;
  /** `vertical` flips the ratio to portrait. */
  orientation?: 'horizontal' | 'vertical';
  /** CSS width of the frame (height follows the ratio). */
  width?: number | string;
  className?: string;
}

/** Image in a fixed-ratio, rounded frame (object-fit: cover). */
export function Image({ src, alt = '', ratio = '4:3', orientation = 'horizontal', width = '100%', className }: ImageProps) {
  let r: string = RATIOS[ratio];
  if (orientation === 'vertical') { const [a, b] = r.split('/'); r = `${b}/${a}`; }
  return <span className={cx('ek-image', className)} style={{ width, aspectRatio: r }}><img src={src} alt={alt} /></span>;
}
