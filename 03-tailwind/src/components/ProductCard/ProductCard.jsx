// 03-tailwind/src/components/ProductCard/ProductCard.jsx
import React from 'react';
import Button from '../Button/Button';

const ProductCard = ({ product }) => {
  const { title, price, rating, tag, imageUrl } = product;

  const tagColor = tag === 'Novo'? 'bg-green-500' : 'bg-red-500';

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative w-full aspect-1/1 bg-gray-200 dark:bg-gray-700">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {tag && (
          <span className={`absolute top-2 right-2 px-2 py-1 rounded-md text-white text-xs font-bold ${tagColor}`}>
            {tag}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 h-12 line-clamp-2" title={title}>
          {title}
        </h3>
        <div className="flex justify-between items-center mt-auto pt-2">
          <p className="text-lg font-bold text-blue-500 dark:text-blue-400">
            R$ {price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
            {rating} <span className="text-yellow-500">★</span>
          </p>
        </div>
        <Button variant="solid">Adicionar</Button>
      </div>
    </div>
  );
};

export default ProductCard;