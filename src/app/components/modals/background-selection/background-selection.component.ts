import {Component, EventEmitter, Output} from '@angular/core';
import {CharacterService} from '@app/services';
import {CharacterBackgroundDetails, CharacterBackgroundsList, PlayerCharacterData} from '@app/models';

@Component({
  selector: 'app-background-selection',
  templateUrl: './background-selection.component.html',
  styleUrls: ['./background-selection.component.scss']
})
export class BackgroundSelectionComponent {

  CharacterBackgrounds = CharacterBackgroundsList;

  @Output() backgroundSelected: EventEmitter<CharacterBackgroundDetails> = new EventEmitter();

  public character: PlayerCharacterData;

  constructor(
    private _service: CharacterService
  ) {
    // this.character = this._service.getCharacter();
  }

  public onBackgroundSelection(event: CharacterBackgroundDetails): void {
    this.backgroundSelected.emit(event);
  }

}
