package pl.vm.tictactoebackend.domain;

import pl.vm.tictactoebackend.domain.Board;

public class GameDTO {
    private final String currentPlayer;
    private final Board board;


    public GameDTO(String currentPlayer, Board board) {
        this.currentPlayer = currentPlayer;
        this.board = board;
    }

    public String getCurrentPlayer() {
        return currentPlayer;
    }

    public Board getBoard() {
        return board;
    }
}
