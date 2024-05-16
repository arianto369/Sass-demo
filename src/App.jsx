import React from "react";

import "./App.scss";

import Navbar from "./layouts/Navbar";
import SideBar from "./layouts/SideBar";

const App = () => {
  return (
    <div className="container">
      <div className="nav-container">
        <Navbar />
      </div>
      <div className="hero-container purple-theme">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="title">
          <h1>
            Welcome To <span className="blue-theme">Sass</span> 101
          </h1>
          <h3>The best pre-proccessor for css</h3>
          <a className="purple-theme" href="https://sass-lang.com/" target="_blank">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default App;
