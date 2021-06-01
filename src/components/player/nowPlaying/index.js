import React from "react";
import "./nowPlaying-style.css";
import Cover from "./cover";
import Song from "./song";

function NowPlaying({ songData }) {
  return (
    <>
      <div className="nowPlaying">
        <Cover songData={songData} />
        <Song songData={songData} />
      </div>
    </>
  );
}

export default NowPlaying;
