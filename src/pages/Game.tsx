import React, { MouseEvent, useState } from 'react';
import PlayerInfo from '../components/PlayerInfo/PlayerInfo';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import BoardTile from '../components/BoadTile/BoardTile';
import { setGame } from '../redux/Slices/gameSlice';

const style: React.CSSProperties = {
  display: 'flex',
};

const Game: React.FC = () => {
  const playerX = useAppSelector(state => state.game.playerX.name);
  const playerO = useAppSelector(state => state.game.playerO.name);
  const playerXSteps = useAppSelector(state => state.game.playerX.steps);
  const playerOSteps = useAppSelector(state => state.game.playerO.steps);
  const currentPlayer = useAppSelector(state => state.game.currentPlayer);
  const [board, setBoard] = useState<{ id: string; value: string }[][]>(
    useAppSelector(state => state.game.board)
  );
  const dispatch = useAppDispatch();

  const refreshBoard = (id: string, val: string): void => {
    setBoard(
      board.map((row): { id: string; value: string }[] => {
        return row.map((cell): { id: string; value: string } => {
          return cell.id === id ? { ...cell, value: val } : cell;
        });
      })
    );
  };

  const onTileClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    const button = e.currentTarget;
    const currentSign = currentPlayer === 'playerX' ? 'X' : 'O';
    refreshBoard(button.id, currentSign);
    const nextPlayer = currentPlayer === 'playerX' ? 'playerO' : 'playerX';
    dispatch(setGame({ nextPlayer, board }));
  };

  return (
    <>
      <section>
        <PlayerInfo sign="X" playerName={playerX} steps={playerXSteps} />
        <PlayerInfo sign="O" playerName={playerO} steps={playerOSteps} />
      </section>
      <section className="game-board">
        {board.map(row => (
          <div className="row" style={style}>
            {row.map(tile => {
              return (
                <BoardTile
                  id={tile.id}
                  key={tile.id}
                  value={tile.value}
                  onClickHandler={onTileClickHandler}
                />
              );
            })}
          </div>
        ))}
      </section>
    </>
  );
};

export default Game;
