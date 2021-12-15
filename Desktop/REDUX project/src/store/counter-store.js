import { createSlice } from "@reduxjs/toolkit";

const Counter = () => {
  const initialCounterState = { counter: 0, toggleCounter: true };

  const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
      increment(state) {
        state.counter++;
      },
      decrement(state) {
        state.counter--;
      },
      increase(state, action) {
        state.counter = state.counter + action.payload;
      },
      toggleCounter(state) {
        state.toggleCounter = !state.toggleCounter;
      },
    },
  });

  return counterSlice;
};

export default Counter;
