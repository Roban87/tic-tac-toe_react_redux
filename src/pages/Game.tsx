import React from 'react';
import PlayerInfo from '../components/PlayerInfo/PlayerInfo';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import BoardTile from '../components/BoadTile/BoardTile';

const style: React.CSSProperties = {
  display: 'flex',
};

const Game: React.FC = () => {
  const playerX = useAppSelector(state => state.game.playerX.name);
  const playerO = useAppSelector(state => state.game.playerO.name);
  const playerXSteps = useAppSelector(state => state.game.playerX.steps);
  const playerOSteps = useAppSelector(state => state.game.playerO.steps);
  const currentPlayer = useAppSelector(state => state.game.currentPlayer);
  const board = useAppSelector(state => state.game.board);
  const dispatch = useAppDispatch();

  // const onTileClickHandler = (e: React.ChangeEvent<HTMLDivElement>): void => {
  //   dispatch();
  // };

  return (
    <>
      <section>
        <PlayerInfo sign="X" playerName={playerX} steps={playerXSteps} />
        <PlayerInfo sign="O" playerName={playerO} steps={playerOSteps} />
      </section>
      <section>
        {board.map(row => (
          <div className="row" style={style}>
            {row.map(tile => {
              return <BoardTile sign={tile} id={tile} key={tile} />;
            })}
          </div>
        ))}
      </section>
    </>
  );
};

export default Game;
