import React, { useState, useEffect } from "react";
import Modal from "../UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = (props) => {
  const state = useSelector((state) => state.cartReducer);

  return (
    <Modal>
      <div className="cart_box">
        <h3>My Cart</h3>

        {state.items.length ? (
          <>
            {state.items.map((item) => (
              <CartItem item={item} key={item.name} />
            ))}
            <div className="total_box">
              <p>Total</p>
              <p>$ {state.total}</p>
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
        <div className="btn_box">
          {state.items.length > 0 && <button>Checkout</button>}
          <button onClick={props.modalClose}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
