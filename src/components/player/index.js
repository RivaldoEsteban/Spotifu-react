import React, { useContext, useRef, useEffect, useState } from "react";
import "./player-style.css";
import NowPlaying from "./nowPlaying/index";
import PlayerControls from "./playerControls/index";
import "../../css/icons/icons.css";
import Volume from "./playerVolume/index";
import { CurrentPlaying } from "../../app";

function Player({ songs }) {
  const currentPlaying = useContext(CurrentPlaying);

  const song = songs.find((song) => {
    if (song.id === currentPlaying.value.id) {
      return true;
    }
  });

  const mp3 = useRef(null);

  useEffect(() => {
    const audio = mp3.current;
    if (audio) {
      if (
        currentPlaying.value.isPlaying &&
        song.id === currentPlaying.value.id
      ) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [currentPlaying.value.isPlaying]);

  const [currentTime, setCurrentTime] = useState("0:00");
  const [currentProgress, setCurrentProgress] = useState("");
  const [time, setTime] = useState("");
  const [songDuration, setSongDuration] = useState("");
  const [volume, setVolume] = useState("");

  useEffect(() => {
    setInterval(() => {
      setVolume(mp3?.current);
      const time = mp3?.current?.currentTime;
      const minutes = Math.floor(time / 60);
      const segundos = Math.floor(time % 60)
        .toString()
        .padStart(2, "00");
      setCurrentTime(`${minutes}:${segundos}`);
      const progress = (time * 100) / mp3?.current?.duration;
      const totalTime = mp3?.current?.duration;
      const songDuration = mp3?.current?.duration;
      // const volume = mp3?.current?.volume;
      setCurrentProgress(progress);
      setTime(Math.floor(totalTime));
      setSongDuration(songDuration);
      // setVolume(volume);
    }, 1000);
  }, []);

  function setCurrentAudioTime(currentTime) {
    mp3.current.currentTime = currentTime;
  }

  if (!song) {
    return null;
  }

  return (
    <footer className="player">
      <audio autoPlay ref={mp3} src={song?.track}></audio>
      <NowPlaying songData={song} />
      <PlayerControls
        songData={song}
        isPlaying={currentPlaying.value.isPlaying}
        currentTime={currentTime}
        currentProgress={currentProgress}
        totalTime={time}
        setCurrentAudioTime={setCurrentAudioTime}
        songDuration={songDuration}
      />
      <Volume songs={songs} volume={volume} setVolume={setVolume} />
    </footer>
  );
}

export default Player;
