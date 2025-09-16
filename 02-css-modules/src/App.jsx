// 02-css-modules/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductGrid from './components/ProductGrid/ProductGrid';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <ProductGrid />
      </main>
    </>
  );
}

export default App;