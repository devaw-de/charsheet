import {Component, Input} from '@angular/core';
import {CharacterService} from '@app/services';
import {CharacterTraits, PlayerCharacterData} from '@app/models';

@Component({
  selector: 'app-feats',
  templateUrl: './feats.component.html',
  styleUrls: ['../notes/notes.component.scss']
})
export class FeatsComponent {

  @Input() character: PlayerCharacterData;

  constructor(
    private _characterService: CharacterService
  ) {}

  public getFeats(): Array<CharacterTraits> {
    return this._characterService.getCharacterFeats();
  }

}
