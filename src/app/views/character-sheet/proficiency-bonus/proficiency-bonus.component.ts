import {Component} from '@angular/core';
import {CharacterService} from '@app/services';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-proficiency-bonus',
  templateUrl: './proficiency-bonus.component.html',
  styleUrls: ['./proficiency-bonus.component.scss']
})
export class ProficiencyBonusComponent extends CharacterSheetBaseComponent {

  public get bonus(): number {
    return this._character.proficiencies.proficiencyBonus;
  }

  constructor(
    protected _characterService: CharacterService
  ) {
    super(_characterService);
  }

}
