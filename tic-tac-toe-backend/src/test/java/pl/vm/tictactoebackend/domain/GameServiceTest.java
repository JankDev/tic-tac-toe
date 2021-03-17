package pl.vm.tictactoebackend.domain;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class GameServiceTest {
    private GameService service = new GameService();

    @Test
    void shouldMarkFieldOnBoard() {
        //when
        var game = service.markField("X", new MarkFieldDTO(1, 1));

        //then
        assertThat(game.getCurrentPlayer()).isEqualTo("O");
        assertThat(game.getBoard().getBoard()[1][1]).isEqualTo("X");
    }

    @Test
    void shouldThrowExceptionWhenNotTheCurrentPlayer() {
        assertThrows(IllegalStateException.class, () -> service.markField("O", new MarkFieldDTO(1, 1)));
    }

    @Test
    void reset() {
        //when
        service = new GameService("O", new Board(new String[][]{new String[]{"X", "X", "X"}, new String[3], new String[3]}));
        var game = this.service.reset();

        assertThat(game.getCurrentPlayer()).isEqualTo("X");
        assertThat(game.getBoard().getBoard()).isDeepEqualTo(Board.empty().getBoard());
    }

}