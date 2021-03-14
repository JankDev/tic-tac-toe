import {Index} from '../models/tic-tac-toe-board.model';

export class MarkField {
  static readonly type = '[Root] Mark field';

  constructor(public index: Index) {
  }
}

export class Restart {
  static readonly type = '[Root] Restart';

  constructor() {
  }
}
