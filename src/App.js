import { CssBaseline, Paper } from '@mui/material';
import { responsiveFontSizes, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { THEMES } from './constants';
import history from './history';
import I18nProvider from './i18n/Provider';
import { selectLocale, selectThemeMode } from './redux/userPreferenceSlice';
import AppRoutes from './routes';
import { darkTheme, lightTheme } from './themes';

function App() {
  const currentThemeMode = useSelector(selectThemeMode);
  const currentLocale = useSelector(selectLocale);

  let currentTheme = currentThemeMode === THEMES.LIGHT ? lightTheme : darkTheme;
  currentTheme = responsiveFontSizes(currentTheme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={currentTheme}>
        <HistoryRouter history={history}>
          <CssBaseline />
          <I18nProvider locale={currentLocale} defaultLocale={currentLocale}>
            <Paper elevation={0} square>
              <AppRoutes />
            </Paper>
          </I18nProvider>
        </HistoryRouter>
      </ThemeProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </StyledEngineProvider>
  );
}

export default App;
