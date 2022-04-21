import React, { useState, useEffect } from "react";
import { firebaseKey } from "../../dev";
import Items from "./Items";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./ItemList.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
const ItemList = (props) => {
  const [itemData, setItemData] = useState([]);
  const [mobile, setMobile] = useState(false);
  const swiperRef = React.useRef(null);
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
        ref={swiperRef}
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
