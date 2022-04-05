import React, { useState, useEffect } from "react";
import "./ItemList.css";
import { firebaseUrl } from "../../dev";
import Items from "./Items";

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
      {itemData.map((item) => (
        <Items data={item} key={item.name} />
      ))}
    </div>
  );
};

export default ItemList;
