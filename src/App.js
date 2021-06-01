import React, { createContext, useState } from "react";
import "./index.css";
import Main from "./components/main/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SongPage from "./songs-album-page/songs-page";
import SideBar from "./components/sidebar/index";
import Player from "./components/player/index";
import Songs from "./data-playlist/songs-data";

export const CurrentPlaying = createContext(""); //contexto creado

function App() {
  const [currentPlaying, setCurrentPlaying] = useState(""); // estado

  const currentPlayingContext = {
    value: currentPlaying,
    setCurrentPlaying,
  };

  return (
    <CurrentPlaying.Provider value={currentPlayingContext}>
      <BrowserRouter>
        <div className="grid">
          <div className="sidebar-container">
            <SideBar />
          </div>
          <div className="main-container">
            <Switch>
              <Route path="/Spotifu-react/songs-album" exact>
                <SongPage songs={Songs} />
              </Route>
              <Route path="/Spotifu-react/" exact>
                <Main />
              </Route>
            </Switch>
          </div>
          <div className="player-container">
            <Player songs={Songs} />
          </div>
        </div>
      </BrowserRouter>
    </CurrentPlaying.Provider>
  );
}

export default App;
