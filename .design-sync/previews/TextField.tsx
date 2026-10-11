import { TextField } from '@eraiki/react';

export const Default = () => (
  <div style={{ width: 320 }}>
    <TextField label="Full name:" placeholder="Ane Etxeberria" />
  </div>
);
export const Filled = () => (
  <div style={{ width: 320 }}>
    <TextField label="Email:" required defaultValue="ane@eraiki.com" helperText="We'll never share your email." />
  </div>
);
export const Error = () => (
  <div style={{ width: 320 }}>
    <TextField label="Email:" required defaultValue="ane@eraiki" error="Enter a valid email address." />
  </div>
);
export const Disabled = () => (
  <div style={{ width: 320 }}>
    <TextField label="Company:" defaultValue="Eraiki" disabled />
  </div>
);
export const WithTooltip = () => (
  <div style={{ width: 320 }}>
    <TextField label="VAT number:" placeholder="ES12345678A" tooltip="Required for invoices" />
  </div>
);
