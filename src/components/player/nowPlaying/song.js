import React from "react";

function Song({ songData }) {
  return (
    <div className="nowPlaying-details">
      <div className="nowPlaying-description">
        <a href="#song" className="nowPlaying-title">
          {songData ? songData.nameSong : "Grand Escape (feat. Tokio Miura)"}
        </a>
        <a href="#artist" className="nowPlaying-artist">
          {songData
            ? `${songData.album}, ${songData.artista}`
            : " RADWIMPS, Toko Miura"}
        </a>
      </div>
      <div className="nowPlaying-actions">
        <button
          className="player-control"
          role="switch"
          aria-checked="false"
          aria-label="Guardar en tu biblioteca"
          title="Guardar en tu biblioteca"
        >
          <i className="icon-heart" role="switch" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default Song;
