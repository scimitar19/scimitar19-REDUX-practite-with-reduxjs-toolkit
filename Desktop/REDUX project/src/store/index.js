import { createStore } from "redux";

function reducerFunction(state, action) {
  if (action.type === "increment") {
    return { count: state.count + 1, toggleCounter: state.toggleCounter };
  }
  if (action.type === "decrement") {
    return { count: state.count - 1, toggleCounter: state.toggleCounter };
  }
  if (action.type === "increase-by-five") {
    return {
      count: state.count + action.payload,
      toggleCounter: state.toggleCounter,
    };
  }

  if (action.type === "toggle") {
    console.log(state.toggleCounter);
    if (state.toggleCounter === false) {
      return { count: state.count, toggleCounter: true };
    }
    return { count: state.count, toggleCounter: action.payload };
  }
  return state;
}

const Store = createStore(reducerFunction, { count: 0, toggleCounter: true });

export default Store;
