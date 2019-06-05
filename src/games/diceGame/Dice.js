import React from "react";
import "./diceGame.css";
import "font-awesome/css/font-awesome.css";

const Dice = roll => {
  return (
    <div className="container-col dice">
      <div className="container-row dice-row">
        <i
          className="fa fa-circle two three four five six"
          aria-hidden="true"
        />
        <i className="fa fa-circle" aria-hidden="true" />
        <i className="fa fa-circle four five six" aria-hidden="true" />
      </div>
      <div className="container-row dice-row">
        <i className="fa fa-circle six" aria-hidden="true" />
        <i className="fa fa-circle one three five" aria-hidden="true" />
        <i className="fa fa-circle six" aria-hidden="true" />
      </div>
      <div className="container-row dice-row">
        <i className="fa fa-circle four five six" aria-hidden="true" />
        <i className="fa fa-circle" aria-hidden="true" />
        <i className="fa fa-circle three four five six" aria-hidden="true" />
      </div>
    </div>
  );
};

// const Dice = rolll => {
//   //   const [topRow, setTopRow] = useState([true, true, true]);
//   //   const roll = 5;
//   //   if (roll === 1) {
//   //     setTopRow([true, true, true]);
//   //     let middleRow = [true, false, true];
//   //     let bottomRow = [true, true, true];
//   //   } else if (roll === 2) {
//   //     setTopRow([false, true, true]);
//   //     let middleRow = [true, true, true];
//   //     let bottomRow = [true, true, false];
//   //   } else if (roll === 3) {
//   //     setTopRow([false, true, true]);
//   //     let middleRow = [true, false, true];
//   //     let bottomRow = [true, true, false];
//   //   } else if (roll === 4) {
//   //     setTopRow([false, true, false]);
//   //     let middleRow = [true, true, true];
//   //     let bottomRow = [false, true, false];
//   //   } else if (roll === 5) {
//   //     setTopRow([false, true, false]);
//   //     let middleRow = [true, false, true];
//   //     let bottomRow = [false, true, false];
//   //   } else if (roll === 2) {
//   //     setTopRow([false, true, false]);
//   //     let middleRow = [false, true, false];
//   //     let bottomRow = [false, true, false];
//   //   }
//   const topRow = [1, 2, 3];

//   return (
//     <div className="container-col dice">
//       <div className="container-row dice-row">
//         {topRow.map(hidden => (
//           //   <i className="fa fa-circle" aria-hidden="true" />
//           <div>Hi</div>
//         ))}
//         {topRow[0]}
//       </div>
//     </div>
//   );
// };

export default Dice;
