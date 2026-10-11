import { Avatar, AvatarGroup } from '@eraiki/react';

export const Small = () => (
  <AvatarGroup>
    <Avatar size="small" src="https://i.pravatar.cc/128?img=1" />
    <Avatar size="small" src="https://i.pravatar.cc/128?img=2" />
    <Avatar size="small" src="https://i.pravatar.cc/128?img=3" />
    <Avatar size="small" initials="+3" />
  </AvatarGroup>
);
export const Medium = () => (
  <AvatarGroup>
    <Avatar src="https://i.pravatar.cc/128?img=1" />
    <Avatar src="https://i.pravatar.cc/128?img=2" />
    <Avatar src="https://i.pravatar.cc/128?img=3" />
    <Avatar initials="+5" />
  </AvatarGroup>
);
