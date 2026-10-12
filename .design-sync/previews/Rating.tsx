import { Rating } from '@eraiki/react';

export const Values = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <Rating defaultValue={5} readOnly />
    <Rating defaultValue={4} />
    <Rating defaultValue={2} />
    <Rating defaultValue={0} />
  </div>
);
