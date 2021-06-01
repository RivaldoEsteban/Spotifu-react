import React, { useContext } from "react";
import { CurrentPlaying } from "../../../app.js";
function Playback({ songData }) {
  const currentPlaying = useContext(CurrentPlaying);

  console.log(currentPlaying);

  const x = setInterval(() => {}, 1000);
  return (
    <div className="playerPlayback">
      <span className="playerPlayback-progressTime">0:00</span>
      <div className="playerPlayback-slider">
        <div className="slider">
          <div className="slider-progress">
            <button
              className="slider-button"
              aria-label="controlar el progreso de la reproducción"
            ></button>
          </div>
        </div>
      </div>
      <span className="playerPlayback-progressTime">
        {songData ? songData.time : "3:10"}
      </span>
    </div>
  );
}

export default Playback;
