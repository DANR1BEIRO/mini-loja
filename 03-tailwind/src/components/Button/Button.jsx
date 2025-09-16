// 03-tailwind/src/components/Button/Button.jsx
import React from 'react';
import clsx from 'clsx';

const Button = ({ children, variant = 'solid', disabled = false,...props }) => {
  const baseStyles = 'w-full text-center font-semibold py-2 px-4 rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-gray-800';

  const variantStyles = {
    solid: 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600 disabled:hover:bg-blue-500',
    outline: 'bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white disabled:hover:bg-transparent disabled:hover:text-blue-500',
    ghost: 'bg-transparent text-blue-500 border border-transparent hover:bg-blue-100 dark:hover:bg-blue-900/20 disabled:hover:bg-transparent',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const classes = clsx(
    baseStyles,
    variantStyles[variant],
    disabled && disabledStyles
  );

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;