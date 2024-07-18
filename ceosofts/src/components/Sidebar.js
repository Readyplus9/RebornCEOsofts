import React, { useState } from "react"; // เพิ่ม useState ที่นี่
import {
  FaHome,
  FaShoppingCart,
  FaMoneyCheckAlt,
  FaWarehouse,
  // FaChartLine,
  FaUser,
  FaCog,
  FaSignInAlt,
  FaSignOutAlt,
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa";
import "../assets/Sidebar.css";

const Sidebar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>CEO softs</h3>
      </div>
      <ul className="sidebar-list">
        <li>
          <FaHome /> Dashboard
        </li>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="menu-item">
            <FaMoneyCheckAlt /> ฝ่ายการเงิน{" "}
            {showSubmenu ? <FaCaretUp /> : <FaCaretDown />}
          </div>
          {showSubmenu && (
            <ul className="submenu">
              <li>รายการฝากเงิน</li>
              <li>รายการถอนเงิน</li>
              <li>รายการบัญชีธนาคาร</li>
              <li>รายการนัดรับเช็ค</li>
              <li>รายการนัดจ่ายเช็ค</li>
              <li>ตั้งค่าสถานะเช็ค</li>
            </ul>
          )}
        </li>
        <li>
          <FaShoppingCart /> ฝ่ายขาย
        </li>
        <li>
          <FaWarehouse /> ฝ่ายคลังสินค้า
        </li>
        <li>
          <FaUser /> ฝ่ายบุคคล
        </li>
        <li>
          <FaCog /> การจัดการระบบ
        </li>
        <li>
          <FaSignInAlt /> Login
        </li>
        <li>
          <FaSignOutAlt /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
