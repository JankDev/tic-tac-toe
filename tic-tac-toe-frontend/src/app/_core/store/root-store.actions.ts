import {Index} from '../models/tick-tack-toe-board.model';

export class MarkField {
  static readonly type = '[Root] Mark field';

  constructor(public index: Index) {
  }
}
