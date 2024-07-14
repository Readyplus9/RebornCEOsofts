import React from "react";
import styles from "../assets/styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <p>26 New Messages!</p>
        <a href="#" className={styles.footerLink}>
          View Details
        </a>
      </div>
      <div className={styles.footerSection}>
        <p>11 New Tasks!</p>
        <a href="#" className={styles.footerLink}>
          View Details
        </a>
      </div>
      <div className={styles.footerSection}>
        <p>123 New Orders!</p>
        <a href="#" className={styles.footerLink}>
          View Details
        </a>
      </div>
      <div className={styles.footerSection}>
        <p>13 New Tickets!</p>
        <a href="#" className={styles.footerLink}>
          View Details
        </a>
      </div>
    </footer>
  );
};

export default Footer;
