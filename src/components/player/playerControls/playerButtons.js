import React, { useContext } from "react";
import { CurrentPlaying } from "../../../app";

function PlayerButtons({ songData, isPlaying }) {
  const currentPlaying = useContext(CurrentPlaying);

  function handleClick() {
    currentPlaying.setCurrentPlaying({
      id: songData.id,
      isPlaying: !isPlaying,
    });
  }

  return (
    <div
      className="playerControls-buttons"
      aria-label="Controles de reproducción"
    >
      <button className="buttonIcon">
        <i className="icon-prev " aria-label="Anterior"></i>
      </button>
      <button className="buttonIcon is-white" onClick={handleClick}>
        <i
          className={isPlaying ? "icon-pause" : "icon-play"}
          aria-label="Reproducción"
        ></i>
      </button>
      <button className="buttonIcon">
        <i className="icon-next" aria-label="Siguiente "></i>
      </button>
    </div>
  );
}

export default PlayerButtons;
