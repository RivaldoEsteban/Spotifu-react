import React, { useContext } from "react";
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

  return (
    <footer className="player">
      <NowPlaying songData={song} />
      <PlayerControls
        songData={song}
        isPlaying={currentPlaying.value.isPlaying}
      />
      <Volume songs={songs} />
    </footer>
  );
}

export default Player;
