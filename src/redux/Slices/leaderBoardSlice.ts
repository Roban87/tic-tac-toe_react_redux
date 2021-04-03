/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import generateGameBoard from '../../utilities/generateGameBoard';

interface Player {
  name: string;
  steps: number;
}

interface GameState {
  playerX: Player;
  playerO: Player;
  gameSize: number;
  active: boolean;
  board: string[][];
  currentPlayer: string;
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
  currentPlayer: '',
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
      // setcurrentPlayer
    },
  },
});

export const { startGame } = gameSlice.actions;
export default gameSlice.reducer;
