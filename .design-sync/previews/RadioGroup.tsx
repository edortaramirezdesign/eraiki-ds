import { RadioGroup } from '@eraiki/react';

export const Shipping = () => <RadioGroup label="Shipping" options={['Standard (3–5 days)', 'Express (24 h)', 'Pick up in store']} defaultValue="Express (24 h)" />;
export const NoSelection = () => <RadioGroup label="Choose one" options={['Option one', 'Option two', 'Option three']} />;
export const Disabled = () => (
  <RadioGroup label="Plan" defaultValue="pro" options={[{ value: 'free', label: 'Free' }, { value: 'pro', label: 'Pro' }, { value: 'team', label: 'Team (coming soon)', disabled: true }]} />
);
