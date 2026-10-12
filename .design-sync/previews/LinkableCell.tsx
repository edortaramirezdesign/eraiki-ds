import { LinkableCell, Label, Icon } from '@eraiki/react';

export const Kinds = () => (
  <div style={{ display: 'flex', width: 640 }}>
    <LinkableCell>Invoice #1024</LinkableCell>
    <LinkableCell kind="amount">1,240.00</LinkableCell>
    <LinkableCell kind="label"><Label kind="info" dot>Pending</Label></LinkableCell>
    <LinkableCell kind="icon"><Icon name="chevronRight" /></LinkableCell>
  </div>
);
export const States = () => (
  <div style={{ display: 'flex', width: 480 }}>
    <LinkableCell>Default</LinkableCell>
    <LinkableCell selected>Selected</LinkableCell>
    <LinkableCell disabled>Disabled</LinkableCell>
  </div>
);
