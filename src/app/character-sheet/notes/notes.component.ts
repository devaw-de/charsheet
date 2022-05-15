import {Component, Input} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {CharacterService} from 'src/app/lib/character.service';
import {EditNotesComponent} from './edit-notes/edit-notes.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  @Input() notes: Array<string>;
  public lines = Array(30);

  constructor(
    private _service: CharacterService,
    private _dialogService: DialogService
  ) {}

  public editNotes(): void {
    const modal = this._dialogService.open(EditNotesComponent, {
      size: 'lg',
      data: {
        notes: this.notes
      }
    });
    const modalSubscription = modal.afterClosed$.subscribe((notes: Array<string>) => {
      if (notes) { this._service.setCharacterNotes(notes); }
      modalSubscription.unsubscribe();
    });
  }

}
