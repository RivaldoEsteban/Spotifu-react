import React from "react";
import "./playerControls-style.css";
import PlayerButtons from "./playerButtons";
import Playback from "./playback";

function PlayerControls({ songData, isPlaying }) {
  return (
    <div className="player-playerControls">
      <div className="playerControls">
        <PlayerButtons songData={songData} isPlaying={isPlaying} />
        <Playback songData={songData} isPlaying={isPlaying} />
      </div>
    </div>
  );
}

export default PlayerControls;
