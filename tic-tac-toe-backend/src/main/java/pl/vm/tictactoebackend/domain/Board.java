package pl.vm.tictactoebackend.domain;

import java.util.Arrays;

public class Board {
    private String[][] board;

    public Board(String[][] board) {
        this.board = board;
    }

    public static Board empty() {
        final var emptyBoard = new String[3][3];
        Arrays.fill(emptyBoard, new String[]{"", "", ""});
        return new Board(emptyBoard);
    }

    public String[][] getBoard() {
        return board;
    }

    /*
       TODO: validation
       for now it's not a public API
     */
    public Board withMarkedField(final String player, final int row, final int col) {
        var newBoard = Arrays.stream(board).map(arr -> Arrays.copyOf(arr, arr.length)).toArray(String[][]::new);
        if (newBoard[row][col].equals("")) {
            newBoard[row][col] = player;
        }
        return new Board(newBoard);
    }
}
