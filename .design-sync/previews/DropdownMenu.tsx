import { DropdownMenu } from '@eraiki/react';

export const Single = () => (
  <DropdownMenu defaultValue="recent" options={[
    { value: 'recent', label: 'Most recent' }, { value: 'popular', label: 'Most popular' },
    { value: 'price-asc', label: 'Price: low to high' }, { value: 'price-desc', label: 'Price: high to low' },
  ]} />
);
export const MultiWithButton = () => (
  <DropdownMenu kind="multi" defaultValue={['design', 'dev']} buttonLabel="Apply" options={[
    { value: 'design', label: 'Design' }, { value: 'dev', label: 'Development' },
    { value: 'marketing', label: 'Marketing' }, { value: 'sales', label: 'Sales', disabled: true },
  ]} />
);
export const WithIconsAndDivider = () => (
  <DropdownMenu options={[
    { value: 'profile', label: 'Profile', icon: 'user', badge: true }, { value: 'calendar', label: 'Calendar', icon: 'calendar', divider: true },
    { value: 'logout', label: 'Log out', icon: 'close' },
  ]} />
);
