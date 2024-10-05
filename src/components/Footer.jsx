import React from "react";

import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-first-div">
          <div className="social-icons">
            <a href="#" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
          <p className="footer-first-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ex
            eveniet alias magni, tenetur vel? Error, dolorem. Quaerat, vel
            debitis?
          </p>
          <div className="footer-newsletter-div">
            <input placeholder="Enter your email address" type="text" />
            <button>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="footer-second-div">
          <div className="footer-div-title">Use Cases</div>
          <ul className="footer-ul">
            <li>
              <i className="fa-solid fa-caret-right"></i>{" "}
              <a href="#">Inventory Management</a>
            </li>
            <li>
              <i className="fa-solid fa-caret-right"></i>{" "}
              <a href="#">Supply Chain Optimization</a>
            </li>
            <li>
              <i className="fa-solid fa-caret-right"></i>{" "}
              <a href="#">SKU Forecasting</a>
            </li>
            <li>
              <i className="fa-solid fa-caret-right"></i>{" "}
              <a href="#">WareHouse Management</a>
            </li>
            <li>
              <i className="fa-solid fa-caret-right"></i>{" "}
              <a href="#">Sales Demand Prediction</a>
            </li>
          </ul>
        </div>
        <div className="footer-second-div">
          <div className="footer-div-title">Explore</div>
          <ul className="footer-ul">
            <li>
              <i className="fa-solid fa-caret-right"></i>{" "}
              <a href="#">Simulation Process</a>
            </li>
            <li>
              <i className="fa-solid fa-caret-right"></i>{" "}
              <a href="#">Shipping Optimization</a>
            </li>
            <li>
              <i className="fa-solid fa-caret-right"></i>{" "}
              <a href="#">AI-Driven Insights</a>
            </li>
            <li>
              <i className="fa-solid fa-caret-right"></i>{" "}
              <a href="#">Revenue-based Forecasting</a>
            </li>
          </ul>
        </div>
        <div className="footer-second-div">
          <div className="footer-div-title">Resources</div>
          <ul className="footer-ul">
            <li>
              <i className="fa-solid fa-caret-right"></i> <a href="#">Blog </a>
            </li>
            <li>
              <i className="fa-solid fa-caret-right"></i>{" "}
              <a href="#">Help Center</a>
            </li>
            <li>
              <i className="fa-solid fa-caret-right"></i>{" "}
              <a href="#">Customer Support</a>
            </li>
            <li>
              <i className="fa-solid fa-caret-right"></i>{" "}
              <a href="#">Best practices</a>
            </li>
            <li>
              <i className="fa-solid fa-caret-right"></i>{" "}
              <a href="#">Case Studies</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
