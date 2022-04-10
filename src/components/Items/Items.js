import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Items.css";

const Items = (props) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.userReducer.isLogin);
  const addCart = (props) => {
    isLogin ? dispatch({ type: "AddCart", props }) : alert("please login");
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
