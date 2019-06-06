import React from "react";
import "./App.css";
import { Router } from "@reach/router";

import DiceGame from "./games/diceGame/DiceGame";
import NoughtsAndCrossesGame from "./games/noughtsAndCrosses/NoughtsAndCrossesGame";
import HomePage from "./games/homePage/HomePage";

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <DiceGame path="/DiceGame" />
      <NoughtsAndCrossesGame path="/NoughtsAndCrosses" />
    </Router>
  );
}

export default App;
