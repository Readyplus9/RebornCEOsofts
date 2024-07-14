import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App d-flex">
        <Sidebar />
        <div className="content flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* เพิ่ม Route สำหรับหน้าอื่น ๆ */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
