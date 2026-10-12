import { Image } from '@eraiki/react';

const SRC = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80';

export const Ratios = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
    <Image src={SRC} ratio="1:1" width={160} />
    <Image src={SRC} ratio="4:3" width={200} />
    <Image src={SRC} ratio="16:9" width={240} />
  </div>
);
export const Vertical = () => <Image src={SRC} ratio="4:3" orientation="vertical" width={150} />;
