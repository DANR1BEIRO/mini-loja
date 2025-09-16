// 01-css-global/src/components/ProductCard/ProductCard.jsx
import React from 'react';
import Button from '../Button/Button';

const ProductCard = ({ product }) => {
  const { title, price, rating, tag, imageUrl } = product;

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={imageUrl}
          alt={title}
          className="product-card__image"
          loading="lazy"
        />
        {tag && (
          <span className={`product-card__tag product-card__tag--${tag.toLowerCase()}`}>
            {tag}
          </span>
        )}
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title" title={title}>{title}</h3>
        <div className="product-card__details">
          <p className="product-card__price">R$ {price.toFixed(2)}</p>
          <p className="product-card__rating" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
            {rating} ★
          </p>
        </div>
        <Button variant="solid">Adicionar</Button>
      </div>
    </div>
  );
};

export default ProductCard;