import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext, Store} from '@ngxs/store';
import {TickTackToeBoard} from '../models/tick-tack-toe-board.model';
import {MarkField, Restart} from './root-store.actions';
import {Subject} from 'rxjs';
import {filter, map, take} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  private gameFinished$ = new Subject<TickTackToeBoard>();

  @Selector()
  static currentPlayer({currentPlayer}: RootStateModel): TicTacToeSign {
    return currentPlayer;
  }

  @Selector()
  static currentBoard({board}: RootStateModel): TickTackToeBoard {
    return board;
  }

  constructor(private snackBar: MatSnackBar,
              private store: Store) {
    this.gameFinished$.pipe(
      map(board => board.getWinner()),
      filter(it => !!it),
      take(1)
    ).subscribe(winner => {
      this.snackBar.open(winner);
      this.store.dispatch(new Restart());
    });
  }

  @Action(MarkField)
  markField({getState, setState}: StateContext<RootStateModel>,
            {index}: MarkField): void {
    const {currentPlayer, board} = getState();
    const nextPlayer = currentPlayer === 'O' ? 'X' : 'O';
    const nextBoard = board.withMarkedField(index, currentPlayer);

    this.gameFinished$.next(nextBoard);

    setState({
      currentPlayer: nextPlayer,
      board: nextBoard
    });
  }

  @Action(Restart)
  restart({setState}: StateContext<RootStateModel>): void {
    setState({
      currentPlayer: 'X',
      board: TickTackToeBoard.empty()
    });
  }
}
