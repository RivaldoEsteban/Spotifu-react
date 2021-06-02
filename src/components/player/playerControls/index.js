import React from "react";
import "./playerControls-style.css";
import PlayerButtons from "./playerButtons";
import Playback from "./playback";

function PlayerControls({
  songData,
  isPlaying,
  currentTime,
  currentProgress,
  totalTime,
  setCurrentAudioTime,
  totalTimeSong,
}) {
  return (
    <div className="player-playerControls">
      <div className="playerControls">
        <PlayerButtons songData={songData} isPlaying={isPlaying} />
        <Playback
          songData={songData}
          isPlaying={isPlaying}
          currentTime={currentTime}
          currentProgress={currentProgress}
          totalTime={totalTime}
          setCurrentAudioTime={setCurrentAudioTime}
          totalTimeSong={totalTimeSong}
        />
      </div>
    </div>
  );
}

export default PlayerControls;
