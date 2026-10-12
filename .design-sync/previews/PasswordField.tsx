import { PasswordField } from '@eraiki/react';

export const Empty = () => <PasswordField label="Password:" />;
export const Filled = () => <PasswordField label="Password:" defaultValue="correcthorse" helperText="At least 8 characters." />;
export const Error = () => <PasswordField label="Password:" defaultValue="1234" error="Password is too short." />;
export const Disabled = () => <PasswordField label="Password:" defaultValue="correcthorse" disabled />;
