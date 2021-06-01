import React from "react";
import "./header-style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="sticky">
      <div className="page-block">
        <header
          className="header"
          aria-label="barra superior y menú del usuario"
        >
          <div className="navigation">
            <div className="navigation-buttons-container">
              <Link to="/Spotifu-react/">
                <button
                  className="navigation-prev"
                  aria-label="volver"
                  title="avanzar"
                >
                  <i className="icon-arrowLeft" aria-hidden="true"></i>
                </button>
              </Link>
              <Link to="/Spotifu-react/songs-album">
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
    </div>
  );
}

export default Header;
