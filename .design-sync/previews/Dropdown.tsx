import { Dropdown } from '@eraiki/react';

const countries = ['Spain', 'France', 'Portugal', 'Germany', 'Italy'];

export const Placeholder = () => (
  <Dropdown label="Country:" options={countries} placeholder="Select a country" />
);
export const Selected = () => (
  <Dropdown label="Country:" options={countries} defaultValue="Spain" />
);
export const Open = () => (
  <div style={{ height: 300 }}>
    <Dropdown label="Country:" options={countries} defaultValue="France" defaultOpen />
  </div>
);
