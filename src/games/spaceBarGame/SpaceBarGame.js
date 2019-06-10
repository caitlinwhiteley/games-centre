import React, { useState, useEffect, useCallback } from "react";
import "./spaceBarGame.css";
import ReturnButton from "../../components/ReturnButton";
import Modal from "../../components/Modal";

// async often messes up the scores

const SpaceBarGame = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(null);
  const [finalScore, setFinalScore] = useState(0);
  const [playersGo, setPlayersGo] = useState("Player 1");
  const [playerOneScore, setPlayerOneScore] = useState();
  const [playerTwoScore, setPlayerTwoScore] = useState();
  const [showModal, setShowModal] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const timeOfGame = 3;

  const openModal = () => {
    setDisabled(true);
    setShowModal(true);
  };

  const closeModal = () => {
    //reset();
    swapPlayers();
    setShowModal(false);
    setDisabled(false);
  };

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

  const reset = useCallback(() => {
    setPlayerScore(0);
    setSecondsLeft(null);
    setFinalScore(0);
    setPlayersGo("Player 1");
    setPlayerOneScore();
    setPlayerTwoScore();
  }, []);

  useEffect(() => {
    if (secondsLeft > 0) {
      setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setFinalScore(playerScore);
      if (playersGo === "Player 1") {
        setPlayerOneScore(playerScore);
        openModal();
        // open model saying next players go;
      } else {
        setPlayerTwoScore(playerScore);
        //reset();
      }
    }
  }, [secondsLeft, playerScore, reset, playersGo]);

  return (
    <div className="space-bar-container">
      <ReturnButton />

      <Modal
        closeModal={closeModal}
        show={showModal}
        onClick={closeModal}
        buttonValue={"Next"}
      >
        Player 2's go
      </Modal>

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
        disabled={disabled}
        readOnly
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
