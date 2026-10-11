import { Icon } from '@eraiki/react';

const names = ['check', 'chevronDown', 'chevronRight', 'chevronLeft', 'search', 'eye', 'eyeOff', 'calendar', 'plus', 'trash', 'info', 'alert', 'success', 'error', 'upload', 'user', 'image', 'heart', 'close', 'closeXs'] as const;

export const AllIcons = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 96px)', gap: 16, color: 'var(--color-fill-plain-text-standard-l)' }}>
    {names.map((n) => (
      <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <Icon name={n} />
        <span className="ek-detail-m" style={{ color: 'var(--color-fill-plain-text-standard-m)' }}>{n}</span>
      </div>
    ))}
  </div>
);
export const Sizes = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', color: 'var(--color-fill-plain-text-standard-l)' }}>
    <Icon name="heart" />
    <Icon name="heart" size="s" />
  </div>
);
