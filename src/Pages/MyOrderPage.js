import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDatabase, ref, child, get } from "firebase/database";
import "./MyOrderPage.css";
const MyOrderPage = () => {
  const [orderList, setOrderList] = useState([]);
  const cartInfo = useSelector((state) => state.cart);
  const [orderView, setOrderView] = useState("");

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "Order/" + cartInfo.userUid))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setOrderList(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [cartInfo.userUid]);

  const viewInfo = (id) => {
    orderView === id ? setOrderView("") : setOrderView(id);
  };

  return (
    <div className="myorder_page">
      <h2>My Orders</h2>
      {orderList.map((order) => (
        <div className="order_box" key={order.id}>
          <div className="order_item">
            <div className="img_box">
              <img src={order.cartInfo.items[0].img} alt="orderimg" />
            </div>
            <div className="txt_box">
              <p>{order.orderInfo.date.slice(0, 10)}</p>
              <p>{order.cartInfo.items.length} items</p>
              <p>${order.cartInfo.total}</p>
              <button
                onClick={() => viewInfo(order.id)}
                style={{
                  backgroundColor:
                    orderView === order.id
                      ? "rgba(8, 186, 155, 0.6)"
                      : "rgb(8, 141, 119)",
                }}
              >
                {orderView === order.id
                  ? "close order info"
                  : "view order info"}
              </button>
            </div>
          </div>
          {orderView === order.id && (
            <div className="order_detail" value={order.id}>
              <div className="item_info">
                <div className="title_box">
                  <p>Item</p>
                  <p>price</p>
                  <p>Qty</p>
                  <p>Total</p>
                </div>
                {order.cartInfo.items.map((item) => (
                  <div className="item_box" key={item.name + order.id}>
                    <div className="item_name">
                      <div className="img_box">
                        <img src={item.img} alt="" />
                      </div>
                      <h4>{item.name}</h4>
                    </div>
                    <p>$ {item.price}</p>
                    <p>{item.qty}</p>
                    <p>$ {item.price * item.qty}</p>
                  </div>
                ))}
              </div>
              <div className="order_info">
                <div className="txt_box">
                  <p>Order# : {order.id}</p>
                  <p>Order Name : {order.orderInfo.orderBy}</p>
                  <p>Order to : {order.orderInfo.address}</p>
                  <p>Contact : {order.orderInfo.contact}</p>
                  {order.orderInfo.msg && (
                    <p>Message : {order.orderInfo.msg}</p>
                  )}
                </div>
                <div className="total_box">
                  <p>SubTotal</p>
                  <p>$ {order.cartInfo.total}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyOrderPage;
