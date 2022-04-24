import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions, selectValue } from './counterSlice';

export default function Counter() {
  const count = useSelector(selectValue);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(counterActions.increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(counterActions.decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
