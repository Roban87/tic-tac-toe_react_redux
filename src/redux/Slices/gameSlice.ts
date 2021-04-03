/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import generateGameBoard from '../../utilities/generateGameBoard';
import chooseStarterPlayer from '../../utilities/chooseStarterPlayer';

interface Player {
  name: string;
  steps: number;
}

interface GameState {
  playerX: Player;
  playerO: Player;
  gameSize: number;
  active: boolean;
  board: { id: string; value: string }[][];
  currentPlayer: string;
  error: string;
}

const initialState: GameState = {
  playerX: {
    name: '',
    steps: 0,
  },
  playerO: {
    name: '',
    steps: 0,
  },
  gameSize: 0,
  active: false,
  board: [],
  currentPlayer: 'playerX',
  error: '',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (
      state,
      action: PayloadAction<{
        playerX: string;
        playerO: string;
        gameSize: number;
      }>
    ) => {
      state.board = generateGameBoard(action.payload.gameSize);
      state.playerX.name = action.payload.playerX;
      state.playerO.name = action.payload.playerO;
      state.gameSize = action.payload.gameSize;
      state.active = true;
      state.currentPlayer = chooseStarterPlayer(['playerX', 'playerO']);
      state.error = '';
    },
    setError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
    },
    setGame: (
      state,
      action: PayloadAction<{
        nextPlayer: string;
        board: { id: string; value: string }[][];
      }>
    ) => {
      state.currentPlayer = action.payload.nextPlayer;
      state.board = action.payload.board;
    },
  },
});

export const { startGame, setError, setGame } = gameSlice.actions;
export default gameSlice.reducer;
