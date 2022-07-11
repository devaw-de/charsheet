import {ChangeDetectorRef, Component} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {CharacterService} from '@app/services';
import {EditNotesComponent} from '../../../components/modals/edit-notes/edit-notes.component';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent extends CharacterSheetBaseComponent {

  public lines = Array(30);

  constructor(
    protected _characterService: CharacterService,
    protected _changeDetectorRef: ChangeDetectorRef,
    private _dialogService: DialogService
  ) {
    super(_characterService, _changeDetectorRef);
  }

  public editNotes(): void {
    const modal = this._dialogService.open(EditNotesComponent, {
      size: 'lg',
      data: {
        notes: this.characterNotes
      }
    });
    const modalSubscription = modal.afterClosed$.subscribe((notes: Array<string>) => {
      if (notes) { this._characterService.setCharacterNotes(notes); }
      modalSubscription.unsubscribe();
    });
  }

}
