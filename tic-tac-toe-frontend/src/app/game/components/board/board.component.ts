import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Index, TicTacToeBoard} from '../../../_core/models/tic-tac-toe-board.model';
import {TicTacToeSign} from '../../../_core/models/current-game.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent {
  @Input() currentSign: TicTacToeSign;
  @Input() currentBoard: TicTacToeBoard;

  @Output() fieldMarked = new EventEmitter<Index>();

  private currentField: HTMLDivElement;

  markField(field: HTMLDivElement, row: number, col: number): void {
    if (this.fieldNotMarked(field)) {
      if (!!this.currentField) {
        this.currentField.innerText = '';
      }

      this.currentField = field;
      this.currentField.innerText = this.currentSign;
      this.fieldMarked.emit(new Index(row, col));
    }
  }

  // noinspection JSMethodCanBeStatic
  private fieldNotMarked(field: HTMLDivElement): boolean {
    return field.innerText === '';
  }
}
