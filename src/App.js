import React from "react";
import "./App.css";
import DiceGame from "./games/diceGame/DiceGame";
import NoughtsAndCrossesGame from "./games/noughtsAndCrosses/NoughtsAndCrossesGame";

function App() {
  return (
    <div>
      {/* <h1>GAME CENTRE</h1> */}
      {/* <DiceGame /> */}
      <NoughtsAndCrossesGame />
    </div>
  );
}

export default App;
