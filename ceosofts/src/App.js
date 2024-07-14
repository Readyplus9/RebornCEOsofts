import React from "react";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="App d-flex">
      <Sidebar />
      <div className="content flex-grow-1">
        <HomePage />
      </div>
    </div>
  );
};

export default App;
