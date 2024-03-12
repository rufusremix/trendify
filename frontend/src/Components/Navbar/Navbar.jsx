import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { useState } from "react";
const Navbar = () => {
  const menuItems = ["Shop", "Men", "Women", "Kids"];
  const [currentMenu, setCurrentMenu] = useState("Shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo"></img>
        <p>TRENDIFY</p>
      </div>

      <ul className="nav-menu">
        {menuItems.map((menuItem) => (
          <li key={menuItem} onClick={() => setCurrentMenu(menuItem)}>
            {menuItem}
            {currentMenu === menuItem && <hr />}
          </li>
        ))}
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="Cart Icon"></img>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
