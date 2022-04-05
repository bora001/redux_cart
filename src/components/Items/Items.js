import React from "react";
import Card from "../UI/Card";
import "./Items.css";
const Items = (props) => {
  console.log(props.data);
  return (
    <Card>
      <p>{props.data.name}</p>
      <img src={props.data.img} alt={props.data.name} />
      <p>{props.data.price}</p>
    </Card>
  );
};

export default Items;
