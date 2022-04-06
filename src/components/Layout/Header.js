import React from "react";
import { useDispatch } from "react-redux";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const goLogin = () => {
    dispatch({ type: "Login" });
  };
  const goRegister = () => {
    dispatch({ type: "Register" });
  };

  return (
    <div className="header">
      <h1>ReduxCart</h1>
      <div className="btn_box">
        <button className="btn_register" onClick={goRegister}>
          Register
        </button>
        <button className="btn_login" onClick={goLogin}>
          Login
        </button>
        <button className="btn_cart">
          <p>My Cart</p>
          <span>1</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
