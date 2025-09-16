// 01-css-global/src/components/Button/Button.jsx
import React from 'react';

const Button = ({ children, variant = 'solid', disabled = false,...props }) => {
  const baseClass = 'button';
  const variantClass = `button--${variant}`;
  const disabledClass = disabled? 'button--disabled' : '';

  const classes = [baseClass, variantClass, disabledClass].filter(Boolean).join(' ');

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;