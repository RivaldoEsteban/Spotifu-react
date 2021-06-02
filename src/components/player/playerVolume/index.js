import React, { useRef, useState } from "react";
import "../../../css/icons/icons.css";
import "./volume.css";

function Volume({ volume }) {
  const [currentVolume, setCurrentVolume] = useState("");

  const slider = useRef(null);
  const playerButton = useRef(null);
  const iconVolume = useRef(null);

  function muteSong() {
    iconVolume.current.className = "icon-volumeOff";
    volume.volume = 0;
    setCurrentVolume(0);
  }

  function handleClickVolume(event) {
    const sliderWidthVolume = slider.current.offsetWidth; //tamańo del slider 96px
    const currentSliderPointVolume = event.clientX - slider.current.offsetLeft; // indicardor de en que px estoy picando
    const percentageClickSliderVolume = Math.floor(
      (currentSliderPointVolume * 100) / sliderWidthVolume
    ); // %
    playerButton.current.style.color = "white";
    iconVolume.current.className = "icon-volumeUp";
    setCurrentVolume(String(currentSliderPointVolume));
    volume.volume = percentageClickSliderVolume / 100;
  }

  return (
    <div className="player-playerVolume">
      <div className="playerVolume">
        <button
          className="player-control"
          aria-label="Silenciar"
          aria-describedby="volumen-icon"
          ref={playerButton}
          onClick={muteSong}
        >
          <i
            className="icon-volumeUp"
            id="volumen-icon"
            role="presentation"
            aria-label="volumen alto"
            ref={iconVolume}
          ></i>
        </button>
        <div className="playerVolume-slider">
          <div className="slider" onClick={handleClickVolume} ref={slider}>
            <div
              className="slider-progress volume"
              style={{ inlineSize: `${currentVolume}px` }}
            >
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
