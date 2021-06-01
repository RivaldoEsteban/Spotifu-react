import React from "react";

function Cover({ songData }) {
  return (
    <div className="nowPlaying-cover">
      <img
        src={songData ? songData.cover : "./images/te-mudaste-cover.png"}
        alt="Portada de Grand Scape"
        title="Portada de Grand Scape de (RADWIMPS, Toko Miura)"
      />
    </div>
  );
}

export default Cover;
