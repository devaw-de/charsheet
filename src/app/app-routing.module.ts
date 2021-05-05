import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointBuyComponent } from './character-sheet/attributes/point-buy/point-buy.component';
import { CharacterComponent } from './character-sheet/character.component';

const routes: Routes = [
  {path: '', component: CharacterComponent},
  {path: 'test', component: PointBuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
