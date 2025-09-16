// 02-css-modules/src/components/Navbar/Navbar.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>MiniLoja</div>
        <div className={styles.actions}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Mudar para tema ${theme === 'light'? 'escuro' : 'claro'}`}
          >
            {theme === 'light'? '🌙' : '☀️'}
          </button>
          <div className={styles.cartBadge}>
            🛒
            <span className={styles.cartCount}>3</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;