import {RootStateModel, RootStore} from './root-store';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {TestBed} from '@angular/core/testing';
import {StateContext, StateOperator, Store} from '@ngxs/store';
import {MarkField} from './root-store.actions';
import {Index, TicTacToeBoard} from '../models/tic-tac-toe-board.model';

describe('RootStore', () => {
  let rootStore: RootStore;
  const store = jasmine.createSpyObj<Store>(['dispatch', 'select']);
  const snackBar = jasmine.createSpyObj<MatSnackBar>(['openFromComponent', 'open']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule
      ]
    });
    rootStore = new RootStore(snackBar, store);

  });

  it('should look for a game finish and show a snackbar when found', () => {
    const stateContext = {
      getState(): RootStateModel {
        return null;
      },
      setState(_: StateOperator<RootStateModel> | RootStateModel): RootStateModel {
        return null;
      }
    } as StateContext<RootStateModel>;
    const state = {
      currentPlayer: 'X',
      board: new TicTacToeBoard([['X', 'O', 'X'], ['X', '', 'X'], ['O', '', 'O']])
    } as RootStateModel;
    spyOn(stateContext, 'getState').and.returnValue(state);
    spyOn(stateContext, 'setState').and.callFake(() => ({} as RootStateModel));
    rootStore.markField(stateContext, new MarkField(new Index(1, 1)));

    expect(snackBar.open).toHaveBeenCalled();
  });

});
