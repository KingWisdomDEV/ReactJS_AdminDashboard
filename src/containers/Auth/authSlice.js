import { createSlice } from '@reduxjs/toolkit';

const InitState = {
  isLoggedIn: false,
  logging: false,
  currentUser: null,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: InitState,
  reducers: {
    login: state => {
      state.logging = true;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailure: state => {
      state.isLoggedIn = false;
      state.logging = false;
      state.currentUser = null;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLogging = state => state.auth.logging;
export const selectCurrentUser = state => state.auth.currentUser;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
