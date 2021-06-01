import React from "react";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="playlistList-content">
      <Link to="/Spotifu-react/songs-album">
        <div className="playlistA">
          <div className="playlistA-cover">
            <img
              src="images/cover/top-50-mx.png"
              width="150"
              height="150"
              alt="Cover de la playlist anime hits"
            />
            <button
              className="buttonIcon is-primary"
              aria-label="Reproducir"
              title="Reproducir"
              role="button"
            >
              <i className="icon-play" aria-hidden="true"></i>
            </button>
          </div>
          <h3 className="playlist-title">Top 50 México</h3>
          <h4 className="playlist-description">
            Tu actulizacion diaria de las canciones mas escuchadas
          </h4>
        </div>
      </Link>
      <Link to="/Spotifu-react/songs-album">
        <div className="playlistA">
          <div className="playlistA-cover">
            <img
              src="images/cover/croatia.png"
              width="150"
              height="150"
              alt="Cover de la playlist anime hits"
            />
            <button
              className="buttonIcon is-primary"
              aria-label="Reproducir"
              title="Reproducir"
              role="button"
            >
              <i className="icon-play" aria-hidden="true"></i>
            </button>
          </div>
          <h3 className="playlist-title">Top 50 Croatia</h3>
          <h4 className="playlist-description">
            Tu actulizacion diaria de las canciones mas escuchadas
          </h4>
        </div>
      </Link>
      <Link to="/Spotifu-react/songs-album">
        <div className="playlistA">
          <div className="playlistA-cover">
            <img
              src="images/cover/top-50-global.png"
              width="150"
              height="150"
              alt="Cover de la playlist anime hits"
            />
            <button
              className="buttonIcon is-primary"
              aria-label="Reproducir"
              title="Reproducir"
              role="button"
            >
              <i className="icon-play" aria-hidden="true"></i>
            </button>
          </div>
          <h3 className="playlist-title">Top 50 Global</h3>
          <h4 className="playlist-description">
            Tu actulizacion diaria de las canciones mas escuchadas
          </h4>
        </div>
      </Link>
      <Link to="/Spotifu-react/songs-album">
        <div className="playlistA">
          <div className="playlistA-cover">
            <img
              src="images/cover/colombia.png"
              width="150"
              height="150"
              alt="Cover de la playlist anime hits"
            />
            <button
              className="buttonIcon is-primary"
              aria-label="Reproducir"
              title="Reproducir"
              role="button"
            >
              <i className="icon-play" aria-hidden="true"></i>
            </button>
          </div>
          <h3 className="playlist-title">Top 50 Colombia</h3>
          <h4 className="playlist-description">
            Tu actulizacion diaria de las canciones mas escuchadas
          </h4>
        </div>
      </Link>
      <Link to="/Spotifu-react/songs-album">
        <div className="playlistA">
          <div className="playlistA-cover">
            <img
              src="images/cover/top-50-peru.png"
              width="150"
              height="150"
              alt="Cover de la playlist anime hits"
            />
            <button
              className="buttonIcon is-primary"
              aria-label="Reproducir"
              title="Reproducir"
              role="button"
            >
              <i className="icon-play" aria-hidden="true"></i>
            </button>
          </div>
          <h3 className="playlist-title">Top 50 Perú</h3>
          <h4 className="playlist-description">
            Tu actulizacion diaria de las canciones mas escuchadas
          </h4>
        </div>
      </Link>
      <Link to="/Spotifu-react/songs-album">
        <div className="playlistA">
          <div className="playlistA-cover">
            <img
              src="images/cover/francia.png"
              width="150"
              height="150"
              alt="Cover de la playlist anime hits"
            />
            <button
              className="buttonIcon is-primary"
              aria-label="Reproducir"
              title="Reproducir"
              role="button"
            >
              <i className="icon-play" aria-hidden="true"></i>
            </button>
          </div>
          <h3 className="playlist-title">Top 50 Francia</h3>
          <h4 className="playlist-description">
            Tu actulizacion diaria de las canciones mas escuchadas
          </h4>
        </div>
      </Link>
      <Link to="/Spotifu-react/songs-album">
        <div className="playlistA">
          <div className="playlistA-cover">
            <img
              src="images/cover/top-50-spain.png"
              width="150"
              height="150"
              alt="Cover de la playlist anime hits"
            />
            <button
              className="buttonIcon is-primary"
              aria-label="Reproducir"
              title="Reproducir"
              role="button"
            >
              <i className="icon-play" aria-hidden="true"></i>
            </button>
          </div>
          <h3 className="playlist-title">Top 50 España</h3>
          <h4 className="playlist-description">
            Tu actulizacion diaria de las canciones mas escuchadas
          </h4>
        </div>
      </Link>
      <Link to="/Spotifu-react/songs-album">
        <div className="playlistA">
          <div className="playlistA-cover">
            <img
              src="images/cover/usa.png"
              width="150"
              height="150"
              alt="Cover de la playlist anime hits"
            />
            <button
              className="buttonIcon is-primary"
              aria-label="Reproducir"
              title="Reproducir"
              role="button"
            >
              <i className="icon-play" aria-hidden="true"></i>
            </button>
          </div>
          <h3 className="playlist-title">Top 50 U.S.A</h3>
          <h4 className="playlist-description">
            Tu actulizacion diaria de las canciones mas escuchadas
          </h4>
        </div>
      </Link>
      <Link to="/Spotifu-react/songs-album">
        <div className="playlistA">
          <div className="playlistA-cover">
            <img
              src="images/cover/top-50-chile.png"
              width="150"
              height="150"
              alt="Cover de la playlist anime hits"
            />
            <button
              className="buttonIcon is-primary"
              aria-label="Reproducir"
              title="Reproducir"
              role="button"
            >
              <i className="icon-play" aria-hidden="true"></i>
            </button>
          </div>
          <h3 className="playlist-title">Top 50 Chile</h3>
          <h4 className="playlist-description">
            Tu actulizacion diaria de las canciones mas escuchadas
          </h4>
        </div>
      </Link>
    </div>
  );
}

export default Content;
