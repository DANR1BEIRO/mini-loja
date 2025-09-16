// 04-styled-components/src/App.jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './context/ThemeContext';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import ProductGrid from './components/ProductGrid/ProductGrid';

function App() {
  const { theme } = useTheme();
  const currentTheme = theme === 'light'? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Navbar />
      <main>
        <ProductGrid />
      </main>
    </ThemeProvider>
  );
}

export default App;