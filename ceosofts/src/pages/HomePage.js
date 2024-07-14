import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../assets/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <main className="container mt-5">
                <div className="text-center">
                    <h1 className={styles.title}>CEOSofts</h1>
                    <p>โปรแกรมบัญชีออนไลน์ และ รับทำเว็บไซต์ ครบวงจรที่เดียว</p>
                    <p>
                        ในเสนอบริการ ใบวางบิล ใบแจ้งหนี้ ใบเสร็จรับเงิน ใบกำกับภาษี
                        ใบส่งสินค้า สต๊อกสินค้า
                    </p>
                    <p>กดสมัครเพื่อทดลองใช้ ฟรี1ปี หรือ</p>
                    <p>username = admin<br/>password = 123456</p>
                    <button className="btn btn-success mt-3">REGISTER</button>
                    <h2 className="mt-5">ความสามารถ</h2>
                    <p>
                        เอกสารครบในงานเอกสารในบริษัทที่ต้องใช้ ส่งออกเอกสารเป็น pdf หรือ excel
                        ในเข้าข้อมูลเอกสาร excel ได้ สามารถใช้งานได้ดี
                    </p>
                    <h2 className="mt-5">Contact Us</h2>
                    <p>ติดต่อสอบถามที่ facebook CEO softs</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
