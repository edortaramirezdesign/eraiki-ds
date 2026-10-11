import { Button, ButtonGroup } from '@eraiki/react';

export const Horizontal = () => (
  <ButtonGroup>
    <Button>Confirm</Button>
    <Button variant="secondary">Cancel</Button>
    <Button variant="tertiary">Skip</Button>
  </ButtonGroup>
);
export const Vertical = () => (
  <ButtonGroup vertical>
    <Button>Confirm</Button>
    <Button variant="secondary">Cancel</Button>
    <Button variant="tertiary">Skip</Button>
  </ButtonGroup>
);
export const Fill = () => (
  <div style={{ width: 360 }}>
    <ButtonGroup fill>
      <Button>Accept</Button>
      <Button variant="secondary">Decline</Button>
    </ButtonGroup>
  </div>
);
