import { ProductCard } from '@eraiki/react';

const IMG = 'https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/1.png';

export const Default = () => <ProductCard image={IMG} title="Air Jordan 1 Retro" price="€149.00" />;
export const WithCategoryAndColors = () => (
  <ProductCard image={IMG} category="Sneakers" title="Air Jordan 1 Retro" price="€149.00" swatches={['#D02020', '#1E1F24', '#EB6C38', '#3A99EC']} />
);
export const OnSale = () => (
  <ProductCard image={IMG} category="Sneakers" title="Air Jordan 1 Retro" originalPrice="€149.00" price="€119.00" />
);
