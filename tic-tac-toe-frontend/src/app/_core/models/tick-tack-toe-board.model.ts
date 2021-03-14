import {TicTacToeSign} from '../store/root-store';

export class Index {
  constructor(public row: number, public col: number) {
  }
}

export class TickTackToeBoard {

  constructor(public board: string[][]) {
  }

  static empty(): TickTackToeBoard {
    return new TickTackToeBoard([['', '', ''], ['', '', ''], ['', '', '']]);
  }

  get size(): number {
    return this.board[0].length;
  }

  withMarkedField({row, col}: Index, sign: TicTacToeSign): TickTackToeBoard {
    const newBoard = this.board.map(arr => [...arr]);
    newBoard[row][col] = sign;
    return new TickTackToeBoard(newBoard);
  }
}
