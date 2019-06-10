import React from "react";
import "./App.css";
import { Router } from "@reach/router";

import DiceGame from "./games/diceGame/DiceGame";
import NoughtsAndCrossesGame from "./games/noughtsAndCrosses/NoughtsAndCrossesGame";
import HomePage from "./games/homePage/HomePage";
//import CopsAndRobbers from "./games/copsAndRobbers/CopsAndRobbers";
import SpaceBarGame from "./games/spaceBarGame/SpaceBarGame";

function App() {
  return (
    <Router>
      <HomePage path="/" />
      {/* <CopsAndRobbers path="/CopsAndRobbers" /> */}
      <SpaceBarGame path="/SpaceBarGame" />
      <DiceGame path="/DiceGame" />
      <NoughtsAndCrossesGame path="/NoughtsAndCrosses" />
    </Router>
  );
}

export default App;
