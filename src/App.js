import { CssBaseline, Paper } from '@mui/material';
import { responsiveFontSizes, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import React, { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useSelector } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import logo from './assets/logo.svg';
import { LOCALES, THEMES } from './constants';
import history from './history';
import i18n from './i18next';
import { selectLocale, selectThemeMode } from './redux/userPreferenceSlice';
import AppRoutes from './routes';
import { darkTheme, lightTheme } from './themes';

// loading component for suspense fallback
function Loader() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>loading...</div>
    </div>
  );
}

function App() {
  // When user open app then get locale from redux store and update language for all pages
  const previousLocale = useSelector(selectLocale);
  useEffect(() => {
    i18n.changeLanguage(previousLocale || LOCALES.VIETNAM);
  }, []);

  const currentThemeMode = useSelector(selectThemeMode);
  let currentTheme = currentThemeMode === THEMES.LIGHT ? lightTheme : darkTheme;
  currentTheme = responsiveFontSizes(currentTheme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={currentTheme}>
        <HistoryRouter history={history}>
          <CssBaseline />
          <I18nextProvider i18n={i18n}>
            <Suspense fallback={<Loader />}>
              <Paper elevation={0} square>
                <AppRoutes />
              </Paper>
            </Suspense>
          </I18nextProvider>
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
