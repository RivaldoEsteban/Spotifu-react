import React, { useRef } from "react";

function Playback({
  songData,
  currentTime,
  currentProgress,
  totalTime,
  setCurrentAudioTime,
  songDuration,
}) {
  // console.log(songDuration);
  const songDurationMinutes = Math.floor(songDuration / 60);
  const songDurationSegundes = Math.floor(
    (songDuration % 60).toString().padStart(2, "00")
  );
  const slider = useRef(null);
  const realTime = useRef(null);

  function handleClick(event) {
    const sliderWidth = slider.current.offsetWidth; //100% del slider en px
    console.log(sliderWidth);
    console.log(event.clientX);
    const currentSliderPoint = event.clientX - slider.current.offsetLeft;
    console.log(currentSliderPoint);
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
        {`${songDurationMinutes}:${songDurationSegundes}`}
      </span>
    </div>
  );
}

export default Playback;
