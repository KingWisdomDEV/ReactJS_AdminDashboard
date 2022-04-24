import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../containers/Counter/counterSlice';
import userPreferenceReducer from './userPreferenceSlice';

// Create a Redux Store
export default configureStore({
  reducer: {
    counter: counterReducer,
    userPreference: userPreferenceReducer,
  },
});

// Each ReduxSlide wrap inside each container folder
