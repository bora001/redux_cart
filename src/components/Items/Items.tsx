import React from "react";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { userAction } from "../Store/user-slice";
import { cartItemType, cartAction } from "../Store/cart-slice";
import "./Items.css";

const Items = (props: { data: cartItemType }) => {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector((state) => state.user.isLogin);

  const addCart = (props: cartItemType) => {
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
