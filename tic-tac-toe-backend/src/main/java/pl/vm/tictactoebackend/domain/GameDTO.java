package pl.vm.tictactoebackend.domain;

public class GameDTO {
    private String currentPlayer;
    private Board board;

    //needed for test
    public GameDTO(){

    }
    public GameDTO(String currentPlayer, Board board) {
        this.currentPlayer = currentPlayer;
        this.board = board;
    }

    public void setCurrentPlayer(String currentPlayer) {
        this.currentPlayer = currentPlayer;
    }

    public void setBoard(Board board) {
        this.board = board;
    }

    public String getCurrentPlayer() {
        return currentPlayer;
    }

    public Board getBoard() {
        return board;
    }
}
