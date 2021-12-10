const redux = require("redux");

const reducerFunction = (state, action) => {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  if (action.type === "decrement") {
    return { count: state.count - 1 };
  }
  return state;
};

const Store = redux.createStore(reducerFunction, { count: 0 });

const componentConsumer = () => {
  const latestUpdate = Store.getState();
  console.log(latestUpdate);
};

Store.subscribe(componentConsumer);

Store.dispatch({ type: "decrement" });
