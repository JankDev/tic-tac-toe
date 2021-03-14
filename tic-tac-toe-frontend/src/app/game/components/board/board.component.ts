import {Component, OnInit} from '@angular/core';
import {MatGridTile} from '@angular/material/grid-list';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  size = 3;

  constructor() {
  }

  ngOnInit(): void {
  }

  markField(field: HTMLDivElement): void {
    console.log(field);
    field.innerText = 'X';
  }
}
