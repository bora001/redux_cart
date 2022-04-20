import React, { useEffect } from "react";
import Modal from "../UI/Modal";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const state = useSelector((state) => state.cart);

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
          <p className="txt_empty">Your cart is empty</p>
        )}
        <div className="btn_box">
          {state.items.length > 0 && (
            <Link to="/order" onClick={props.modalClose}>
              <button>Checkout</button>
            </Link>
          )}

          <button onClick={props.modalClose}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
