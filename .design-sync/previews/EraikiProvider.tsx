import { EraikiProvider, TextField, Button } from '@eraiki/react';

export const AppRoot = () => (
  <EraikiProvider>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
      <TextField label="Email:" placeholder="ane@eraiki.com" />
      <Button>Sign in</Button>
    </div>
  </EraikiProvider>
);
