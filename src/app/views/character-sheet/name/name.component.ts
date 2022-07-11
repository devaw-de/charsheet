import {ChangeDetectorRef, Component} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {EditStringComponent} from 'src/app/components/modals/generic-modals/edit-string/edit-string.component';
import {CharacterService} from '@app/services';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent extends CharacterSheetBaseComponent {

  constructor(
    protected _characterService: CharacterService,
    protected _changeDetectorRef: ChangeDetectorRef,
    private _dialog: DialogService
  ) {
    super(_characterService, _changeDetectorRef);
  }

  public edit(): void {
    const modal = this._dialog.open(EditStringComponent, {
      data: {
        title: 'Name your Character',
        minLength: 1,
        maxLength: 99,
        currentValue: this._character.name
      }
    });
    const modalSubscription = modal.afterClosed$.subscribe((value: string) => {
      if (value) { this._characterService.setCharacterName(value); }
      modalSubscription.unsubscribe();
    });
  }

}
