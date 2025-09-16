// 04-styled-components/src/components/Navbar/Navbar.jsx
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 10;
  transition: background-color 200ms, border-color 200ms;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[1]};
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const CartBadge = styled.div`
  position: relative;
  font-size: 1.5rem;
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: ${({ theme }) => theme.colors.tagPromoBg};
  color: ${({ theme }) => theme.colors.tagText};
  border-radius: ${({ theme }) => theme.radius.full};
  width: 20px;
  height: 20px;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Nav>
      <Container>
        <Logo>MiniLoja</Logo>
        <Actions>
          <ThemeToggle
            onClick={toggleTheme}
            aria-label={`Mudar para tema ${theme === 'light'? 'escuro' : 'claro'}`}
          >
            {theme === 'light'? '🌙' : '☀️'}
          </ThemeToggle>
          <CartBadge>
            🛒
            <CartCount>3</CartCount>
          </CartBadge>
        </Actions>
      </Container>
    </Nav>
  );
};

export default Navbar;