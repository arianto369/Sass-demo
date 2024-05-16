import React from "react";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <ul className="nav-container">
      <nav>
        <li>Home</li>
        <li>Shop</li>
        <li>About us</li>
      </nav>

      <div className="theme-picker">
        <ul>
          <li className="purple"></li>
          <li className="pink"></li>
          <li className="blue"></li>
        </ul>
      </div>
    </ul>
  );
};

export default Navbar;
