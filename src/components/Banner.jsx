import React from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";

import "../assets/css/banner.css";

const Banner = () => {
  return (
    <div className="container">
      <Header />
      <div className="banner-content">
        <div className="banner-text">
          <h1>Inventory Simulations</h1>
          {/* <p>Optimize Inventory with AI-Powered Simulations</p> */}
          <p>
            Optimize your inventory management with AI-powered simulations,
            reducing costs and improving efficiency through intelligent
            forecasting and real-time insights.
          </p>
          <div className="banner-btns">
            <NavLink className="ln-btn" to="/">
              Try for free{" "}
              <i
                style={{ marginLeft: "5px" }}
                className="fa-solid fa-arrow-right"
              ></i>
            </NavLink>
            <NavLink className="tn-btn" to="/">
              Book a Demo{" "}
              <i
                style={{ marginLeft: "5px" }}
                className="fa-solid fa-arrow-right"
              ></i>
            </NavLink>
          </div>
          <div className="banner-content-other">
            <div className="banner-content-other-div">
              <i className="fa-solid fa-clock"></i>
              14 Days free tiral
            </div>
            <div className="banner-content-other-div">
              <i className="fa-solid fa-circle-check"></i>
              Cancel Anytime
            </div>
            <div className="banner-content-other-div">
              <i className="fa-solid fa-circle-xmark"></i>
              No credit card needed
            </div>
          </div>
        </div>
        <div className="banner-images">
          <div className="banner-img1">
            {/* <i className="fa-solid fa-solid fa-image"></i> */}
            <img src="/images/screen.jpg" alt="" />
          </div>
          <div className="banner-img2">
            {/* <i className="fa-solid fa-solid fa-image"></i> */}
            <img src="/images/screen.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
