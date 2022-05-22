import {Component, Input} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {EditTextComponent} from 'src/app/components/modals/generic-modals/edit-text/edit-text.component';
import {CharacterService} from '@app/services';
import {PlayerCharacterData} from '@app/models';

@Component({
  selector: 'app-character-history',
  templateUrl: './character-history.component.html',
  styleUrls: ['./character-history.component.scss']
})
export class CharacterHistoryComponent {

  @Input() character: PlayerCharacterData;

  constructor(
    private _service: CharacterService,
    private _dialog: DialogService
  ) { }

  edit(): void {
    const modal = this._dialog.open(EditTextComponent, {
      data: {
        title: 'Character Background',
        value: this.character.history ? this.character.history : '',
        minLength: 0,
        maxLength: 999999
      }
    });
    const modalSubscription = modal.afterClosed$.subscribe(result => {
      this._service.setHistory(result);
      modalSubscription.unsubscribe();
    });
  }

}
