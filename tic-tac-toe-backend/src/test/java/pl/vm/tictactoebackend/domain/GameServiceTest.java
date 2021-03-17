package pl.vm.tictactoebackend.domain;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class GameServiceTest {
    private GameService service = new GameService();

    @Test
    void shouldMarkFieldOnBoard() {
        //when
        var board = service.markField("X", new MarkFieldDTO(1, 1));

        //then
        assertThat(board.getCurrentPlayer()).isEqualTo("O");
        assertThat(board.getBoard().getBoard()[1][1]).isEqualTo("X");
    }

    @Test
    void shouldThrowExceptionWhenNotTheCurrentPlayer() {
        assertThrows(IllegalStateException.class, () -> service.markField("O", new MarkFieldDTO(1, 1)));
    }

}