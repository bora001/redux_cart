import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLogin);

  const goLogin = () => {
    dispatch({ type: "Login" });
  };
  const goRegister = () => {
    dispatch({ type: "Register" });
  };

  return (
    <div className="header">
      <h1>ReduxCart</h1>

      {isLogin && (
        <div className="btn_box">
          <button className="btn_cart">
            <p>My Cart</p>
            <span>1</span>
          </button>
          <button className="btn_logout">Logout</button>
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
