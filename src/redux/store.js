import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import counterReducer from '../containers/Counter/counterSlice';
import userPreferenceReducer from './userPreferenceSlice';
import mySaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create a Redux Store
export default configureStore({
  reducer: {
    // Each ReduxSlide wrap inside each container folder
    counter: counterReducer,
    userPreference: userPreferenceReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(mySaga);

// render the application
