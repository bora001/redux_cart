import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { firebaseKey } from "../dev";
import "./Pages.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../components/Store/cart-slice";
import { userAction } from "../components/Store/user-slice";

const Pages = (props) => {
  const [productList, setProductList] = useState([]);
  let params = useParams();

  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);

  const addCart = (props) => {
    isLogin
      ? dispatch(cartAction.addCart(props))
      : dispatch(userAction.login());
  };

  useEffect(() => {
    axios
      .get(firebaseKey.firebaseUrl + `Item/${params.item}.json`)
      .then((data) => setProductList(Object.values(data.data)));
  }, [params.item]);

  const sortPrice = (e) => {
    let sort = productList.sort((a, b) =>
      e.target.value == "low" ? a.price - b.price : b.price - a.price
    );
    setProductList((prevList) => [...sort]);
  };

  return (
    <div className="page_box">
      {!productList && <p>{params.item} Pages</p>}
      <div className="filter_box">
        <select onChange={sortPrice}>
          <option value="high">High price</option>
          <option value="low">Low price</option>
        </select>
      </div>
      <div className="item_box">
        {productList &&
          productList.map((item) => (
            <div className="items">
              <div className="img_box">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="txt_box">
                <div className="item_desc">
                  <h3>{item.name}</h3>
                  <p>$ {item.price}</p>
                </div>
                <button className="btn_add" onClick={() => addCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Pages;
