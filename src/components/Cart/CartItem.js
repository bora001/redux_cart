import React from "react";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../Store/cart-slice";

const CartItem = (props) => {
  console.log(props.items);
  const dispatch = useDispatch();
  const plusItem = () => {
    dispatch(cartAction.addCart(props.item));
  };
  const minusItem = () => {
    dispatch(cartAction.removeItem(props.item));
  };
  return (
    <div className="cart_item">
      <div className="img_box">
        <img src={props.item.img} alt={props.item.name} />
      </div>

      <div className="item_info">
        <h4>{props.item.name}</h4>
        <div className="txt_box">
          <p>$ {props.item.price}</p>
          <div className="btn_box">
            <button onClick={minusItem}>-</button>
            <p>{props.item.qty}</p>
            <button onClick={plusItem}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
