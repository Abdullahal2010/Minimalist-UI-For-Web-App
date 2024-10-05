import React from "react";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";

import "../assets/css/header.css";

const Header = () => {
  return (
    <header>
      <div className="logo-div">
        <h2>LOGO</h2>
      </div>

      <nav>
        <ul className="header-nav-ul">
          {routes.map((route, index) => (
            <li key={index}>
              <NavLink to={route.path}>{route.displayName}</NavLink>
            </li>
          ))}
          <li>
            <NavLink className="ln-btn" to="/">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="tn-btn" to="/">
              Try Now
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
