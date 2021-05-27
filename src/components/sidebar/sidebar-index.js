import React from "react";
// import "../../css/list.css";
function SideBar() {
  return (
    <div className="layout-sidebar">
      <div className="sidebar">
        <header className="logo">
          <a href="/" aria-current="pag">
            <img
              src="./images/spotifu-logo.png"
              className="logo-image"
              alt="Logo de Spotifu"
              title="Logo de Spotifu"
            />
          </a>
        </header>
        <nav className="menu" arias-label="menu principal">
          <ul className="menu-list">
            <li className="menuIten is-active">
              <a href="./index.html" className="link" aria-current="page">
                <i className="icon-home" aria-hidden="true"></i>
                <span>Inicio</span>
              </a>
            </li>
            <li className="menuIten ">
              <a href="./songs-album.html" className="link">
                <i className="icon-search" aria-hidden="true"></i>
                <span>Buscar</span>
              </a>
            </li>
            <li className="menuIten">
              <a href="./songs-album.html" className="link">
                <i className="icon-creditCard" aria-hidden="true"></i>
                <span>Premium</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav className="list biblioteca" aria-label="Tu biblioteca">
          <h2 className="list-title">Tu biblioteca</h2>
          <ul className="list-content">
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Creada para ti
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Escuchado recientemente
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Tus me gusta
              </a>
            </li>
          </ul>
        </nav>
        <nav className="list" aria-label="Playlist">
          <h2 className="list-title">Playlist</h2>
          <ul className="list-content">
            <li className="list-item">
              <span className="ellipsis">
                <a href="./songs-album.html" className="link">
                  Naruto al 100% para prog Naruto al 100% para prog Naruto al
                  100% para prog{" "}
                </a>
              </span>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Naruto al 100% para progr…
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Para cantar en la ducha
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Sin parar
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Naruto openings
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Boku no pico
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                This is Pokémon
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Más populares de la semana
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Mis pistas de shazam
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Audio Library
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Amor y otras
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Latin
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Pokemon
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Para cantar
              </a>
            </li>
            <li className="list-item">
              <a href="./songs-album.html" className="link">
                Yui
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
