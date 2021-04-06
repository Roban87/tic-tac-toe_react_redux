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
  const startValuesD: number[] = [winningCondition - 1, x, y];
  const endValuesD: number[] = [
    winningCondition,
    board.length - x,
    board.length - y,
  ];
  const startDiffD: number = Math.min(...startValuesD);
  const endDiffD: number = Math.min(...endValuesD);
  for (let i = x - startDiffD; i < x + endDiffD; ) {
    for (let j = y - startDiffD; j < y + endDiffD; ) {
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
  // not working properly; doesn't go to minus direction
  // check for reverse-diagonal
  const startValuesXRD: number[] = [
    winningCondition - 1,
    x,
    board.length - y - 1,
  ];
  const endValuesXRD: number[] = [winningCondition, board.length - x - 1, y];

  const startDiffRD: number = Math.min(...startValuesXRD);
  const endDiffRD: number = Math.min(...endValuesXRD);

  for (let i = x - startDiffRD; i <= x + endDiffRD; ) {
    for (let j = y + startDiffRD; j >= y - endDiffRD; ) {
      console.log([i, j]);

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
