import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
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
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga);

// render the application
