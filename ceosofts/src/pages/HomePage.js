import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../assets/styles.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>CEOsofts</h1>
        <p className={styles.subtitle}>
          โปรแกรมบัญชีออนไลน์ และ รับทำเว็บไซต์ ครบจบที่เดียว
        </p>
        <p className={styles.description}>
          ใบเสนอราคา ใบวางบิล ใบแจ้งหนี้ ใบเสร็จรับเงิน ใบกำกับภาษี ใบส่งสินค้า
          สต๊อกสินค้า
        </p>
        <p className={styles.cta}>กดสมัครเพื่อทดลองใช้ ฟรี1ปี หรือ</p>
        <p className={styles.credentials}>
          username = admin <br />
          password = 123456
        </p>
        <button className={styles.button}>REGISTER</button>
        <section className={styles.features}>
          <h2 className={styles.featuresTitle}>ความสามารถ</h2>
          <p className={styles.featuresDescription}>
            เอกสารครบในงานเอกสารในบริษัทที่ต้องใช้ ส่งออกเอกสารเป็น pdf หรือ
            excel ในเข้าข้อมูลเอกสาร excel ได้ สามารถใช้งานได้ดี
            หรือจะใช้เฉพาะภายในองค์กรได้ไม่ออกไลท์ก็ได้
          </p>
        </section>
        <section className={styles.contact}>
          <h2>Contact Us</h2>
          <p>
            ติดต่อสอบถามที่ facebook{" "}
            <a
              href="https://www.facebook.com/ceosofts"
              className={styles.contactLink}>
              CEO softs
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
