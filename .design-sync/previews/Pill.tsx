import { Pill } from '@eraiki/react';

export const States = () => (
  <div style={{ display: 'flex', gap: 8 }}>
    <Pill>Design</Pill>
    <Pill defaultSelected>Development</Pill>
    <Pill disabled>Marketing</Pill>
    <Pill disabled defaultSelected>Sales</Pill>
  </div>
);
