package pl.vm.tictactoebackend.web;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpMethod;
import pl.vm.tictactoebackend.domain.Board;
import pl.vm.tictactoebackend.domain.GameDTO;
import pl.vm.tictactoebackend.domain.MarkFieldDTO;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class GameControllerTest {
    private final String baseUrl = "/game";
    private final TestRestTemplate restTemplate;

    @Autowired
    public GameControllerTest(final TestRestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Test
    @Order(1)
    void getCurrentGameShouldReturnGameInfo() {
        //when
        var result = restTemplate.getForEntity(baseUrl, GameDTO.class);

        assertThat(result.getStatusCode().is2xxSuccessful()).isTrue();
        assertThat(result.getBody()).isNotNull();
        assertThat(result.getBody().getCurrentPlayer()).isEqualTo("X");
        assertThat(result.getBody().getBoard().getBoard()).isDeepEqualTo(Board.empty().getBoard());
    }

    @Test
    @Order(2)
    void markField() {
        //given
        var request = new MarkFieldDTO(1, 1);

        //when
        var result = restTemplate.postForEntity(baseUrl + "/field/mark?player=X", request, GameDTO.class);

        //then
        System.out.println(result.toString());
        assertThat(result.getStatusCode().is2xxSuccessful()).isTrue();
        assertThat(result.getBody()).isNotNull();
        assertThat(result.getBody().getCurrentPlayer()).isEqualTo("O");
        assertThat(result.getBody().getBoard().getBoard()[1][1]).isEqualTo("X");
    }

    @Test
    @Order(3)
    void reset() {
        //when
        var result = restTemplate.exchange(baseUrl + "/reset", HttpMethod.POST, null, GameDTO.class);

        assertThat(result.getBody()).isNotNull();
        assertThat(result.getBody().getCurrentPlayer()).isEqualTo("X");
        assertThat(result.getBody().getBoard().getBoard()).isDeepEqualTo(Board.empty().getBoard());
    }
}