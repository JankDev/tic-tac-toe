import {TicTacToeBoard} from './tic-tac-toe-board.model';

export type TicTacToeSign = 'O' | 'X';

export interface CurrentGame {
  currentPlayer: TicTacToeSign;
  board: TicTacToeBoard;
}
