import {Component} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {EditTextComponent} from 'src/app/components/modals/generic-modals/edit-text/edit-text.component';
import {CharacterService} from '@app/services';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-character-history',
  templateUrl: './character-history.component.html',
  styleUrls: ['./character-history.component.scss']
})
export class CharacterHistoryComponent extends CharacterSheetBaseComponent {

  constructor(
    protected _characterService: CharacterService,
    private _dialogService: DialogService
  ) {
    super(_characterService);
  }

  edit(): void {
    const modal = this._dialogService.open(EditTextComponent, {
      data: {
        title: 'Character Background',
        value: this._character.history ? this._character.history : '',
        minLength: 0,
        maxLength: 999999
      }
    });
    const modalSubscription = modal.afterClosed$.subscribe(result => {
      this._characterService.setHistory(result);
      modalSubscription.unsubscribe();
    });
  }

}
