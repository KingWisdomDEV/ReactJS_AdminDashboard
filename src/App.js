import { CssBaseline, Paper } from '@mui/material';
import { responsiveFontSizes, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { THEMES } from './constants';
import { selectLocale, selectThemeMode } from './redux/userPreferenceSlice';
import AppRoutes from './routes';
import { darkTheme, lightTheme } from './themes';
import I18nProvider from './i18n/Provider';
import './App.css';

function App() {
  const currentThemeMode = useSelector(selectThemeMode);
  const currentLocale = useSelector(selectLocale);

  let currentTheme = currentThemeMode === THEMES.LIGHT ? lightTheme : darkTheme;
  currentTheme = responsiveFontSizes(currentTheme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={currentTheme}>
        <BrowserRouter>
          <CssBaseline />
          <I18nProvider locale={currentLocale} defaultLocale={currentLocale}>
            <Paper elevation={0} square>
              <AppRoutes />
            </Paper>
          </I18nProvider>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
