import { SearchField } from '@eraiki/react';

export const Default = () => <SearchField />;
export const Filled = () => <SearchField defaultValue="Design system" />;
export const WithoutButton = () => <SearchField button={false} placeholder="Search products…" />;
export const Disabled = () => <SearchField disabled />;
