import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu" aria-label="Menu">
      <ul className="menu-list">
        <li className="menuIten is-active">
          <Link to="/" className="link" aria-current="page">
            <i className="icon-home" aria-hidden="true"></i>
            <span>Inicio</span>
          </Link>
        </li>
        <li className="menuIten ">
          <Link to="/Spotifu-react/songs-album" className="link">
            <i className="icon-search" aria-hidden="true"></i>
            <span>Buscar</span>
          </Link>
        </li>
        <li className="menuIten">
          <Link to="/Spotifu-react/songs-album" className="link">
            <i className="icon-creditCard" aria-hidden="true"></i>
            <span>Premium</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
