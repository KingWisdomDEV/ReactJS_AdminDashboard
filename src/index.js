import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './redux/store';

const persistor = persistStore(store);

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
