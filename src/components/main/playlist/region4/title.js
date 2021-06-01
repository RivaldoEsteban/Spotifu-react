import React from "react";

function Title() {
  return (
    <div className="playlistList-top">
      <h2 className="playlistList-title" id="region4">
        Podcast
      </h2>
      <div className="navigation">
        <div className="navigation-buttons-container">
          <button
            className="navigation-prev"
            aria-label="volver"
            title="avanzar"
          >
            <i className="icon-arrowLeft" aria-hidden="true"></i>
          </button>
          <button
            className="navigation-next"
            disabled
            aria-label="avanzar"
            title="avanzar"
          >
            <i className="icon-arrowRight" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Title;
