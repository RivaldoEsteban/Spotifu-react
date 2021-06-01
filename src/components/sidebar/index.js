import React from "react";
import "./sidebar.css";
import Header from "./header-sidebar";
import Navigation from "./navigation/index";

function SideBar() {
  return (
    <div className="layout-sidebar">
      <div className="sidebar">
        <Header />
        <Navigation />
      </div>
    </div>
  );
}

export default SideBar;
