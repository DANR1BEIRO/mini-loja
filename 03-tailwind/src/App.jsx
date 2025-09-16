// 03-tailwind/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductGrid from './components/ProductGrid/ProductGrid';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-200">
      <Navbar />
      <main>
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;