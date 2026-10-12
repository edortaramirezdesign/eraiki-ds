import { CellsRow, FeaturedCell, PlainCell, LinkableCell, Label } from '@eraiki/react';

export const Table = () => (
  <div style={{ width: 640 }}>
    <CellsRow><FeaturedCell>Client</FeaturedCell><FeaturedCell>Amount</FeaturedCell><FeaturedCell>Status</FeaturedCell></CellsRow>
    <CellsRow><PlainCell>Mendesaltaren</PlainCell><PlainCell kind="amount">1,240.00</PlainCell><PlainCell kind="label"><Label kind="success" dot>Paid</Label></PlainCell></CellsRow>
    <CellsRow><PlainCell>Eraiki Studio</PlainCell><PlainCell kind="amount">860.00</PlainCell><PlainCell kind="label"><Label kind="alert" dot>Pending</Label></PlainCell></CellsRow>
  </div>
);
export const Linkable = () => (
  <div style={{ width: 640 }}>
    <CellsRow><LinkableCell>Overview</LinkableCell><LinkableCell selected>Invoices</LinkableCell><LinkableCell>Payments</LinkableCell><LinkableCell>Settings</LinkableCell></CellsRow>
  </div>
);
