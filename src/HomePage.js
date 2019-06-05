import React from "react";
import { Link } from "@reach/router";

const HomePage = () => {
  return (
    <div>
      <Link to="/DiceGame">The Dice Game</Link>
      <Link to="/NoughtsAndCrosses">Noughts and Crosses</Link>
    </div>
  );
};

export default HomePage;
