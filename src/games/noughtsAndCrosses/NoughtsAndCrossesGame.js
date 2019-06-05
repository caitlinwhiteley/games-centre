import React, { useState, useEffect } from "react";
import "./noughtsAndCrosses.css";
import BoxArea from "./BoxArea";
import Modal from "./Modal";
import {
  checkForHorizontalWinner,
  checkForVerticalWinner,
  checkForDiagonalWinner
} from "./checkForWinner";
import ReturnButton from "../ReturnButton";

const NoughtsAndCrossesGame = () => {
  const [values, setValues] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]);
  const [whosGo, setWhosGo] = useState("O");
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState("black");
  const [winner, setWinner] = useState(null);

  useEffect(() => checkForWinner());
  useEffect(() => checkForGameOver());

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    reset();
    setShowModal(false);
  };

  const checkForWinner = () => {
    if (
      checkForHorizontalWinner(values) ||
      checkForVerticalWinner(values) ||
      checkForDiagonalWinner(values)
    ) {
      setWinner(whosGo);
      openModal();
    }
  };

  const checkForGameOver = () => {
    if (!values.includes(null) && winner === null) {
      setWhosGo(null);
      openModal();
    }
  };

  const swapPlayers = () => {
    if (whosGo === "O") setWhosGo("X");
    else if (whosGo === "X") setWhosGo("O");
  };

  const checkValidMove = area => {
    if (values[area] !== null) {
      setColor("red");
      return false;
    }
    if (color === "red") {
      setColor("black");
      return true;
    }
  };

  const playGo = area => {
    if (checkValidMove(area) === false) return;

    const clonedValues = [...values];
    clonedValues[area] = whosGo;
    setValues(clonedValues);

    swapPlayers();
  };

  const reset = () => {
    setValues([null, null, null, null, null, null, null, null, null]);
    setWhosGo("O");
    setWinner(null);
  };

  return (
    <div className="page">
      <ReturnButton />
      <div className="container-noughts">
        <Modal closeModal={closeModal} show={showModal} onClick={closeModal}>
          {whosGo === "O" && <p>Crosses wins!</p>}
          {whosGo === "X" && <p>Noughts wins!</p>}
          {whosGo === null && <p>No one wins :(</p>}
          {/* <p>{winner} wins</p> */}
        </Modal>

        <h2 className="h2-noughts" style={{ color: color }}>
          {whosGo}'s Go
        </h2>
        <div className="grid">
          {values.map((value, index) => (
            <div
              className="grid-square"
              key={index}
              onClick={() => playGo(index)}
            >
              <BoxArea value={value} colorOfText={color} />
            </div>
          ))}
        </div>
        <button className="button-noughts" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default NoughtsAndCrossesGame;
