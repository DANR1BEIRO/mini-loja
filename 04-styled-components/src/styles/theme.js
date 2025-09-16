// 04-styled-components/src/styles/theme.js
const baseTokens = {
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    4: '1rem',
  },
  radius: {
    md: '0.375rem',
    full: '9999px',
  },
  breakpoints: {
    xs: '481px',
    sm: '769px',
    md: '1025px',
  },
};

export const lightTheme = {
...baseTokens,
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    primaryText: '#ffffff',
    textPrimary: '#111827',
    textSecondary: '#6b7280',
    border: '#e5e7eb',
    star: '#f59e0b',
    tagNewBg: '#10b981',
    tagPromoBg: '#ef4444',
    tagText: '#ffffff',
    skeletonBase: '#e5e7eb',
    skeletonHighlight: '#f9fafb',
  },
  shadows: {
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
};

export const darkTheme = {
...baseTokens,
  colors: {
    background: '#111827',
    surface: '#1f2937',
    primary: '#60a5fa',
    primaryHover: '#3b82f6',
    primaryText: '#111827',
    textPrimary: '#f9fafb',
    textSecondary: '#9ca3af',
    border: '#374151',
    star: '#f59e0b',
    tagNewBg: '#10b981',
    tagPromoBg: '#ef4444',
    tagText: '#ffffff',
    skeletonBase: '#374151',
    skeletonHighlight: '#4b5563',
  },
  shadows: {
    md: '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
  },
};