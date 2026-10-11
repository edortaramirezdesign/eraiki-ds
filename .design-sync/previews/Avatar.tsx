import { Avatar } from '@eraiki/react';

export const Kinds = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Avatar src="https://i.pravatar.cc/128?img=5" alt="Ane Etxeberria" />
    <Avatar initials="AE" />
    <Avatar />
  </div>
);
export const Sizes = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Avatar size="small" src="https://i.pravatar.cc/128?img=8" />
    <Avatar size="medium" src="https://i.pravatar.cc/128?img=8" />
    <Avatar size="large" src="https://i.pravatar.cc/128?img=8" />
  </div>
);
export const WithBadge = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Avatar size="large" src="https://i.pravatar.cc/128?img=15" badge badgeColor="success" />
    <Avatar size="large" initials="JM" badge={2} badgeColor="error" />
  </div>
);
