import { TextGroup, Button } from '@eraiki/react';

export const Default = () => (
  <div style={{ width: 360 }}>
    <TextGroup icon label="Design systems" title="Build faster with shared components" action={<Button>Get started</Button>}>
      One source of truth for tokens, components and patterns, so every team ships consistent interfaces.
    </TextGroup>
  </div>
);
export const Contained = () => (
  <div style={{ width: 360 }}>
    <TextGroup kind="contained" background="var(--color-fill-plain-surface-standard-s)" icon label="Support" title="We're here to help" action={<Button variant="secondary">Contact us</Button>}>
      Our team answers in less than 24 hours, Monday to Friday.
    </TextGroup>
  </div>
);
export const TextOnly = () => (
  <div style={{ width: 360 }}>
    <TextGroup title="Simple pricing">Pay only for the seats you use. No hidden fees.</TextGroup>
  </div>
);
