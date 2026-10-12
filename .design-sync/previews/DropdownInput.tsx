import { DropdownInput } from '@eraiki/react';

const roles = ['Designer', 'Developer', 'Product manager', 'Researcher'];

export const Default = () => <DropdownInput label="Role:" options={roles} placeholder="Select a role" />;
export const Rich = () => <DropdownInput label="Owner:" required icon="user" badge tooltip="Who is accountable" options={roles} defaultValue="Designer" helperText="You can change it later." />;
export const Error = () => <DropdownInput label="Role:" required options={roles} placeholder="Select a role" error="Choose a role to continue." />;
export const Disabled = () => <DropdownInput label="Role:" options={roles} defaultValue="Developer" disabled />;
export const Open = () => <div style={{ height: 260 }}><DropdownInput label="Role:" options={roles} defaultValue="Developer" defaultOpen /></div>;
