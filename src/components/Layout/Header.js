import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>ReduxCart</h1>
      <button className="btn_cart">
        <p>My Cart</p>
        <span>1</span>
      </button>
    </div>
  );
};

export default Header;
