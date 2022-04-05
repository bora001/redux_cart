import React, { useState, useEffect } from "react";
import "./ItemList.css";
import { firebaseUrl } from "../../dev";
import Items from "./Items";
import Slider from "../UI/Slider";
import { SwiperSlide } from "swiper/react";
const ItemList = () => {
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(firebaseUrl + `Items.json`);
      const data = await res.json();
      setItemData(Object.values(data));
    };
    getData().catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div className="items_list">
      <Slider>
        {itemData.map((item) => (
          <SwiperSlide style={{ border: "5px solid gold" }}>
            <Items data={item} key={item.name} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default ItemList;
