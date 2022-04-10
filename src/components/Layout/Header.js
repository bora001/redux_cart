import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.userReducer.isLogin);
  const cartItems = useSelector((state) => state.cartReducer.items.length);

  const goLogin = () => {
    dispatch({ type: "Login" });
  };
  const goRegister = () => {
    dispatch({ type: "Register" });
  };
  const logout = () => {
    dispatch({ type: "UserLogout" });
  };

  const goCart = () => {
    dispatch({ type: "Cart" });
  };

  return (
    <div className="header">
      <h1>ReduxCart</h1>

      {isLogin && (
        <div className="btn_box">
          <button className="btn_cart" onClick={goCart}>
            <p>My Cart</p>
            <span>{cartItems}</span>
          </button>
          <button className="btn_logout" onClick={logout}>
            Logout
          </button>
        </div>
      )}
      {!isLogin && (
        <div className="btn_box">
          <button className="btn_register" onClick={goRegister}>
            Register
          </button>
          <button className="btn_login" onClick={goLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
