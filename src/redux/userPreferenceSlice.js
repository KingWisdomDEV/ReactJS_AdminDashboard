/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { THEMES } from '../constants';

const InitState = {
  currentThemeMode: THEMES.LIGHT,
  currentLocale: null, // it detected when init i18next lib
};

const userPreferenceSlice = createSlice({
  name: 'userPreference',
  initialState: InitState,
  reducers: {
    changeTheme: (state, action) => {
      state.currentThemeMode = action.payload;
    },
    changeLocale: (state, action) => {
      state.currentLocale = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const userPreferenceActions = userPreferenceSlice.actions;

// Selectors
export const selectThemeMode = state => state.userPreference.currentThemeMode;
export const selectLocale = state => state.userPreference.currentLocale;

// Reducer
const userPreferenceReducer = userPreferenceSlice.reducer;
export default userPreferenceReducer;
