import React from "react";
import styles from "../assets/styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Dashboard
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Login
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
