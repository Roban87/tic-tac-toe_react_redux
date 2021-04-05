import React, { MouseEvent, useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import PlayerInfo from '../components/PlayerInfo/PlayerInfo';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import BoardTile from '../components/BoadTile/BoardTile';
import { setGame, setNextPlayer, setGameEnd } from '../redux/Slices/gameSlice';
import checkGameStatus from '../utilities/checkGameStatus';
import animateText from '../utilities/animateText';
import './styles/Game.css';

Modal.setAppElement('#root');

const Game: React.FC = () => {
  const playerX = useAppSelector(state => state.game.playerX.name);
  const playerO = useAppSelector(state => state.game.playerO.name);
  const playerXSteps = useAppSelector(state => state.game.playerX.steps);
  const playerOSteps = useAppSelector(state => state.game.playerO.steps);
  const currentPlayer = useAppSelector(state => state.game.currentPlayer);
  const winnigCondition = useAppSelector(state => state.game.winningCondition);
  const gameSize = useAppSelector(state => state.game.gameSize);
  const board = useAppSelector(state => state.game.board);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const afterOpenModal = (): void => {
    const animatedText:
      | HTMLHeadingElement
      | HTMLParagraphElement
      | null = document.querySelector('.animate-text');

    if (animatedText !== null) {
      animateText(animatedText, 50);
    }

    setTimeout(() => {
      closeModal();
      history.push('./scores');
    }, 3000);
  };

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

    if (stepsX + stepsO > winnigCondition * 2 - 2) {
      for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[i].length; j += 1) {
          if (button.id === board[i][j].id) {
            if (checkGameStatus(board, i, j, currentSign, winnigCondition)) {
              openModal();
              const winner =
                currentPlayer === 'playerX'
                  ? {
                      name: playerX,
                      steps: stepsX,
                      wins: 1,
                    }
                  : {
                      name: playerO,
                      steps: stepsO,
                      wins: 1,
                    };
              dispatch(setGameEnd([winner]));
              return;
            }
          }
        }
      }
    }
    if (stepsX + stepsO === gameSize ** 2) {
      openModal();
      // TODO text for modal!!!
      setGameEnd([
        {
          name: playerX,
          steps: stepsX,
          wins: 0,
        },
        {
          name: playerO,
          steps: stepsO,
          wins: 0,
        },
      ]);
      return;
    }

    dispatch(setNextPlayer({ nextPlayer }));
  };

  return (
    <main>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        className="modal"
        overlayClassName="overlay"
        contentLabel="Starting Player"
      >
        <p>The WINNER is</p>
        <h2 className="animate-text">
          {currentPlayer === 'playerX' ? playerX : playerO}
        </h2>
      </Modal>
      <section>
        <PlayerInfo
          sign="X"
          playerName={playerX}
          steps={playerXSteps}
          active={currentPlayer === 'playerX' ? 'current-player' : ''}
        />
        <PlayerInfo
          sign="O"
          playerName={playerO}
          steps={playerOSteps}
          active={currentPlayer === 'playerO' ? 'current-player' : ''}
        />
      </section>
      <section className="game-board">
        {board.map(row => (
          <div className="row">
            {row.map(tile => {
              return (
                <BoardTile
                  size={gameSize}
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
    </main>
  );
};

export default Game;
