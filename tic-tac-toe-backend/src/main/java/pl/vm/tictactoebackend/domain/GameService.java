package pl.vm.tictactoebackend.domain;

import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

@Service
public class GameService {
    private String currentPlayer;
    private Board currentBoard;

    public GameService() {
        this.currentPlayer = "X";
        this.currentBoard = Board.empty();
    }

    public GameService(String currentPlayer, Board currentBoard) {
        this.currentPlayer = currentPlayer;
        this.currentBoard = currentBoard;
    }

    public GameDTO getCurrentGame() {
        return new GameDTO(currentPlayer, currentBoard);
    }

    public GameDTO markField(@NonNull final String player, @NonNull final MarkFieldDTO request) {
        if (this.currentPlayer.equals(player)) {
            this.currentPlayer = this.currentPlayer.equals("X") ? "O" : "X";
            this.currentBoard = this.currentBoard.withMarkedField(player, request.getRow(), request.getColumn());
            return getCurrentGame();
        } else {
            throw new IllegalStateException("It's not your turn");
        }
    }

    /*
        Both players can reset
     */
    public GameDTO reset() {
        this.currentPlayer = "X";
        this.currentBoard = Board.empty();
        return getCurrentGame();
    }
}
