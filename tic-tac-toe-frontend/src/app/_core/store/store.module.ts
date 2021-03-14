import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../../../environments/environment';
import {RootStore} from './root-store';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    NgxsModule.forRoot([RootStore], {
      developmentMode: !environment.production
    })
  ]
})
export class StoreModule {
}
