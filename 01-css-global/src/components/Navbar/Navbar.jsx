// 01-css-global/src/components/Navbar/Navbar.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">MiniLoja</div>
        <div className="navbar__actions">
          <button
            onClick={toggleTheme}
            className="navbar__theme-toggle"
            aria-label={`Mudar para tema ${theme === 'light'? 'escuro' : 'claro'}`}
          >
            {theme === 'light'? '🌙' : '☀️'}
          </button>
          <div className="navbar__cart-badge">
            🛒
            <span className="navbar__cart-count">3</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;