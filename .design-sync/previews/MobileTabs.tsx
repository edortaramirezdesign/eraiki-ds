import { MobileTabs } from '@eraiki/react';

const tabs = ['Home', 'Search', 'Profile', 'Settings'];

export const Closed = () => <MobileTabs items={tabs} />;
export const Open = () => <div style={{ height: 240 }}><MobileTabs items={tabs} defaultValue="Profile" defaultOpen /></div>;
