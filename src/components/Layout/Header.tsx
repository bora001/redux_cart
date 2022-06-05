import React, { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import { useAppSelector, useAppDispatch } from "../Store/hooks";
import { userAction } from "../Store/user-slice";
import { cartAction } from "../Store/cart-slice";
import { Link } from "react-router-dom";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";
import "./Header.css";

const Header = () => {
  const dispatch = useAppDispatch();
  const [spanStyle, setSpanStyle] = useState("");
  const isLogin = useAppSelector((state) => state.user.isLogin);
  const cartInfo = useAppSelector((state) => state.cart);
  const userUid = useAppSelector((state) => state.cart.userUid);
  const auth = getAuth();
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Cart/${userUid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dispatch(cartAction.setCart(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isLogin, userUid, dispatch]);

  useEffect(() => {
    setSpanStyle("");
    return () => {
      setTimeout(() => {
        setSpanStyle("into_cart");
      }, 50);
    };
  }, [cartInfo.total]);

  useEffect(() => {
    const db = getDatabase();
    set(ref(db, "Cart/" + cartInfo.userUid), cartInfo);
  }, [cartInfo, cartInfo.items]);

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
      <Link to="/">
        <h1>ReduxCart</h1>
      </Link>
      <NavMenu />
      {isLogin && (
        <div className="btn_box">
          <Link to="/myorder">
            <button>My Order</button>
          </Link>
          <button className="btn_cart" onClick={goCart}>
            <p>My Cart</p>
            <span className={spanStyle}>
              {cartInfo && cartInfo.items.length}
            </span>
          </button>
          <Link to="/">
            <button className="btn_logout" onClick={logout}>
              Logout
            </button>
          </Link>
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
