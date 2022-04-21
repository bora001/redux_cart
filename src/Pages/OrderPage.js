import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./OrderPage.css";
// import axios from "axios";
import { getDatabase, ref, push } from "firebase/database";
import { cartAction } from "../components/Store/cart-slice";
const OrderPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.cart);
  const [orderInfo, setOrderInfo] = useState({
    orderBy: "",
    address: "",
    contact: "",
    msg: "",
    date: "",
  });
  const getInfo = (e) => {
    const { value, name } = e.target;
    setOrderInfo({
      ...orderInfo,
      [name]: value,
      date: new Date().toISOString(),
    });
  };

  const sendData = (e) => {
    e.preventDefault();
    let n = Math.random().toString(36).slice(2);
    let id = n + n;

    const db = getDatabase();
    push(ref(db, "Order/" + cartInfo.userUid), {
      id,
      orderInfo,
      cartInfo,
    });
    // .then((data) => console.log(data._path.pieces_[2]));

    dispatch(cartAction.setCart([]));
    navigate("/myorder");
  };

  return (
    <div className="order_page">
      <div className="order_info">
        <div className="item_title">
          <h3>Item</h3>
          <div className="txt_box">
            <p></p>
            <p>Price</p>
            <p>Qty</p>
            <p>Total</p>
          </div>
        </div>
        <div className="item_box">
          {cartInfo.items.map((item) => (
            <div className="item_detail">
              <div className="img_box">
                <img src={item.img} alt="" />
              </div>
              <div className="txt_box">
                <p>{item.name}</p>
                <p>$ {item.price}</p>
                <p>{item.qty}</p>
                <p>$ {item.price * item.qty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="order_form">
        <form onSubmit={sendData}>
          <div className="input_box">
            <p>Name</p>
            <input
              type="text"
              placeholder="name"
              onChange={getInfo}
              name="orderBy"
              required
            />
          </div>
          <div className="input_box">
            <p>Address</p>
            <input
              type="text"
              placeholder="address"
              onChange={getInfo}
              name="address"
              required
            />
          </div>
          <div className="input_box">
            <p>Contact</p>
            <input
              type="number"
              placeholder="contact"
              onChange={getInfo}
              name="contact"
              required
            />
          </div>
          <div className="input_box">
            <p>Leave a message</p>
            <input
              type="text"
              onChange={getInfo}
              name="msg"
              placeholder="leave a message"
            />
          </div>
          <div className="total_box">
            <p>SubTotal</p>
            <p>${cartInfo.total}</p>
          </div>
          <button>Place order</button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
