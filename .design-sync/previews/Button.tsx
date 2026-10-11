import { Button } from '@eraiki/react';

export const Variants = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Button variant="primary">Save changes</Button>
    <Button variant="secondary">Cancel</Button>
    <Button variant="tertiary">Skip</Button>
  </div>
);
export const Sizes = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Button>Continue</Button>
    <Button size="small">Continue</Button>
  </div>
);
export const WithIcons = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Button iconLeft="plus">Add item</Button>
    <Button variant="secondary" iconRight="chevronRight">Next</Button>
    <Button icon="plus" aria-label="Add" />
  </div>
);
export const Disabled = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Button disabled>Save changes</Button>
    <Button variant="secondary" disabled>Cancel</Button>
  </div>
);
