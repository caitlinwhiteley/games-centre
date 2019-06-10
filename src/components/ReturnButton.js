import React from "react";
import { Link } from "@reach/router";
import "./returnButton.css";

const ReturnButton = () => (
  <Link style={{ textDecoration: "none", color: "black" }} to="/">
    <button className="return-button">Back</button>
  </Link>
);

export default ReturnButton;
