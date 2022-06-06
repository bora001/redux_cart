import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { firebaseKey } from "../dev";
import { cartItemType, cartAction } from "../components/Store/cart-slice";
import { userAction } from "../components/Store/user-slice";
import { useAppDispatch, useAppSelector } from "../components/Store/hooks";
import "./Pages.css";

const Pages = () => {
  const [productList, setProductList] = useState<cartItemType[]>([]);
  const params = useParams();
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector((state) => state.user.isLogin);

  const addCart = (item: cartItemType) => {
    isLogin ? dispatch(cartAction.addCart(item)) : dispatch(userAction.login());
  };

  useEffect(() => {
    axios
      .get(firebaseKey.firebaseUrl + `Item/${params.item}.json`)
      .then((data) => setProductList(Object.values(data.data)));
  }, [params.item]);

  const sortPrice = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    let sort = productList.sort((a, b) =>
      target.value === "low" ? a.price - b.price : b.price - a.price
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
            <div className="items" key={item.name}>
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
