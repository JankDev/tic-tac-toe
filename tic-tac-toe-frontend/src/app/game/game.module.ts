import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GameRoutingModule} from './game-routing.module';
import {GameComponent} from './container';
import {SharedModule} from '../_shared';
import { BoardComponent } from './components/board/board.component';


@NgModule({
  declarations: [GameComponent, BoardComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule
  ]
})
export class GameModule {
}
