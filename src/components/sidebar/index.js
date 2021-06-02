import React from "react";
import "./sidebar.css";
import Header from "./header-sidebar";
import Navigation from "./navigation/index";

function SideBar() {
  return (
    <div className="sidebar">
      <Header />
      <Navigation />
    </div>
  );
}

export default SideBar;
