import React, { useContext, useRef } from "react";
import { CurrentPlaying } from "../../../app";

function PlayerButtons({ songData, isPlaying }) {
  const currentPlaying = useContext(CurrentPlaying);
  const mp3 = useRef(null);
  console.log(mp3.current);
  const audio = mp3.current;
  console.log("audio", audio);

  if (audio) {
    if (isPlaying) {
      audio.src = songData.track;
      console.log("play");
      audio.play();
    } else {
      audio.pause();
    }
  }

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
      <audio ref={mp3}></audio>
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
