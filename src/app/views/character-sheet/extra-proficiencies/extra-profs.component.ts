import {Component} from '@angular/core';
import {Proficiencies} from '@app/models';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';
import {CharacterService} from '@app/services';

@Component({
  selector: 'app-extra-profs',
  templateUrl: './extra-profs.component.html',
  styleUrls: ['./extra-profs.component.scss']
})
export class ExtraProficienciesComponent extends CharacterSheetBaseComponent {

  public get proficiencies(): Proficiencies {
    return this._character.proficiencies;
  }

  constructor(
    protected _characterService: CharacterService
  ) {
    super(_characterService);
  }

}
