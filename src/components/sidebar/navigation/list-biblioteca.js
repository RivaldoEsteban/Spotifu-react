import React from "react";
import { Link } from "react-router-dom";

function Biblioteca() {
  return (
    <nav className="list biblioteca" aria-label="Tu biblioteca">
      <h2 className="list-title">Tu biblioteca</h2>
      <ul className="list-content">
        <li className="list-item">
          <Link to="./songs-album" className="link">
            Creada para ti
          </Link>
        </li>
        <li className="list-item">
          <Link to="./songs-album" className="link">
            Escuchado recientemente
          </Link>
        </li>
        <li className="list-item">
          <Link to="./songs-album" className="link">
            Tus me gusta
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Biblioteca;
