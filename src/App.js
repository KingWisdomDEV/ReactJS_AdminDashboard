import { CssBaseline } from '@mui/material';
import { responsiveFontSizes, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { THEMES } from './constants';
import { selectThemeMode } from './redux/userPreferenceSlice';
import AppRoutes from './routes';
import { darkTheme, lightTheme } from './themes';

function App() {
  const currentThemeMode = useSelector(selectThemeMode);
  let currentTheme = currentThemeMode === THEMES.LIGHT ? lightTheme : darkTheme;
  currentTheme = responsiveFontSizes(currentTheme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={currentTheme}>
        <BrowserRouter>
          <CssBaseline />
          <div>
            <AppRoutes />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
