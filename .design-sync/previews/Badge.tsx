import { Badge, Button } from '@eraiki/react';

export const Colors = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Badge>3</Badge>
    <Badge color="error">12</Badge>
    <Badge color="alert">5</Badge>
    <Badge color="info">8</Badge>
    <Badge color="success">1</Badge>
  </div>
);
export const Dots = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Badge />
    <Badge color="error" />
    <Badge color="alert" />
    <Badge color="info" />
    <Badge color="success" />
  </div>
);
export const OnAnElement = () => (
  <span style={{ position: 'relative', display: 'inline-block' }}>
    <Button variant="secondary" icon="info" aria-label="Notifications" />
    <span style={{ position: 'absolute', top: -6, right: -6 }}><Badge color="error">5</Badge></span>
  </span>
);
