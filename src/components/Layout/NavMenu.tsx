import { NavLink } from "react-router-dom";
import "./NavMenu.css";

const navMenu = () => {
  return (
    <div className="nav_menu">
      <NavLink
        to="/product/watches"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Watches
      </NavLink>
      <NavLink
        to="/product/wallets"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Wallets
      </NavLink>
      <NavLink
        to="/product/sunglasses"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Sunglasses
      </NavLink>
      <NavLink
        to="/product/shoes"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Shoes
      </NavLink>
      <NavLink
        to="/product/bags"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Bags
      </NavLink>
    </div>
  );
};

export default navMenu;
