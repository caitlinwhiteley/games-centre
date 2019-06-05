export const checkForHorizontalWinner = values => {
  let results = [];
  [0, 3, 6].forEach(element => {
    values[element] === values[1 + element] &&
    values[1 + element] === values[2 + element] &&
    values[element] !== null
      ? results.push(true)
      : results.push(false);
  });
  return results.includes(true);
};

export const checkForVerticalWinner = values => {
  let results = [];
  [0, 1, 2].forEach(element => {
    values[element] === values[3 + element] &&
    values[3 + element] === values[6 + element] &&
    values[element] !== null
      ? results.push(true)
      : results.push(false);
  });
  return results.includes(true);
};

export const checkForDiagonalWinner = values => {
  if (
    values[0] === values[4] &&
    values[4] === values[8] &&
    values[0] !== null
  ) {
    return true;
  } else if (
    values[2] === values[4] &&
    values[4] === values[6] &&
    values[2] !== null
  ) {
    return true;
  }
  return false;
};
