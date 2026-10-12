import { PinCode } from '@eraiki/react';

export const Empty = () => <PinCode />;
export const Filled = () => <PinCode defaultValue="4821" />;
export const SixDigits = () => <PinCode length={6} defaultValue="82" />;
export const Error = () => <PinCode defaultValue="1234" error />;
export const Disabled = () => <PinCode disabled />;
