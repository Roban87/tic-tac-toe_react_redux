const generateGameBoard = (n: number): { id: string; value: string }[][] => {
  const board: { id: string; value: string }[][] = [];

  for (let i = 0; i < n; i += 1) {
    board.push([]);
    for (let j = 0; j < n; j += 1) {
      board[i].push({ id: `${n * i + j + 1}`, value: '' });
    }
  }

  return board;
};

export default generateGameBoard;
