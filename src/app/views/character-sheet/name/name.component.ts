import {Component, Input} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {EditStringComponent} from 'src/app/components/modals/generic-modals/edit-string/edit-string.component';
import {CharacterService} from '@app/services';
import {PlayerCharacterData} from '@app/models';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent {

  @Input() character: PlayerCharacterData;

  constructor(
    private _service: CharacterService,
    private _dialog: DialogService
  ) { }

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
      if (value) { this._service.setCharacterName(value); }
      modalSubscription.unsubscribe();
    });
  }

}
