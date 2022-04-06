import React, { useState, useEffect } from "react";
import { firebaseUrl } from "../../dev";
import Items from "./Items";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./ItemList.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ItemList = (props) => {
  const [itemData, setItemData] = useState([]);
  const swiperRef = React.useRef(null);
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
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
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
