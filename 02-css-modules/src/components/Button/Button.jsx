// 02-css-modules/src/components/Button/Button.jsx
import React from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

const Button = ({ children, variant = 'solid', disabled = false,...props }) => {
  const buttonClasses = clsx(
    styles.button,
    styles[variant],
    { [styles.disabled]: disabled }
  );

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;