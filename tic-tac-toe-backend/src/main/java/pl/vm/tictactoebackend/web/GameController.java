package pl.vm.tictactoebackend.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import pl.vm.tictactoebackend.domain.GameService;
import pl.vm.tictactoebackend.domain.GameDTO;
import pl.vm.tictactoebackend.domain.MarkFieldDTO;

@RestController
@RequestMapping("/game")
@Validated
@CrossOrigin //ugly but ok for a non production app
public class GameController {
    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping
    ResponseEntity<GameDTO> getCurrentGame() {
        return ResponseEntity.ok(gameService.getCurrentGame());
    }

    @PostMapping("/field/mark")
    ResponseEntity<GameDTO> markField(
            @RequestParam("player") String player,
            @RequestBody MarkFieldDTO request
    ) {
        try {
            return ResponseEntity.ok(gameService.markField(player, request));
        } catch (IllegalStateException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
        }
    }

    @PostMapping("/reset")
    ResponseEntity<GameDTO> reset() {
       return ResponseEntity.ok(this.gameService.reset());
    }
}
