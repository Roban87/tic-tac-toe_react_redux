/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import generateGameBoard from '../../utilities/generateGameBoard';
import chooseStarterPlayer from '../../utilities/chooseStarterPlayer';
import setBoard from '../../utilities/setBoard';

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
  winningCondition: number;
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
  currentPlayer: '',
  winningCondition: 0,
  error: '',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (
      state,
      {
        payload,
      }: PayloadAction<{
        playerX: string;
        playerO: string;
        gameSize: number;
      }>
    ) => {
      state.board = generateGameBoard(payload.gameSize);
      state.playerX.name = payload.playerX;
      state.playerO.name = payload.playerO;
      state.playerX.steps = 0;
      state.playerO.steps = 0;
      state.gameSize = payload.gameSize;
      state.active = true;
      state.currentPlayer = chooseStarterPlayer(['playerX', 'playerO']);
      state.winningCondition = payload.gameSize > 3 ? 4 : 3;
      state.error = '';
    },
    setError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
    },
    setGame: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        value: string;
        stepsX: number;
        stepsO: number;
      }>
    ) => {
      state.board = setBoard(state.board, payload.id, payload.value);
      state.playerX.steps = payload.stepsX;
      state.playerO.steps = payload.stepsO;
    },
    setNextPlayer: (
      state,
      { payload }: PayloadAction<{ nextPlayer: string }>
    ) => {
      state.currentPlayer = payload.nextPlayer;
    },
  },
});

export const {
  startGame,
  setError,
  setGame,
  setNextPlayer,
} = gameSlice.actions;
export default gameSlice.reducer;
