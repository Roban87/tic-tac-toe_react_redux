const setBoard = (
  board: { id: string; value: string }[][],
  id: string,
  val: string
): { id: string; value: string }[][] => {
  return board.map((row): { id: string; value: string }[] => {
    return row.map((cell): { id: string; value: string } => {
      return cell.id === id ? { ...cell, value: val } : cell;
    });
  });
};

export default setBoard;
