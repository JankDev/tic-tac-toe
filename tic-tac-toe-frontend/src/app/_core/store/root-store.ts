import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {TickTackToeBoard} from '../models/tick-tack-toe-board.model';
import {MarkField} from './root-store.actions';

export type TicTacToeSign = 'O' | 'X';

export interface RootStateModel {
  currentPlayer: TicTacToeSign;
  board: TickTackToeBoard;
}

@State<RootStateModel>({
  name: 'root',
  defaults: {
    currentPlayer: 'X',
    board: TickTackToeBoard.empty()
  }
})
@Injectable({
  providedIn: 'root'
})
export class RootStore {
  @Selector()
  static currentPlayer({currentPlayer}: RootStateModel): TicTacToeSign {
    return currentPlayer;
  }

  @Selector()
  static currentBoard({board}: RootStateModel): TickTackToeBoard {
    return board;
  }

  constructor() {
  }

  @Action(MarkField)
  markField({getState, setState}: StateContext<RootStateModel>,
            {index}: MarkField): void {
    const {currentPlayer, board} = getState();
    const nextPlayer = currentPlayer === 'O' ? 'X' : 'O';
    const nextBoard = board.withMarkedField(index, currentPlayer);

    setState({
      currentPlayer: nextPlayer,
      board: nextBoard
    });
  }
}
