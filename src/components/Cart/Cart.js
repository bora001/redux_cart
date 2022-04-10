import React, { useState, useEffect } from "react";
import Modal from "../UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";

const Cart = (props) => {
  const state = useSelector((state) => state.cartReducer);

  return (
    <Modal>
      <h3>Cart Items</h3>
      {state.items.map((item) => (
        <CartItem item={item} key={item.name} />
      ))}
      <div className="total_box">
        <p>$ {state.total}</p>
      </div>
      <button>Checkout</button>
      <button onClick={props.modalClose}>Close</button>
    </Modal>
  );
};

export default Cart;
