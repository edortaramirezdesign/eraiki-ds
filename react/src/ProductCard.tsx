import type { ReactNode } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';

export interface ProductCardProps {
  /** Product image URL (3:4 media area). */
  image?: string;
  imageAlt?: string;
  title: ReactNode;
  /** Small uppercase eyebrow above the title. */
  category?: ReactNode;
  /** Formatted price, e.g. "€39.00". */
  price: ReactNode;
  /** Formatted original price; when set it shows struck-through and `price` turns red (sale). */
  originalPrice?: ReactNode;
  /** CSS colors for the color-option dots. */
  swatches?: string[];
  /** Shows the save (heart) button over the image. */
  favorite?: boolean;
  onFavorite?: () => void;
  onClick?: () => void;
  className?: string;
}

/** E-commerce product card: image, eyebrow, name, color options, price/sale. */
export function ProductCard({ image, imageAlt = '', title, category, price, originalPrice, swatches, favorite = true, onFavorite, onClick, className }: ProductCardProps) {
  return (
    <div className={cx('ek-card', className)} onClick={onClick}>
      <div className="ek-card__media">
        {image ? <img src={image} alt={imageAlt} /> : <Icon name="image" />}
        {favorite && (
          <button type="button" className="ek-btn ek-btn--tertiary ek-btn--icon ek-btn--sm ek-card__fav" aria-label="Save"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(); }}>
            <Icon name="heart" />
          </button>
        )}
      </div>
      <div className="ek-card__body">
        <div className="ek-card__info">
          {category && <span className="ek-card__eyebrow">{category}</span>}
          <div className="ek-card__title">{title}</div>
          {swatches && swatches.length > 0 && (
            <div className="ek-card__swatches">{swatches.map((c, i) => <span key={i} className="ek-card__swatch" style={{ background: c }} />)}</div>
          )}
        </div>
        {originalPrice
          ? <div className="ek-card__price"><span className="ek-card__price-original">{originalPrice}</span><span className="ek-card__price-sale">{price}</span></div>
          : <div className="ek-card__price">{price}</div>}
      </div>
    </div>
  );
}
