import { FileDrop } from '@eraiki/react';

export const Default = () => <div style={{ width: 480 }}><FileDrop /></div>;
export const Uploading = () => <div style={{ width: 480 }}><FileDrop status="uploading" progress={73} /></div>;
export const Failed = () => <div style={{ width: 480 }}><FileDrop status="error" progress={73} /></div>;
export const WithFiles = () => <div style={{ width: 480 }}><FileDrop files={['contract-2026.pdf', 'logo.svg', 'team-photo.jpg']} /></div>;
