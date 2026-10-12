import { Breadcrumb } from '@eraiki/react';

export const ThreeLevels = () => <Breadcrumb items={[{ label: 'Home', href: '#' }, { label: 'Sneakers', href: '#' }, { label: 'Air Jordan 1 Retro' }]} />;
export const FiveLevels = () => (
  <Breadcrumb items={[{ label: 'Home', href: '#' }, { label: 'Men', href: '#' }, { label: 'Shoes', href: '#' }, { label: 'Sneakers', href: '#' }, { label: 'Air Jordan 1' }]} />
);
