import {RootStateModel, RootStore} from './root-store';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {TestBed} from '@angular/core/testing';
import {StateContext, StateOperator, Store} from '@ngxs/store';
import {TicTacToeBoard} from '../models/tic-tac-toe-board.model';
import {GameService} from '../services/game.service';
import {of} from 'rxjs';
import {CurrentGame} from '../models/current-game.model';

describe('RootStore', () => {
  let rootStore: RootStore;
  const store = jasmine.createSpyObj<Store>(['dispatch', 'select']);
  const service = jasmine.createSpyObj<GameService>(['markField', 'getCurrentGame', 'reset']);
  const snackBar = jasmine.createSpyObj<MatSnackBar>('snackBar', ['openFromComponent', 'open']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule
      ],
      providers: [
        {provide: GameService, useValue: service}
      ]
    });
    rootStore = new RootStore(snackBar, service, store);

  });

  it('should look for a game finish and show a snackbar when found', () => {
    const winningBoard = new TicTacToeBoard([['X', 'X', 'X'], ['X', '', 'X'], ['O', '', 'O']]);
    service.getCurrentGame.and.returnValue(of({currentPlayer: 'X', board: winningBoard} as CurrentGame));
    const stateContext = {
      getState(): RootStateModel {
        return null;
      },
      setState(_: StateOperator<RootStateModel> | RootStateModel): RootStateModel {
        return null;
      },
      patchState(_: Partial<RootStateModel>): RootStateModel {
        return null;
      }
    } as StateContext<RootStateModel>;
    const state = {
      currentPlayer: 'X',
      board: winningBoard
    } as RootStateModel;
    spyOn(stateContext, 'patchState').and.callFake(() => {
      return null;
    });
    spyOn(stateContext, 'getState').and.returnValue(state);
    spyOn(stateContext, 'setState').and.callFake(() => ({} as RootStateModel));
    rootStore.loadCurrentGame(stateContext);

    expect(snackBar.open).toHaveBeenCalled();
  });

});
