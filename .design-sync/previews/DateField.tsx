import { DateField } from '@eraiki/react';

export const Empty = () => <DateField label="Date of birth:" required />;
export const Filled = () => <DateField label="Start date:" defaultValue={{ day: '09', month: '09', year: '2026' }} helperText="Format DD/MM/AAAA" />;
export const Error = () => <DateField label="Start date:" defaultValue={{ day: '31', month: '02', year: '2026' }} error="This date doesn't exist." />;
export const Disabled = () => <DateField label="Created on:" defaultValue={{ day: '01', month: '03', year: '2025' }} disabled tooltip="Set automatically" />;
