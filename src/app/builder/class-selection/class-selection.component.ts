import { Component } from '@angular/core';
import { CharacterService } from 'src/app/lib/character.service';
import { PlayerCharacterData } from 'src/app/model/character';

@Component({
  selector: 'app-class-selection',
  templateUrl: './class-selection.component.html',
  styleUrls: ['./class-selection.component.scss']
})
export class ClassSelectionComponent {

  public character: PlayerCharacterData;

  constructor(
    private _service: CharacterService
  ) {
    this.character = this._service.getCharacter();
  }

}
