import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterComponent} from './character-sheet/character.component';
import {SpellListTableComponent} from './elements/spell-list-table/spell-list-table.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  {path: '', component: CharacterComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'test', component: SpellListTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
