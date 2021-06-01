import React, { useContext } from "react";
import { CurrentPlaying } from "../app.js";

function Song({ song }) {
  const currentPlaying = useContext(CurrentPlaying);

  let playing = false;

  if (currentPlaying.value.id === song.id && currentPlaying.value.isPlaying) {
    playing = true;
  }

  function handleClick() {
    currentPlaying.setCurrentPlaying({
      id: song.id,
      isPlaying: !playing,
    });
  }

  return (
    <div className="song" id={song.id} key={song.key}>
      <div className="album-song-buttons-content">
        <button
          className="buttonIcon play"
          role="switch"
          aria-checked={playing.toString()}
          aria-label="Reproducir canción de la lista"
          onClick={handleClick}
        >
          <i
            className={playing ? "icon-pause" : "icon-play"}
            id="icon-play1"
            aria-hidden="true"
          ></i>
        </button>
        <button
          className="btn-heart"
          role="switch"
          aria-checked="false"
          aria-label="Guardar en tu biblioteca"
        >
          <i
            className="icon-heart"
            role="switch"
            aria-hidden="true"
            alt="hola"
          ></i>
        </button>
      </div>
      <p className="name-song">{song.nameSong} </p>
      <p className="name-artist">{song.artista}</p>
      <p className="album">{song.album}</p>
      <p className="date-song">2020-28-11</p>
      <p className="time-song">{song.time}</p>
    </div>
  );
}

export default Song;
