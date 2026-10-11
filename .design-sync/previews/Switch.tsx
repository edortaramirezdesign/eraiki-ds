import { Switch } from '@eraiki/react';

export const States = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <Switch defaultChecked>Email notifications</Switch>
    <Switch>Dark mode</Switch>
    <Switch disabled>Two-factor authentication</Switch>
    <Switch disabled defaultChecked>Automatic backups</Switch>
  </div>
);
export const WithoutText = () => (
  <div style={{ display: 'flex', gap: 16 }}>
    <Switch defaultChecked />
    <Switch />
  </div>
);
