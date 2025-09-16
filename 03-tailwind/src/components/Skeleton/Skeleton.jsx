// 03-tailwind/src/components/Skeleton/Skeleton.jsx
import React from 'react';

const Skeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden">
      <div className="animate-pulse">
        <div className="w-full aspect-1/1 bg-gray-300 dark:bg-gray-700"></div>
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
          <div className="flex justify-between items-center pt-2">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;