import {Component, EventEmitter, Output} from '@angular/core';
import {CharacterService} from 'src/library/services/src/character.service';
import {CharacterBackgroundDetails, CharacterBackgroundsList} from 'src/library/models/src/lib/src/backgrounds';
import {PlayerCharacterData} from 'src/library/models/src/lib/src/character';

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
    this.character = this._service.getCharacter();
  }

  public onBackgroundSelection(event: CharacterBackgroundDetails): void {
    this.backgroundSelected.emit(event);
  }

}
