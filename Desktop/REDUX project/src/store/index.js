import { configureStore } from "@reduxjs/toolkit";
import Counter from "./counter-store.js";
import userAuthentication from "./authenticate-store.js";

export const counterSlice = Counter();
export const authenticateSlice = userAuthentication();

const Store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authenticateSlice.reducer,
  },
});

export default Store;
