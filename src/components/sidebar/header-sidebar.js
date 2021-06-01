import React from "react";

function Header() {
  return (
    <header className="logo">
      <a href="/Spotifu-react" aria-current="pag">
        <img
          src="./images/spotifu-logo.png"
          className="logo-image"
          alt="Logo de Spotifu"
          title="Logo de Spotifu"
        />
      </a>
    </header>
  );
}

export default Header;
