import React from "react";
import "./boxArea.css";

const BoxArea = ({ value, colorOfText }) => {
  return (
    <div className="box-area" style={{ color: colorOfText }}>
      {value}
    </div>
  );
};

export default BoxArea;
