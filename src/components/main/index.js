import React from "react";
import "./main-style.css";
import Header from "./header/header";
import Inicio from "./playlist/region1/index";
import RecentlyHeard from "./playlist/region2/index";
import DailyMix from "./playlist/region3/index";
import Podcast from "./playlist/region4/index";
import "../../App.css";
import "../../css/style-global.css";

function Main() {
  return (
    <div className="page">
      <Header />
      <main className="page-block">
        <Inicio />
        <RecentlyHeard />
        <DailyMix />
        <Podcast />
      </main>
    </div>
  );
}

export default Main;
