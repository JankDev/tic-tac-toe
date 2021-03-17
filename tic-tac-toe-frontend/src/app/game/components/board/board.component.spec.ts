import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BoardComponent} from './board.component';
import {Component} from '@angular/core';
import {Index, TicTacToeBoard} from '../../../_core/models/tic-tac-toe-board.model';
import {By} from '@angular/platform-browser';
import {take} from 'rxjs/operators';
import {TicTacToeSign} from '../../../_core/models/current-game.model';

describe('BoardComponent', () => {
  let hostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardComponent, TestHostComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should create a 3x3 grid', () => {
    expect(fixture.debugElement.query(By.css('.container')).children).toHaveSize(9);
  });

  describe('markField', () => {
    it('should mark field if its empty', () => {
      const board = fixture.debugElement.childNodes[0].context as BoardComponent;
      const firstDiv = fixture.debugElement.query(By.css('.container')).children[0].nativeElement as HTMLDivElement;

      board.markField(firstDiv, 0, 0);

      expect(firstDiv.innerText).toEqual('X');
    });
    it('should not mark field if its not empty', () => {
      const board = fixture.debugElement.childNodes[0].context as BoardComponent;
      const firstDiv = fixture.debugElement.query(By.css('.container')).children[0].nativeElement as HTMLDivElement;

      firstDiv.innerText = 'O';
      board.markField(firstDiv, 0, 0);

      expect(firstDiv.innerText).toEqual('O');
    });
    it('should emit event when field clicked with current index', () => {
      const board = fixture.debugElement.childNodes[0].context as BoardComponent;
      const firstDiv = fixture.debugElement.query(By.css('.container')).children[0].nativeElement as HTMLDivElement;

      board.markField(firstDiv, 0, 0);

      board.fieldMarked.pipe(
        take(1)
      ).subscribe((index: Index) => {
        expect(index).toEqual(new Index(0, 0));
      });
    });
  });

  @Component({
    selector: `app-host-component`,
    template: `
      <app-board [currentBoard]="board" [currentSign]="currentSign"></app-board>`
  })
  class TestHostComponent {
    board = TicTacToeBoard.empty();
    currentSign: TicTacToeSign = 'X';
  }
});
