import { Pill, PillGroup } from '@eraiki/react';

export const Filters = () => (
  <div style={{ width: 420 }}>
    <PillGroup>
      <Pill defaultSelected>All</Pill>
      <Pill>Design</Pill>
      <Pill>Development</Pill>
      <Pill>Marketing</Pill>
      <Pill>Product</Pill>
      <Pill>Research</Pill>
    </PillGroup>
  </div>
);
