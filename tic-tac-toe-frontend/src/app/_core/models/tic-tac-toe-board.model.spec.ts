import {DRAW_MESSAGE, Index, TicTacToeBoard, WIN_MESSAGE} from './tic-tac-toe-board.model';


describe('TicTacToe', () => {

  describe('empty', () => {
    it('should initialize board with 3x3 array of empty string', () => {
      const newBoard = TicTacToeBoard.empty();

      expect(newBoard.size).toEqual(3);
      newBoard.board.forEach(row => {
        expect(row).toEqual(['', '', '']);
      });
    });
  });

  describe('withMarkedField', () => {
    it('should set the the value at the given index in the board array to the specified sign', () => {
        const board = TicTacToeBoard.empty();
        const newBoard = board.withMarkedField(new Index(1, 1), 'O');

        expect(newBoard.board[1][1]).toEqual('O');
      }
    );
    it('should not override items', () => {
      const board = TicTacToeBoard.empty();
      const newBoard = board.withMarkedField(new Index(1, 1), 'O')
        .withMarkedField(new Index(1, 1), 'X');

      expect(newBoard.board[1][1]).toEqual('O');
    });
  });

  describe('hasGameFinished', () => {
    it('should return true if all fields are not empty', () => {
      const board = new TicTacToeBoard([['O'].constructor(3)]);

      expect(board.hasGameFinished()).toBeTrue();
    });
  });

  describe('getWinner', () => {
    it('should return DRAW if game has finished', () => {
      const board = new TicTacToeBoard([['O', 'X', 'X'], ['X', 'X', 'O'], ['O', 'O', 'X']]);

      expect(board.getWinner()).toEqual(DRAW_MESSAGE);
    });
    it('should return null if game not finished and no winner', () => {
      const board = new TicTacToeBoard([['O', 'X', 'X'], ['X', 'X', 'O'], ['O', 'O', '']]);

      expect(board.getWinner()).toBeNull();
    });
    /*
      The regexes have also been tested manually
     */
    it('should return that X won', () => {
      const board = new TicTacToeBoard([['X', 'X', 'X'], ['X', 'X', 'O'], ['O', 'O', '']]);

      expect(board.getWinner()).toEqual(WIN_MESSAGE('X'));
    });
    it('should return that O won', () => {
      const board = new TicTacToeBoard([['O', 'X', 'X'], ['O', 'X', 'O'], ['O', 'O', '']]);

      expect(board.getWinner()).toEqual(WIN_MESSAGE('O'));
    });
  });
});
