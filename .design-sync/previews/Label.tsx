import { Label } from '@eraiki/react';

export const Kinds = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <Label>Draft</Label>
    <Label kind="info">In review</Label>
    <Label kind="alert">Pending</Label>
    <Label kind="error">Rejected</Label>
    <Label kind="success">Published</Label>
  </div>
);
export const WithDot = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <Label dot>Draft</Label>
    <Label kind="info" dot>In review</Label>
    <Label kind="alert" dot>Pending</Label>
    <Label kind="error" dot>Rejected</Label>
    <Label kind="success" dot>Published</Label>
  </div>
);
