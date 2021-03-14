import {TicTacToeSign} from '../store/root-store';


export class Index {
  constructor(public row: number, public col: number) {
  }
}

const winningPatterns = [
  {winner: 'X', pattern: /XXX[OXE]{6}/},
  {winner: 'X', pattern: /[OXE]{3}XXX[OXE]{3}/},
  {winner: 'X', pattern: /[OXE]{6}XXX/},
  {winner: 'X', pattern: /(X[OXE]{2}){3}/},
  {winner: 'X', pattern: /([OXE]{2}X){3}/},
  {winner: 'X', pattern: /X[OXE]{2}[OXE]X[OXE][OXE]{2}X/},
  {winner: 'X', pattern: /[OXE]{2}X[OXE]X[OXE]X[OXE]{2}/},
  {winner: 'O', pattern: /OOO[OXE]{6}/},
  {winner: 'O', pattern: /[OXE]{3}OOO[OXE]{3}/},
  {winner: 'O', pattern: /[OXE]{6}OOO/},
  {winner: 'O', pattern: /(O[OXE]{2}){3}/},
  {winner: 'O', pattern: /([OXE]{2}O){3}/},
  {winner: 'O', pattern: /O[OXE]{2}[OXE]O[OXE][OXE]{2}O/},
  {winner: 'O', pattern: /[OXE]{2}O[OXE]O[OXE]O[OXE]{2}/},
];

export class TickTackToeBoard {

  constructor(public board: string[][]) {
  }

  static empty(): TickTackToeBoard {
    return new TickTackToeBoard([['', '', ''], ['', '', ''], ['', '', '']]);
  }

  get size(): number {
    return this.board[0].length;
  }

  getWinner(): string {
    function emptyToE(col: string): string {
      return col === '' ? 'E' : col;
    }

    if (this.hasGameFinished()) {
      return 'DRAW';
    } else {
      const boardAsString = this.board.map(row => row.map(emptyToE).join('')).join('');
      const win = winningPatterns.find(({winner, pattern}) => pattern.test(boardAsString))?.winner;
      return !!win ? `${win} won` : null;
    }
  }

  hasGameFinished(): boolean {
    return this.board.every(row => row.every(col => col !== ''));
  }

  withMarkedField({row, col}: Index, sign: TicTacToeSign): TickTackToeBoard {
    const newBoard = this.board.map(arr => [...arr]);
    newBoard[row][col] = sign;
    return new TickTackToeBoard(newBoard);
  }
}
