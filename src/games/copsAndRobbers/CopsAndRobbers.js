//   //useEffect(() => window.addEventListener("keyup", startGo));

// import React, { useState, useEffect, useMemo } from "react";
// import "./copsAndRobbers.css";
// import ReturnButton from "../../components/ReturnButton";
// import { keyHandler, KEYPRESS } from "react-key-handler";

// const CopsAndRobbers = ({ keyValue }) => {
//   const [copScore, setCopScore] = useState(0);
//   //const letter = "a";
//   const [letter, setLetter] = useState(keyValue);

//   console.log("keyvalue", keyValue);
//   //const winningScore = 100;

//   if (keyValue === "a") {
//     console.log("hi");
//     //setCopScore(5);
//     //setLetter(null);
//   }

//   //   const copAdd = e => {
//   //     // if (e.key === 65) {
//   //     //   console.log("You just pressed a!");
//   //     // }
//   //     console.log("event", e);
//   //     //setCopScore(copScore + 1);
//   //   };

//   //   const handleKeyPress = copScore => {
//   //     if (keyValue === "a") {
//   //       console.log("You just pressed a!");
//   //       //setCopScore(copScore + 1);
//   //       return copScore + 11;
//   //     }
//   //     return copScore;
//   //   };

//   //   useEffect(() => handleKeyPress());

//   //   useEffect(() => {
//   //     if (letter === "a") {
//   //       console.log("hi");
//   //       setCopScore(c => c + 1);

//   //     }
//   //   }, []);

//   return (
//     <div className="container-row">
//       <ReturnButton />
//       <div className="cops-area container-col">
//         <h2>Cops</h2>
//         {/* <div onKeyUp={() => copAdd()}>A</div> */}
//         <p>{copScore}</p>
//       </div>
//       <div className="robbers-area container-col">
//         <h2>Robbers</h2>
//       </div>
//     </div>
//   );
// };

// export default keyHandler({ keyEventName: KEYPRESS, keyValue: "a" })(
//   CopsAndRobbers
// );
