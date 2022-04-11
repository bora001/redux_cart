import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogin: false, status: null };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state) {
      state.status = "Login";
    },
    register(state) {
      state.status = "Register";
    },
    cart(state) {
      state.status = "Cart";
    },
    logout(state) {
      state.status = null;
    },
    userLogin(state) {
      state.isLogin = true;
    },
    userLogout(state) {
      state.isLogin = false;
    },
    modalClose(state) {
      state.status = null;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
