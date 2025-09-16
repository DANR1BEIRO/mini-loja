// 02-css-modules/src/components/ProductCard/ProductCard.jsx
import React from 'react';
import Button from '../Button/Button';
import styles from './ProductCard.module.css';
import clsx from 'clsx';

const ProductCard = ({ product }) => {
  const { title, price, rating, tag, imageUrl } = product;

  const tagClass = clsx(styles.tag, {
    [styles.tagNew]: tag === 'Novo',
    [styles.tagPromo]: tag === 'Promo',
  });

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={imageUrl}
          alt={title}
          className={styles.image}
          loading="lazy"
        />
        {tag && <span className={tagClass}>{tag}</span>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title} title={title}>{title}</h3>
        <div className={styles.details}>
          <p className={styles.price}>R$ {price.toFixed(2)}</p>
          <p className={styles.rating} aria-label={`Avaliação: ${rating} de 5 estrelas`}>
            {rating} ★
          </p>
        </div>
        <Button variant="solid">Adicionar</Button>
      </div>
    </div>
  );
};

export default ProductCard;