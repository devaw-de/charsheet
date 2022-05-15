import {Component, Input} from '@angular/core';
import {CharacterService} from 'src/app/lib/character.service';
import {PlayerCharacterData} from 'src/app/model/character';
import {CharacterTraits} from 'src/app/model/traits';

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
