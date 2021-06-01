import React from "react";
import "../../../css/icons/icons.css";
import "./volume.css";

function Volume({ songs }) {
  return (
    <div className="player-playerVolume">
      <div className="playerVolume">
        <button
          className="player-control"
          aria-label="Silenciar"
          aria-describedby="volumen-icon"
        >
          <i
            className="icon-volumeUp"
            id="volumen-icon"
            role="presentation"
            aria-label="volumen alto"
          ></i>
        </button>
        <div className="playerVolume-slider">
          <div className="slider">
            <div className="slider-progress">
              <button
                className="slider-button"
                aria-label="controlar el progreso de la reproducción"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volume;
