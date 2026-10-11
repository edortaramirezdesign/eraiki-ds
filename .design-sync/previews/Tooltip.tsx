import { Tooltip, Button } from '@eraiki/react';

export const Top = () => (
  <div style={{ padding: '56px 120px 16px' }}><Tooltip text="Lorem ipsum sit amet" open /></div>
);
export const Bottom = () => (
  <div style={{ padding: '16px 120px 56px' }}><Tooltip text="Shown below the trigger" position="bottom" open /></div>
);
export const Right = () => (
  <div style={{ padding: '16px 220px 16px 16px' }}><Tooltip text="Shown on the right" position="right" open /></div>
);
export const CustomTrigger = () => (
  <div style={{ padding: '56px 120px 16px' }}>
    <Tooltip text="Copies the link to your clipboard" open><Button variant="secondary" size="small">Share</Button></Tooltip>
  </div>
);
