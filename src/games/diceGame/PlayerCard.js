import React from "react";
import "./diceGame.css";

const PlayerCard = ({ currentScore, totalScore, player }) => {
  return (
    <div className="container-col player-card">
      <h3>Score</h3>
      {player && <div>{currentScore}</div>}
      {!player && <div>Please await your go</div>}

      <h2>Total</h2>
      <div>{totalScore}</div>
    </div>
  );
};

export default PlayerCard;
