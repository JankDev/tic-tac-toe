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
}
