import { DateRangeField } from '@eraiki/react';

export const Empty = () => <DateRangeField />;
export const Filled = () => <DateRangeField startLabel="Check-in:" endLabel="Check-out:" defaultStart={{ day: '12', month: '07', year: '2026' }} defaultEnd={{ day: '18', month: '07', year: '2026' }} />;
export const Error = () => <DateRangeField required error="End date must be after start date." defaultStart={{ day: '18', month: '07', year: '2026' }} defaultEnd={{ day: '12', month: '07', year: '2026' }} />;
