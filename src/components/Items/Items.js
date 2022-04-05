import React from "react";
import "./Items.css";

const Items = (props) => {
  console.log(props.data);
  return (
    <div>
      <p>{props.data.name}</p>
      <img src={props.data.img} alt={props.data.name} />
      <p>{props.data.price}</p>
    </div>
  );
};

export default Items;
