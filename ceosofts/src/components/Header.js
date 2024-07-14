import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/Header.css"; // ตรวจสอบการอิมพอร์ตให้ถูกต้องตามโครงสร้าง

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container">
        <Link className="navbar-brand" to="/">
          CEOSofts
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
