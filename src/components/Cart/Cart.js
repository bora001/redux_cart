import React from "react";
import Modal from "../UI/Modal";

const Cart = (props) => {
  return (
    <Modal>
      Cart <button onClick={props.modalClose}>Close</button>
    </Modal>
  );
};

export default Cart;
