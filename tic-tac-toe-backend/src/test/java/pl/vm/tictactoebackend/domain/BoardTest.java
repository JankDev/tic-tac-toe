package pl.vm.tictactoebackend.domain;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class BoardTest {

    @Test
    void emptyShouldInitializeBoardWithEmptyStrings() {
        var board = Board.empty();

        Arrays.stream(board.getBoard())
                .forEach(row -> Arrays.stream(row).forEach(field -> assertEquals("", field)));
    }
}