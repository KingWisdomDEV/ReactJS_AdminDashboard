/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const InitState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: InitState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const counterActions = counterSlice.actions;

// Selectors
export const selectValue = state => state.counter.value;

// Reducer
const counterReducer = counterSlice.reducer;
export default counterReducer;
