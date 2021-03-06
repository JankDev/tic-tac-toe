import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {RootStore} from '../../_core/store/root-store';
import {Index, TicTacToeBoard} from '../../_core/models/tic-tac-toe-board.model';
import {RootStoreActions} from '../../_core/store';
import {TicTacToeSign} from '../../_core/models/current-game.model';
import {distinctUntilKeyChanged} from 'rxjs/operators';
import * as equal from 'fast-deep-equal';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {
  @Select(RootStore.currentPlayer)
  currentPlayer$: Observable<TicTacToeSign>;

  currentBoard$: Observable<TicTacToeBoard> = this.store.select(RootStore.currentBoard).pipe(
    distinctUntilKeyChanged('board', (a, b) => equal(a, b))
  );

  currentIndex: Index;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  setCurrentIndex(index: Index): void {
    this.currentIndex = index;
  }

  markSelectedField(): void {
    this.store.dispatch(new RootStoreActions.MarkField(this.currentIndex));
    this.currentIndex = null;
  }

  restart(): void {
    this.store.dispatch(new RootStoreActions.Restart());
  }
}
