import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { userAction } from "../Store/user-slice";
import { cartAction } from "../Store/cart-slice";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const [spanStyle, setSpanStyle] = useState("");
  const isLogin = useSelector((state) => state.user.isLogin);
  const cartInfo = useSelector((state) => state.cart);
  const auth = getAuth();
  useEffect(() => {
    setSpanStyle("");
    return () => {
      setTimeout(() => {
        setSpanStyle("into_cart");
      }, 50);
    };
  }, [cartInfo.items.length]);

  useEffect(() => {
    const db = getDatabase();
    console.log(cartInfo);
    set(ref(db, "Cart/" + cartInfo.userUid), cartInfo);
  }, [cartInfo.items]);

  const goLogin = () => {
    dispatch(userAction.login());
  };
  const goRegister = () => {
    dispatch(userAction.register());
  };
  const logout = () => {
    dispatch(userAction.userLogout());
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
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
            <span className={spanStyle}>{cartInfo.items.length}</span>
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
