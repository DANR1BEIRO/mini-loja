// 04-styled-components/src/components/Button/Button.jsx
import React from 'react';
import styled, { css } from 'styled-components';

const variantStyles = ({ theme, variant }) => {
  switch (variant) {
    case 'outline':
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary};
          color: ${theme.colors.primaryText};
        }
      `;
    case 'ghost':
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border-color: transparent;
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary};
          color: ${theme.colors.primaryText};
          opacity: 0.1;
        }
      `;
    case 'solid':
    default:
      return css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.primaryText};
        border-color: ${theme.colors.primary};
        &:hover:not(:disabled) {
          background-color: ${theme.colors.primaryHover};
          border-color: ${theme.colors.primaryHover};
        }
      `;
  }
};

const StyledButton = styled.button`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background-color 200ms, color 200ms, border-color 200ms, opacity 200ms;
  width: 100%;
  text-align: center;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${(props) => variantStyles(props)}
`;

const Button = ({ children, variant = 'solid',...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;