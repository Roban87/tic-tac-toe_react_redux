const checkGameStatus = (
  board: { id: string; value: string }[][],
  x: number,
  y: number,
  sign: string,
  winningCondition: number
): boolean => {
  const xMin = x - winningCondition - 1 < 0 ? 0 : x - winningCondition - 1;
  const xMax =
    x + winningCondition - 1 > board.length - 1
      ? board.length
      : x + winningCondition;
  const yMin = y - winningCondition - 1 < 0 ? 0 : y - winningCondition - 1;
  const yMax =
    y + winningCondition - 1 > board.length - 1
      ? board.length
      : y + winningCondition;
  let signCount = 0;

  // check for row
  for (let j = yMin; j < yMax; j += 1) {
    if (board[x][j].value === sign || j === y) {
      signCount += 1;
      if (signCount === winningCondition) {
        return true;
      }
    } else {
      signCount = 0;
    }
  }

  // chekc for column
  for (let i = xMin; i < xMax; i += 1) {
    if (board[i][y].value === sign || i === x) {
      signCount += 1;
      if (signCount === winningCondition) {
        return true;
      }
    } else {
      signCount = 0;
    }
  }

  // check for diagonal
  const valuesMinD: number[] = [winningCondition - 1, x, y];
  const valuesMaxD: number[] = [
    winningCondition,
    board.length - x,
    board.length - y,
  ];
  const minDifferenceD: number = Math.min(...valuesMinD);
  const maxDifferenceD: number = Math.min(...valuesMaxD);
  for (let i = x - minDifferenceD; i < x + maxDifferenceD; ) {
    for (let j = y - minDifferenceD; j < y + maxDifferenceD; ) {
      if (board[i][j].value === sign || (i === x && j === y)) {
        signCount += 1;
        if (signCount === winningCondition) {
          return true;
        }
      } else {
        signCount = 0;
      }
      i += 1;
      j += 1;
    }
  }

  // check for reverse-diagonal
  const valuesMinRD: number[] = [winningCondition - 1, x, board.length - y - 1];
  const valuesMaxRD: number[] = [winningCondition - 1, board.length - x - 1, y];
  const minDifferenceRD: number = Math.min(...valuesMinRD);
  const maxDifferenceRD: number = Math.min(...valuesMaxRD);
  for (let i = x - minDifferenceRD; i < x - maxDifferenceRD; ) {
    for (let j = y + minDifferenceRD; j >= y - maxDifferenceRD; ) {
      if (board[i][j].value === sign || (i === x && j === y)) {
        signCount += 1;
        if (signCount === winningCondition) {
          return true;
        }
      } else {
        signCount = 0;
      }
      i += 1;
      j -= 1;
    }
  }

  return false;
};

export default checkGameStatus;
