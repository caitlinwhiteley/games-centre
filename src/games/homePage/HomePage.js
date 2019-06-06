import React from "react";
import { Link } from "@reach/router";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="games-container">
      <div className="div-games-heading">
        <h1 className="games-heading">Games</h1>
      </div>
      <div className="flex-row">
        <Link
          to="/"
          className="game-link"
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "red"
          }}
        >
          <div>Game 1</div>
        </Link>
        <Link
          to="/"
          className="game-link"
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "orange"
          }}
        >
          <div>Game 2</div>
        </Link>
        <Link
          to="/"
          className="game-link"
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "yellow"
          }}
        >
          <div>Game 3</div>
        </Link>
        <Link
          to="/"
          className="game-link"
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "green"
          }}
        >
          <div>Game 4</div>
        </Link>
        <Link
          to="/DiceGame"
          className="game-link"
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "rgb(31, 147, 182)"
          }}
        >
          <div>The Dice Game</div>
        </Link>
        <Link
          to="/NoughtsAndCrosses"
          className="game-link"
          style={{
            backgroundColor: "magenta",
            textDecoration: "none",
            color: "white"
          }}
        >
          <div>Noughts and Crosses</div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
