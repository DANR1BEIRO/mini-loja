import React, { useState, useEffect } from 'react';
import { products } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import Skeleton from '../Skeleton/Skeleton';

const ProductGrid = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simula atraso de 2s
    return () => clearTimeout(timer);
  },);

  return (
    <div className="product-grid">
      {loading
      ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
        : products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default ProductGrid;