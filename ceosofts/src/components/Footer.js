import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/Footer.css"; // ตรวจสอบการอิมพอร์ตให้ถูกต้องตามโครงสร้าง

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white text-center w-100">
      <div className="container">
        <p>&copy; 2024 CEOsofts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
