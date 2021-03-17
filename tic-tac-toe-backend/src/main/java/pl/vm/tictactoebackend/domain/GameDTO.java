package pl.vm.tictactoebackend.domain;

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
