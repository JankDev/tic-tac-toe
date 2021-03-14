import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {RootStore, TicTacToeSign} from '../../_core/store/root-store';
import {Index, TickTackToeBoard} from '../../_core/models/tick-tack-toe-board.model';
import {RootStoreActions} from '../../_core/store';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Select(RootStore.currentPlayer)
  currentPlayer$: Observable<TicTacToeSign>;

  @Select(RootStore.currentBoard)
  currentBoard$: Observable<TickTackToeBoard>;

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
}
