import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/Header.css";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light w-100">
      <div className="container-fluid">
        {" "}
        {/* ใช้ container-fluid */}
        {/* <Link className="navbar-brand" to="/">
          Home
        </Link> */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Product">
                Products and services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
