import React, { useState, useEffect } from "react";
import "./spaceBarGame.css";

const SpaceBarGame = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(null);
  const [finalScore, setFinalScore] = useState(0);
  const [playersGo, setPlayersGo] = useState("Player 1");
  const [playerOneScore, setPlayerOneScore] = useState();
  const [playerTwoScore, setPlayerTwoScore] = useState();
  const timeOfGame = 3;

  const startGo = e => {
    if (e.keyCode === 32) {
      if (secondsLeft === null) setSecondsLeft(timeOfGame);
      else if (secondsLeft > 0) setPlayerScore(playerScore + 1);
    } else if (e.keyCode === 13) reset();
  };

  const swapPlayers = () => {
    setPlayerScore(0);
    setSecondsLeft(null);
    setFinalScore(0);
    setPlayersGo("Player 2");
  };

  const reset = () => {
    setPlayerScore(0);
    setSecondsLeft(null);
    setFinalScore(0);
  };

  useEffect(() => {
    if (secondsLeft > 0) {
      setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setFinalScore(playerScore);
      if (playersGo === "Player 1") {
        setPlayerOneScore(playerScore);
        swapPlayers();
      } else {
        setPlayerTwoScore(playerScore);
        reset();
      }
    }
  }, [secondsLeft, playerScore, reset, playersGo]);

  return (
    <div className="space-bar-container">
      <h1>Space Bar Game</h1>
      <h2>{playersGo}</h2>
      <p>The timer will start once you hit the space bar</p>
      {secondsLeft === 0 ? (
        <p>Press enter to reset</p>
      ) : (
        <p>Time remaining: {secondsLeft}</p>
      )}

      <input
        autoFocus={true}
        onKeyUp={startGo}
        value="Press the space bar as many times as possible"
      />

      {finalScore !== 0 ? (
        <p>FINAL SCORE: {finalScore}</p>
      ) : (
        <p>Score: {playerScore}</p>
      )}
      {/* {playerOneScore && <p>Player 1 score: {playerOneScore}</p>}
      {playerTwoScore && <p>Player 2 score: {playerTwoScore}</p>} */}
      <p>
        P1: {playerOneScore}, p2: {playerTwoScore}
      </p>
    </div>
  );
};

export default SpaceBarGame;
