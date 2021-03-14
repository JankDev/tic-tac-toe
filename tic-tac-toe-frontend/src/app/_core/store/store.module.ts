import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../../../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    })
  ]
})
export class StoreModule {
}
