package pl.vm.tictactoebackend.domain;

import org.springframework.stereotype.Service;

@Service
public class GameService {
    private String currentPlayer="X";
    private Board currentBoard  = Board.empty();

    public GameDTO getCurrentGame(){
        return new GameDTO(currentPlayer,currentBoard);
    }
}
