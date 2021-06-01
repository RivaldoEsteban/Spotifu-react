import React from "react";
import Menu from "./menu.js";
import Biblioteca from "./list-biblioteca";
import Playlist from "./playlist";

function Navigation() {
  return (
    <>
      <Menu />
      <Biblioteca />
      <Playlist />
    </>
  );
}

export default Navigation;
