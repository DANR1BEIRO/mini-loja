// 03-tailwind/src/components/ProductGrid/ProductGrid.jsx
import React, { useState, useEffect } from 'react';
import { products } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import Skeleton from '../Skeleton/Skeleton';

const ProductGrid = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  },);

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {loading
      ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
        : products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default ProductGrid;