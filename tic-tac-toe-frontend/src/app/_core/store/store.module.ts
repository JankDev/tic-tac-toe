import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../../../environments/environment';
import {RootStore} from './root-store';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([RootStore], {
      developmentMode: !environment.production
    })
  ]
})
export class StoreModule {
}
