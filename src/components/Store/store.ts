import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: { user: userSlice.reducer, cart: cartSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
