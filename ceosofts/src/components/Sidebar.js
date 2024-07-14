// src/components/Sidebar.js
import React from "react";
import "../assets/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>รายงาน</h3>
      </div>
      <ul className="sidebar-list">
        <li>Dashboard</li>
        <li>สำนักงานขาย</li>
        <li>ฝ่ายจัดซื้อ</li>
        <li>ฝ่ายคลังสินค้า</li>
        <li>ฝ่ายการเงิน</li>
        <li>ฝ่ายบุคคล</li>
        <li>การจัดการระบบ</li>
        <li>User Setting</li>
      </ul>
      <div className="sidebar-footer">
        <li>Login</li>
        <li>Logout</li>
      </div>
    </div>
  );
};

export default Sidebar;
