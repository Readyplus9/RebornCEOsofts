import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/Footer.css"; // ตรวจสอบการอิมพอร์ตให้ถูกต้องตามโครงสร้าง

const Footer = () => {
  return (
    <footer className="footer py-3 bg-dark text-white">
      <div>
        <p>
          Web Developer by CEO softs &copy; 2024 CEOsofts. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
