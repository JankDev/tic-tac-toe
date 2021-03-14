import {Injectable} from '@angular/core';
import {State} from '@ngxs/store';
import {TickTackToeBoard} from '../models/tick-tack-toe-board.model';

export type TicTacToeSign = 'O' | 'X';

export interface RootStateModel {
  currentUser: TicTacToeSign;
  board: TickTackToeBoard;
}

@State<RootStateModel>({
  name: 'root',
  defaults: {
    currentUser: 'X',
    board: null
  }
})
@Injectable({
  providedIn: 'root'
})
export class RootStoreService {

  constructor() {
  }
}
