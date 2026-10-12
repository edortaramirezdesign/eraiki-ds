import { PlainCell, Label, Icon } from '@eraiki/react';

export const Kinds = () => (
  <div style={{ display: 'flex', width: 640 }}>
    <PlainCell>Ane Etxeberria</PlainCell>
    <PlainCell kind="amount">1,240.00</PlainCell>
    <PlainCell kind="label"><Label kind="success" dot>Paid</Label></PlainCell>
    <PlainCell kind="icon"><Icon name="check" /></PlainCell>
  </div>
);
export const Disabled = () => (
  <div style={{ display: 'flex', width: 320 }}>
    <PlainCell disabled>Archived</PlainCell>
    <PlainCell kind="amount" disabled>0.00</PlainCell>
  </div>
);
