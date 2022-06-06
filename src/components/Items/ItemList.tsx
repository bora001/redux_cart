import React, { useState, useEffect, useRef } from "react";
import { firebaseKey } from "../../dev";
import Items from "./Items";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { cartItemType } from "../Store/cart-slice";
import SwiperCore from "swiper";
import axios from "axios";
import "./ItemList.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ItemList = () => {
  const [itemData, setItemData] = useState<cartItemType[]>([]);
  const [mobile, setMobile] = useState(false);
  const swiperRef = useRef() as any;
  useEffect(() => {
    window.innerWidth < 769 ? setMobile(true) : setMobile(false);
    axios
      .get(firebaseKey.firebaseUrl + `Item/best.json`)
      .then((data) => setItemData(Object.values(data.data)));

    // const getData = async () => {
    //   const res = await fetch(firebaseKey.firebaseUrl + `Items.json`);
    //   const data = await res.json();
    //   setItemData(Object.values(data));
    // };
    // getData().catch((err) => {
    //   console.log(err);
    // });
  }, []);
  window.addEventListener("resize", () => {
    window.innerWidth < 769 ? setMobile(true) : setMobile(false);
  });
  return (
    <div className="items_list">
      <Swiper
        onInit={(core: SwiperCore) => {
          swiperRef.current = core.el;
        }}
        slidesPerView={mobile ? 1 : 3}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {itemData.map((item) => (
          <SwiperSlide key={item.name}>
            <Items data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="swiper-button-prev"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      ></div>
      <div
        className="swiper-button-next"
        onClick={() => swiperRef.current.swiper.slideNext()}
      ></div>
    </div>
  );
};

export default ItemList;
