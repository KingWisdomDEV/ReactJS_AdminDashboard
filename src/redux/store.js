import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from '../containers/Auth/authSlice';
import counterReducer from '../containers/Counter/counterSlice';
import rootSaga from './rootSaga';
import userPreferenceReducer from './userPreferenceSlice';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create a Redux Store
export default configureStore({
  reducer: {
    // Each ReduxSlide wrap inside each container folder
    counter: counterReducer,
    userPreference: userPreferenceReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: true,
    }).concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga);

// render the application
