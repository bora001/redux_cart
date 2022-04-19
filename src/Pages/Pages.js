import React from "react";
import { useParams } from "react-router-dom";
const Pages = (props) => {
  let params = useParams();
  console.log(params);

  return <div className="page_box"> {params.item} Pages</div>;
};

export default Pages;
