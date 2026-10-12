import { Divider } from '@eraiki/react';

export const Horizontal = () => (
  <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 24 }}>
    <Divider />
    <Divider level="low" />
  </div>
);
export const Vertical = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, height: 40 }}>
    <span className="ek-body-m">Profile</span><Divider direction="vertical" /><span className="ek-body-m">Settings</span><Divider direction="vertical" level="low" /><span className="ek-body-m">Log out</span>
  </div>
);
