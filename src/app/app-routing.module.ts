import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterComponent} from './views/character-sheet/character.component';
import {SpellListTableComponent} from './elements/spell-list-table/spell-list-table.component';
import {SettingsComponent} from './views/settings/settings.component';
import {FaqComponent} from './views/faq/faq.component';
import {FeedbackComponent} from './views/feedback/feedback.component';

const routes: Routes = [
  {path: '', component: CharacterComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'test', component: SpellListTableComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'feedback', component: FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
