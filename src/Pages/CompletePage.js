import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const CompletePage = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="complete_page">
      <h2>Thank you for ordering</h2>
      <p>your order number is {location.state}</p>
      <div className="btn_box">
        <Link to="/">
          <button>Main</button>
        </Link>
        <Link to="/myorder">
          <button>Check order</button>
        </Link>
      </div>
    </div>
  );
};

export default CompletePage;
