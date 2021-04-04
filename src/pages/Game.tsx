import React, { MouseEvent } from 'react';
import PlayerInfo from '../components/PlayerInfo/PlayerInfo';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import BoardTile from '../components/BoadTile/BoardTile';
import { setGame, setNextPlayer } from '../redux/Slices/gameSlice';
import checkGameStatus from '../utilities/checkGameStatus';

const style: React.CSSProperties = {
  display: 'flex',
};

const Game: React.FC = () => {
  const playerX = useAppSelector(state => state.game.playerX.name);
  const playerO = useAppSelector(state => state.game.playerO.name);
  const playerXSteps = useAppSelector(state => state.game.playerX.steps);
  const playerOSteps = useAppSelector(state => state.game.playerO.steps);
  const currentPlayer = useAppSelector(state => state.game.currentPlayer);
  const winnigCondition = useAppSelector(state => state.game.winningCondition);
  const board = useAppSelector(state => state.game.board);
  const dispatch = useAppDispatch();

  const onTileClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    const button = e.currentTarget;
    const currentSign = currentPlayer === 'playerX' ? 'X' : 'O';
    const nextPlayer = currentPlayer === 'playerX' ? 'playerO' : 'playerX';
    const stepsX =
      currentPlayer === 'playerX' ? playerXSteps + 1 : playerXSteps;
    const stepsO =
      currentPlayer === 'playerO' ? playerOSteps + 1 : playerOSteps;

    dispatch(
      setGame({
        id: button.id,
        value: currentSign,
        stepsX,
        stepsO,
      })
    );

    if (playerXSteps + playerOSteps > winnigCondition * 2 - 3) {
      for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[i].length; j += 1) {
          if (button.id === board[i][j].id) {
            console.log(
              checkGameStatus(board, i, j, currentSign, winnigCondition)
            );
          }
        }
      }
    }

    dispatch(setNextPlayer({ nextPlayer }));
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
