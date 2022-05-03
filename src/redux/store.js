import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'; // defaults to localStorage for web
import authReducer from '../containers/Auth/authSlice';
import counterReducer from '../containers/Counter/counterSlice';
import rootSaga from './rootSaga';
import userPreferenceReducer from './userPreferenceSlice';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'userPreference'],
};

const reducers = combineReducers({
  // Each ReduxSlide wrap inside each container folder
  counter: counterReducer,
  userPreference: userPreferenceReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

// Create a Redux Store
export default configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        /* ignore persistance actions */
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga);

// render the application
