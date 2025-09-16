// 03-tailwind/src/components/Navbar/Navbar.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-md z-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        <div className="font-bold text-2xl text-gray-800 dark:text-white">MiniLoja</div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-2xl p-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800"
            aria-label={`Mudar para tema ${theme === 'light'? 'escuro' : 'claro'}`}
          >
            {theme === 'light'? '🌙' : '☀️'}
          </button>
          <div className="relative text-2xl">
            <span>🛒</span>
            <span className="absolute -top-1 -right-2.5 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex justify-center items-center font-bold">
              3
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;