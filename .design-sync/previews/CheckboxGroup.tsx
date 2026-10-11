import { Checkbox, CheckboxGroup } from '@eraiki/react';

export const Notifications = () => (
  <CheckboxGroup label="Notifications">
    <Checkbox defaultChecked>Email</Checkbox>
    <Checkbox defaultChecked>Push notifications</Checkbox>
    <Checkbox>SMS</Checkbox>
  </CheckboxGroup>
);
