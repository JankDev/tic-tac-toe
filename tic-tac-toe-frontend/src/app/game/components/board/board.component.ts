import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TicTacToeSign} from '../../../_core/store/root-store';
import {Index, TickTackToeBoard} from '../../../_core/models/tick-tack-toe-board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() currentSign: TicTacToeSign;
  @Input() currentBoard: TickTackToeBoard;

  @Output() fieldMarked = new EventEmitter<Index>();

  private currentField: HTMLDivElement;

  constructor() {
  }

  ngOnInit(): void {
  }

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
