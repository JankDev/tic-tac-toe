import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'play'},
  {path: 'play', loadChildren: () => import('./game/game.module').then(m => m.GameModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
