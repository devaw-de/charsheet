import {Component} from '@angular/core';
import {CharacterService} from '@app/services';
import {CharacterTraits} from '@app/models';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-feats',
  templateUrl: './feats.component.html',
  styleUrls: ['../notes/notes.component.scss']
})
export class FeatsComponent extends CharacterSheetBaseComponent {

  constructor(
    protected _characterService: CharacterService
  ) {
    super(_characterService);
  }

  public getFeats(): Array<CharacterTraits> {
    return this._characterService.getCharacterFeats();
  }

}
