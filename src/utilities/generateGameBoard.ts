const generateGameBoard = (n: number): string[][] => {
  const board: string[][] = [];

  for (let i = 0; i < n; i += 1) {
    board.push([]);
    for (let j = 0; j < n; j += 1) {
      board[i].push(`${n * i + j + 1}`);
    }
  }

  return board;
};

export default generateGameBoard;
