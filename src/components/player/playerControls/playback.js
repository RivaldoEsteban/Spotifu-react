import React, { useRef, useEffect } from "react";

function Playback({
  songData,
  currentTime,
  currentProgress,
  totalTime,
  setCurrentAudioTime,
  totalTimeSong,
}) {
  const slider = useRef(null);
  const realTime = useRef(null);
  function handleClick(event) {
    const sliderWidth = slider.current.offsetWidth; //100% del slider en px
    const currentSliderPoint = event.clientX - slider.current.offsetLeft;
    const percentageClickSlider = (currentSliderPoint * 100) / sliderWidth;

    const newCurrentProgress = Math.floor(
      (totalTime * percentageClickSlider) / 100
    );
    console.log(newCurrentProgress); //segundos

    const newCurrentSliderProgress = (newCurrentProgress * 100) / totalTime; //%
    realTime.current.style.inlineSize = `${newCurrentSliderProgress}%`;

    setCurrentAudioTime(newCurrentProgress);
  }

  return (
    <div className="playerPlayback">
      <span className="playerPlayback-progressTime">
        {songData ? currentTime : "0:00"}
      </span>
      <div className="playerPlayback-slider">
        <div className="slider" onClick={handleClick} ref={slider}>
          <div
            className="slider-progress"
            style={{ inlineSize: `${currentProgress}%` }}
            ref={realTime}
          >
            <button
              className="slider-button"
              aria-label="controlar el progreso de la reproducción"
            ></button>
          </div>
        </div>
      </div>
      <span className="playerPlayback-progressTime">
        {songData ? totalTimeSong() : "3:10"}
      </span>
    </div>
  );
}

export default Playback;
