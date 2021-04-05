import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import PlayerInput from '../components/PlayerInput/PlayerInput';
import RadioField from '../components/RadioField/RadioField';
import Button from '../components/Button/Button';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { startGame, setError } from '../redux/Slices/gameSlice';
import animateText from '../utilities/animateText';

// put into final style
import './modal.css';

const gameSizes = [3, 4, 5, 6, 7, 8, 9];

const modalStyle: Modal.Styles = {
  content: {
    width: '50vw',
    height: '120px',
    backgroundColor: 'grey',
    textAlign: 'center',
    border: 'none',
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: 'none',
  },
};

Modal.setAppElement('#root');

const Landing: React.FC = () => {
  const gameSize = useAppSelector(state => state.game.gameSize);
  const prevPlayerX = useAppSelector(state => state.game.playerX.name);
  const prevPlayerO = useAppSelector(state => state.game.playerO.name);
  const error = useAppSelector(state => state.game.error);
  const currentPlayer = useAppSelector(state => state.game.currentPlayer);

  const [size, setSize] = useState<number>(gameSize || 3);
  const [playerX, setPlayerX] = useState<string>(prevPlayerX || '');
  const [playerO, setPlayerO] = useState<string>(prevPlayerO || '');

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const SizeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSize(Number(e.target.value));
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    return e.target.name === 'playerX'
      ? setPlayerX(e.target.value)
      : setPlayerO(e.target.value);
  };

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
      history.push('./game');
    }, 3000);
  };

  const startGameHandler = (): void => {
    if (playerX === '' || playerO === '') {
      dispatch(setError({ error: 'Player name must be filled!' }));
      return;
    }
    dispatch(startGame({ playerX, playerO, gameSize: size }));
    openModal();
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        style={modalStyle}
        contentLabel="Starting Player"
      >
        <p>Starting Player</p>
        <h2 className="animate-text">
          {currentPlayer === 'playerX' ? playerX : playerO}
        </h2>
      </Modal>
      <form>
        <PlayerInput
          id="playerX"
          label="PlayerX"
          value={playerX}
          onNameChange={nameChangeHandler}
        />
        <PlayerInput
          id="playerO"
          label="PlayerO"
          value={playerO}
          onNameChange={nameChangeHandler}
        />
        <RadioField
          sizes={gameSizes}
          choosenSize={size}
          onChangeHandler={SizeChangeHandler}
        />
        <p>{error}</p>
        <Button
          type="button"
          buttonText="Start Game"
          onClickHandler={startGameHandler}
        />
      </form>
    </>
  );
};

export default Landing;
