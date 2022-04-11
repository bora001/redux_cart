import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../Store/cart-slice";
import { userAction } from "../Store/user-slice";
import "./Items.css";

const Items = (props) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const addCart = (props) => {
    isLogin
      ? dispatch(cartAction.addCart(props))
      : dispatch(userAction.login());
  };

  return (
    <div className="items">
      <img src={props.data.img} alt={props.data.name} />
      <div className="txt_box">
        <div className="item_desc">
          <h3>{props.data.name}</h3>
          <p>$ {props.data.price}</p>
        </div>
        <button className="btn_add" onClick={() => addCart(props.data)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Items;
