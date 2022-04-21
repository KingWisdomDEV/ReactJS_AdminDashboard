import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const theme = createTheme({});

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
