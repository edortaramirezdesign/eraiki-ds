import { Pagination } from '@eraiki/react';

export const Short = () => <Pagination pages={4} />;
export const Long = () => <Pagination pages={12} defaultPage={2} />;
export const WithoutArrows = () => <Pagination pages={5} defaultPage={3} visible={5} arrows={false} />;
