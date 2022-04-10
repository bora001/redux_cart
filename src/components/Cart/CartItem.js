import React from "react";
import "./CartItem.css";
import { useSelector, useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const plusItem = () => {
    dispatch({ type: "AddCart", props: props.item });
  };
  const minusItem = () => {
    dispatch({ type: "RemoveItem", props: props.item });
  };
  return (
    <div className="cart_item">
      <div className="img_box">
        <img src={props.item.img} />
      </div>
      <div className="item_info">
        <div className="txt_box">
          <h3>{props.item.name}</h3>
          <p>$ {props.item.price}</p>
        </div>
        <div className="btn_box">
          <button onClick={minusItem}>-</button>
          <p>{props.item.qty}</p>
          <button onClick={plusItem}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
