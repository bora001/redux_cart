const redux = require("redux");
const initialState = { isLogin: false, status: null };
const userReducer = (state = initialState, action) => {
  if (action.type === "Login") {
    console.log("login");
    return { ...state, status: "Login" };
  }
  if (action.type === "Register") {
    console.log("Register");
    return { ...state, status: "Register" };
  }
  if (action.type === "Logout") {
    return { ...state, status: null };
  }

  if (action.type === "UserLogin") {
    return { ...state, isLogin: true };
  }
  return { ...state, status: null };
};

const store = redux.createStore(userReducer);
export default store;
