package pl.vm.tictactoebackend.domain;

public class MarkFieldDTO {
    private int row;
    private int column;

    public MarkFieldDTO(int row, int column) {
        this.row = row;
        this.column = column;
    }

    public int getRow() {
        return row;
    }

    public int getColumn() {
        return column;
    }
}
