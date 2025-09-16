// 04-styled-components/src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: sans-serif;
    transition: background-color 200ms, color 200ms;
    margin: 0;
    padding-top: 80px; /* Espaço para a navbar fixa */
  }

  main {
    padding: 1rem;
    max-width: 1280px;
    margin: 0 auto;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;