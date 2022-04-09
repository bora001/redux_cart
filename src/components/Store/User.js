const initialState = { isLogin: false, status: null };
const userReducer = (state = initialState, action) => {
  console.log(state);
  if (action.type === "Login") {
    return { ...state, status: "Login" };
  }
  if (action.type === "Register") {
    return { ...state, status: "Register" };
  }
  if (action.type === "Cart") {
    return { ...state, status: "Cart" };
  }
  if (action.type === "Logout") {
    return { ...state, status: null };
  }
  if (action.type === "UserLogin") {
    return { ...state, isLogin: true };
  }
  if (action.type === "UserLogout") {
    return { ...state, isLogin: false };
  }
  return { ...state, status: null };
};

export default userReducer;
// const store = redux.createStore(userReducer);
// export default store;
