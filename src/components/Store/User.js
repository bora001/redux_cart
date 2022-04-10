const initialState = { isLogin: false, status: null };
const userReducer = (state = initialState, action) => {
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
  if (action.type === "ModalClose") {
    return { ...state, status: null };
  }
  return { ...state, status: state.status };
};

export default userReducer;
