import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userEmail: null,
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const cartItem = action.payload;
      const cartTotal = state.total + action.payload.price;
      const sameItem = state.items.filter(
        (item) => item.name === action.payload.name
      );
      if (sameItem.length > 0) {
        state.items = state.items.map((item) =>
          item.name === action.payload.name
            ? { ...item, qty: item.qty + 1 }
            : item
        );
        state.total = cartTotal;
      } else {
        state.items = [...state.items, cartItem];
        state.total = cartTotal;
      }
    },
    removeItem(state, action) {
      const sameItem = state.items.filter(
        (item) => item.name === action.payload.name
      );
      const cartTotal = state.total - action.payload.price;
      if (action.payload.qty === 1) {
        state.items = state.items.filter(
          (item) => item.name !== action.payload.name
        );
        state.total = cartTotal;
      }
      if (sameItem.length > 0) {
        state.items = state.items.map((item) =>
          item.name === action.payload.name && item.qty > 0
            ? { ...item, qty: item.qty - 1 }
            : item
        );
        state.total = cartTotal;
      }
    },
    setUser(state, action) {
      state.userEmail = action.payload;
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
