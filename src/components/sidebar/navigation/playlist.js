import React from "react";
import { Link } from "react-router-dom";

function Playlist() {
  return (
    <nav className="list" aria-label="Playlist">
      <h2 className="list-title">Playlist</h2>
      <ul className="list-content">
        <li className="list-item">
          <span className="ellipsis">
            <Link to="/Spotifu-react/songs-album" className="link">
              Naruto al 100% para prog Naruto al 100% para prog Naruto al 100%
              para prog
            </Link>
          </span>
        </li>
        <li className="list-item">
          <Link to="/Spotifu-react/songs-album" className="link">
            Naruto al 100% para progr…
          </Link>
        </li>
        <li className="list-item">
          <Link to="/Spotifu-react/songs-album" className="link">
            Para cantar en la ducha
          </Link>
        </li>
        <li className="list-item">
          <Link to="/Spotifu-react/songs-album" className="link">
            Sin parar
          </Link>
        </li>
        <li className="list-item">
          <Link to="/Spotifu-react/songs-album" className="link">
            Naruto openings
          </Link>
        </li>
        <li className="list-item">
          <Link to="/Spotifu-react/songs-album" className="link">
            Boku no pico
          </Link>
        </li>
        <li className="list-item">
          <Link to="/Spotifu-react/songs-album" className="link">
            This is Pokémon
          </Link>
        </li>
        <li className="list-item">
          <Link to="./songs-album" className="link">
            Más populares de la semana
          </Link>
        </li>
        <li className="list-item">
          <Link to="./songs-album" className="link">
            Mis pistas de shazam
          </Link>
        </li>
        <li className="list-item">
          <Link to="./songs-album" className="link">
            Audio Library
          </Link>
        </li>
        <li className="list-item">
          <Link to="./songs-album" className="link">
            Amor y otras
          </Link>
        </li>
        <li className="list-item">
          <Link to="./songs-album" className="link">
            Latin
          </Link>
        </li>
        <li className="list-item">
          <Link to="./songs-album" className="link">
            Pokemon
          </Link>
        </li>
        <li className="list-item">
          <Link to="./songs-album" className="link">
            Para cantar
          </Link>
        </li>
        <li className="list-item">
          <Link to="./songs-album" className="link">
            Yui
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Playlist;
