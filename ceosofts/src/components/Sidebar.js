import React from "react";
import {
  FaHome,
  FaShoppingCart,
  FaMoneyCheckAlt,
  FaWarehouse,
  FaChartLine,
  FaUser,
  FaCog,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import "../assets/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>รายงาน</h3>
      </div>
      <ul className="sidebar-list">
        <li>
          <FaHome /> Dashboard
        </li>
        <li>
          <FaShoppingCart /> สำนักงานขาย
        </li>
        <li>
          <FaMoneyCheckAlt /> ฝ่ายจัดซื้อ
        </li>
        <li>
          <FaWarehouse /> ฝ่ายคลังสินค้า
        </li>
        <li>
          <FaChartLine /> ฝ่ายการเงิน
        </li>
        <li>
          <FaUser /> ฝ่ายบุคคล
        </li>
        <li>
          <FaCog /> การจัดการระบบ
        </li>
        <li>
          <FaUser /> User Setting
        </li>
      </ul>
      <div className="sidebar-footer">
        <ul className="sidebar-list">
          <li>
            <FaSignInAlt /> Login
          </li>
          <li>
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
