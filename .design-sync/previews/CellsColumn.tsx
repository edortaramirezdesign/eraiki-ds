import { CellsColumn, PlainCell, Label } from '@eraiki/react';

export const Table = () => (
  <div style={{ display: 'flex', width: 640 }}>
    <CellsColumn header="Client" width="fill"><PlainCell>Mendesaltaren</PlainCell><PlainCell>Eraiki Studio</PlainCell></CellsColumn>
    <CellsColumn header="Amount" width="fill"><PlainCell kind="amount">1,240.00</PlainCell><PlainCell kind="amount">860.00</PlainCell></CellsColumn>
    <CellsColumn header="Status" width="fill"><PlainCell kind="label"><Label kind="success" dot>Paid</Label></PlainCell><PlainCell kind="label"><Label kind="alert" dot>Pending</Label></PlainCell></CellsColumn>
  </div>
);
export const Single = () => (
  <CellsColumn header="Lorem ipsum"><PlainCell>Lorem ipsum</PlainCell><PlainCell>Lorem ipsum</PlainCell><PlainCell>Lorem ipsum</PlainCell></CellsColumn>
);
