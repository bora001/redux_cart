import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import userReducer from "./components/Store/User";
import cartReducer from "./components/Store/Cart";
import { combineReducers } from "redux";
const container = document.getElementById("root");
const root = createRoot(container);

const redux = require("redux");
const reducers = combineReducers({
  userReducer,
  cartReducer,
});
const store = redux.createStore(reducers);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
