import { createSlice } from "@reduxjs/toolkit";
const initialLogState = { userAuth: false };

const userAuthentication = () => {
  const authenticateSlice = createSlice({
    name: "authentication",
    initialState: initialLogState,
    reducers: {
      isLoggedIn(state) {
        state.userAuth = true;
      },
      isLoggedOut(state) {
        state.userAuth = false;
      },
    },
  });
  return authenticateSlice;
};

export default userAuthentication;
