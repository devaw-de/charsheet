import { Component } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { EditStringComponent } from 'src/app/elements/generic-modals/edit-string/edit-string.component';
import { CharacterService } from 'src/app/lib/character.service';
import { CharacterClass } from 'src/app/model/characterClasses';
import { PlayerCharacterData } from '../../model/character';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent {

  public character: PlayerCharacterData;
  public characterClass: CharacterClass;

  constructor(
    private _service: CharacterService,
    private _dialog: DialogService
  ) {
    this.character = this._service.getCharacter();
    this.characterClass = this._service.getClass();
  }

  public edit(): void {
    const modal = this._dialog.open(EditStringComponent, {
      data: {
        title: 'Name your Character',
        minLength: 1,
        maxLength: 99,
        currentValue: this.character.name
      }
    });
    const modalSubscription = modal.afterClosed$.subscribe((value: string) => {
      if(value) this._service.setCharacterName(value);
      modalSubscription.unsubscribe();
    });
  }

}
