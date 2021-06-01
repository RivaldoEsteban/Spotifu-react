import React from "react";
import Top from "./title-section";
import ContentSection from "./content";

function Inicio() {
  return (
    <section className="playlistList" aria-labelledby="region1">
      <Top />
      <ContentSection />
    </section>
  );
}

export default Inicio;
