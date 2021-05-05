import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterService } from 'src/app/lib/character.service';
import { CharacterBackgroundDetails, CharacterBackgroundsList } from 'src/app/model/backgrounds';
import { PlayerCharacterData } from 'src/app/model/character';

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
