import { Checkbox } from '@eraiki/react';

export const States = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <Checkbox>Send me product updates</Checkbox>
    <Checkbox defaultChecked>Remember this device</Checkbox>
    <Checkbox indeterminate>Select all</Checkbox>
  </div>
);
export const ErrorAndDisabled = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <Checkbox error>I accept the terms and conditions</Checkbox>
    <Checkbox disabled>Unavailable option</Checkbox>
    <Checkbox disabled defaultChecked>Included in your plan</Checkbox>
  </div>
);
export const WithoutLabel = () => (
  <div style={{ display: 'flex', gap: 12 }}>
    <Checkbox />
    <Checkbox defaultChecked />
  </div>
);
