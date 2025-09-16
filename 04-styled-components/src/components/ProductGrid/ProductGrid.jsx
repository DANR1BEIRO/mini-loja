// 04-styled-components/src/components/ProductGrid/ProductGrid.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { products } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import Skeleton from '../Skeleton/Skeleton';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductGrid = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  },);

  return (
    <Grid>
      {loading
     ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
        : products.map((product) => <ProductCard key={product.id} product={product} />)}
    </Grid>
  );
};

export default ProductGrid;