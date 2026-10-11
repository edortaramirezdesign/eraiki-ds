import { Tabs } from '@eraiki/react';

export const Default = () => <Tabs items={['Overview', 'Activity', 'Settings']} />;
export const SecondSelected = () => <Tabs items={['Day', 'Week', 'Month', 'Year']} defaultValue="Week" />;
