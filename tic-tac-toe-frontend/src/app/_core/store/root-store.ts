import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext, Store} from '@ngxs/store';
import {TicTacToeBoard} from '../models/tic-tac-toe-board.model';
import {LoadCurrentGame, MarkField, Restart} from './root-store.actions';
import {EMPTY, Subject, timer} from 'rxjs';
import {catchError, filter, map, take} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CurrentGame, TicTacToeSign} from '../models/current-game.model';
import {GameService} from '../services/game.service';

export interface RootStateModel {
  currentPlayer: TicTacToeSign;
  board: TicTacToeBoard;
}

@State<RootStateModel>({
  name: 'root',
  defaults: {
    currentPlayer: 'X',
    board: TicTacToeBoard.empty()
  }
})
@Injectable({
  providedIn: 'root'
})
export class RootStore {
  private gameFinished$ = new Subject<TicTacToeBoard>();

  @Selector()
  static currentPlayer({currentPlayer}: RootStateModel): TicTacToeSign {
    return currentPlayer;
  }

  @Selector()
  static currentBoard({board}: RootStateModel): TicTacToeBoard {
    return board;
  }

  constructor(private snackBar: MatSnackBar,
              private gameService: GameService,
              private store: Store) {
    timer(0, 500).pipe(
    ).subscribe(_ => this.store.dispatch(new LoadCurrentGame()));

    this.gameFinished$.pipe(
      map(board => board.getWinner()),
      filter(it => !!it),
      take(1)
    ).subscribe(winner => {
      this.snackBar.open(winner);
      this.store.dispatch(new Restart());
    });
  }

  @Action(LoadCurrentGame)
  loadCurrentGame(
    {patchState}: StateContext<RootStateModel>
  ): void {
    this.gameService.getCurrentBoard().pipe(
      take(1)
    ).subscribe(currentGame => {
      patchState({
        currentPlayer: currentGame.currentPlayer,
        board: currentGame.board
      });
    });
  }


  @Action(MarkField)
  markField({getState, setState}: StateContext<RootStateModel>,
            {index}: MarkField): void {
    this.gameService.markField(getState().currentPlayer, index).pipe(
      catchError(err => {
        this.snackBar.open(err);
        return EMPTY;
      })
    ).subscribe(({currentPlayer, board}: CurrentGame) => {
      setState({
        currentPlayer,
        board
      });

      this.gameFinished$.next(board);
    });


  }

  @Action(Restart)
  restart({setState}: StateContext<RootStateModel>): void {
    setState({
      currentPlayer: 'X',
      board: TicTacToeBoard.empty()
    });
  }
}
