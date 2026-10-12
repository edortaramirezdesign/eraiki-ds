import { TextArea } from '@eraiki/react';

export const Empty = () => <div style={{ width: 360 }}><TextArea label="Message:" placeholder="Tell us about your project…" /></div>;
export const WithCount = () => (
  <div style={{ width: 360 }}><TextArea label="Bio:" required showCount maxLength={160} defaultValue="Product designer at Mendesaltaren. I love design systems." helperText="Shown on your public profile." /></div>
);
export const Error = () => <div style={{ width: 360 }}><TextArea label="Message:" required error="Please write a message." /></div>;
export const Disabled = () => <div style={{ width: 360 }}><TextArea label="Notes:" defaultValue="Locked by the administrator." disabled /></div>;
