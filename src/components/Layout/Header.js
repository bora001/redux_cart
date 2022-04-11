import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { userAction } from "../Store/user-slice";

const Header = () => {
  const dispatch = useDispatch();
  const [spanStyle, setSpanStyle] = useState("");
  const isLogin = useSelector((state) => state.user.isLogin);
  const cartItems = useSelector((state) => state.cart.items.length);
  useEffect(() => {
    setSpanStyle("");
    return () => {
      setTimeout(() => {
        setSpanStyle("into_cart");
      }, 50);
    };
  }, [cartItems]);

  const goLogin = () => {
    dispatch(userAction.login());
  };
  const goRegister = () => {
    dispatch(userAction.register());
  };
  const logout = () => {
    dispatch(userAction.userLogout());
  };
  const goCart = () => {
    dispatch(userAction.cart());
  };

  return (
    <div className="header">
      <h1>ReduxCart</h1>

      {isLogin && (
        <div className="btn_box">
          <button className="btn_cart" onClick={goCart}>
            <p>My Cart</p>
            <span className={spanStyle}>{cartItems}</span>
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
