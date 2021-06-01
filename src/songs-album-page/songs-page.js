import React, { useContext } from "react";
import "./playlist.css";
import { Link } from "react-router-dom";
import Song from "./song.js";
import { CurrentPlaying } from "../app.js";

function SongsPage({ songs }) {
  const currentPlaying = useContext(CurrentPlaying);
  const random = String(Math.floor(Math.random() * (11 - 1) + 1));

  let playing = false;
  if (
    currentPlaying.value.id === `song-${random}` &&
    currentPlaying.value.isPlaying
  ) {
    playing = true;
  }

  function handleRandomSong() {
    currentPlaying.setCurrentPlaying({
      id: `song-${random}`,
      isPlaying: !playing,
    });
  }

  return (
    <>
      <main className="layout-main artist">
        <div className="header-titleAlbum-container">
          <div className="page">
            <div className="sticky">
              <div className="page-block">
                <header
                  className="header"
                  aria-label="barra superior y menú del usuario"
                >
                  <div className="navigation">
                    <div className="navigation-buttons-container">
                      <Link to="/">
                        <button
                          className="navigation-prev"
                          aria-label="volver"
                          title="avanzar"
                        >
                          <i className="icon-arrowLeft" aria-hidden="true"></i>
                        </button>
                      </Link>
                      <Link to="/songs-album">
                        <button
                          className="navigation-next"
                          disabled
                          aria-label="avanzar"
                          title="avanzar"
                        >
                          <i className="icon-arrowRight" aria-hidden="true"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <form
                    className="search"
                    role="search"
                    aria-label="Buscar por artistas, canciones o podcast"
                  >
                    <i className="icon-search" aria-hidden="true"></i>
                    <input
                      type="search"
                      placeholder="Buscar por artistas, canciones o podcast"
                    />
                  </form>
                </header>
              </div>
              <section
                className="cover-artist"
                alt="Cover del artista"
                aria-label=""
              ></section>
            </div>
          </div>
          <div className="nameArtist">
            <h1 className="nameArtist-title">This is Bad Bunny</h1>
            <p className="nameArtist-name">Bad Bunny</p>
            <p className="nameArtist-followers">2,611,830 SEGUIDORES</p>
            <button
              className="nameArtist-button"
              id="button-random"
              onClick={handleRandomSong}
            >
              Aleatorio
            </button>
          </div>
        </div>
        <div className="listSong-artist">
          <div className="filter-song">
            <i className="icon-search"></i>
            <p>Filtrar</p>
          </div>
          <div className="song title">
            <div className="spacio-hidden"></div>
            <p className="name-song">Titulo</p>
            <p className="name-artist">Artista</p>
            <p className="album">album</p>
            <p className="date-song">Date</p>
            <p className="time-song">Time</p>
          </div>
          <div className="song-content" id="container-songs">
            {songs.map((song) => {
              return <Song song={song} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default SongsPage;
