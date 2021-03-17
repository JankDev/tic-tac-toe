package pl.vm.tictactoebackend.web;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.vm.tictactoebackend.domain.GameService;
import pl.vm.tictactoebackend.domain.GameDTO;

@RestController("/game")
public class GameController {
    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping
    ResponseEntity<GameDTO> getCurrentGame(){
        return ResponseEntity.ok(gameService.getCurrentGame());
    }
}
