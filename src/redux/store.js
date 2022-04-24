import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../containers/Counter/counterSlice';

// Create a Redux Store
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Each ReduxSlide wrap inside each container folder
