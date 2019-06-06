import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import "./diceGame.css";
import ReturnButton from "../components/ReturnButton";
//import Dice from "./Dice";

const DiceGame = () => {
  const winningScore = 19;

  const [winner, setWinner] = useState();
  const [gameInProcess, setGameInProcess] = useState(false);
  const [playerOnePlaying, setPlayerOnePlaying] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [totalScoreOne, setTotalScoreOne] = useState(0);
  const [totalScoreTwo, setTotalScoreTwo] = useState(0);

  const startGame = () => {
    setGameInProcess(true);
    setWinner();
    setTotalScoreOne(0);
    setTotalScoreTwo(0);
  };

  const rollDice = () => {
    const roll = Math.ceil(Math.random() * 6);
    if (roll === 1) {
      setCurrentScore(0);
      playerOnePlaying ? setPlayerOnePlaying(false) : setPlayerOnePlaying(true);
    } else {
      setCurrentScore(roll + currentScore);
    }
  };

  const holdScore = () => {
    setCurrentScore(0);
    if (playerOnePlaying) {
      if (totalScoreOne + currentScore > winningScore) {
        setTotalScoreOne(totalScoreOne + currentScore);
        setWinner("Player One wins!");
        setGameInProcess(false);
      } else {
        setPlayerOnePlaying(false);
        setTotalScoreOne(totalScoreOne + currentScore);
      }
    } else {
      if (totalScoreTwo + currentScore > winningScore) {
        setTotalScoreTwo(totalScoreTwo + currentScore);
        setWinner("Player Two wins!");
        setGameInProcess(false);
      } else {
        setTotalScoreTwo(totalScoreTwo + currentScore);
        setPlayerOnePlaying(true);
      }
    }
  };

  return (
    <div className="container-row container-dice">
      <ReturnButton />
      <PlayerCard
        currentScore={currentScore}
        totalScore={totalScoreOne}
        player={playerOnePlaying}
      />

      <div className="container-col button-area">
        {/* <Dice /> */}
        {winner && <div>{winner}</div>}
        {!gameInProcess && (
          <button className="button-dice" onClick={startGame}>
            Start game
          </button>
        )}
        {gameInProcess && (
          <button className="button-dice" onClick={rollDice}>
            Roll
          </button>
        )}
        {gameInProcess && (
          <button className="button-dice" onClick={() => holdScore()}>
            Hold
          </button>
        )}
      </div>

      <PlayerCard
        currentScore={currentScore}
        totalScore={totalScoreTwo}
        player={!playerOnePlaying}
      />
    </div>
  );
};

export default DiceGame;
