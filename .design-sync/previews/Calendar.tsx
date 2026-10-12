import { Calendar } from '@eraiki/react';

export const Single = () => <Calendar defaultYear={2026} defaultMonth={6} defaultSelected={12} />;
export const Range = () => <Calendar mode="range" defaultYear={2026} defaultMonth={6} defaultRange={[12, 18]} />;
export const WithYearAndButton = () => (
  <div style={{ height: 460 }}><Calendar defaultYear={2026} defaultMonth={6} defaultSelected={21} yearSelector buttonLabel="Apply" /></div>
);
