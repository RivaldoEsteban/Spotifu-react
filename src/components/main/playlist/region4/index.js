import React from "react";
import Title from "./title";
import Content from "./content";

function Podcast() {
  return (
    <section className="playlistList" aria-labelledby="region4">
      <Title />
      <Content />
    </section>
  );
}

export default Podcast;
