import React from "react";
import TitleSection from "./title-section";
import Content from "./content";

function RecentlyHeard() {
  return (
    <section className="playlistList" aria-labelledby="region2">
      <TitleSection />
      <Content />
    </section>
  );
}

export default RecentlyHeard;
