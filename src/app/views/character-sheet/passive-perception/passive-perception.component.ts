import {Component} from '@angular/core';
import {AbilityHelper} from '@app/helpers';
import {SkillName} from '@app/models';
import {CharacterService} from '@app/services';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-passive-perception',
  templateUrl: './passive-perception.component.html',
  styleUrls: ['./passive-perception.component.scss']
})
export class PassivePerceptionComponent extends CharacterSheetBaseComponent {

  constructor(
    protected _characterService: CharacterService
  ) {
    super(_characterService);
  }

  public getPassivePerception(): number {
    const perceptionSkillProficiencyBonus: number = this._character.proficiencies.skills.includes(SkillName.PERCEPTION)
      ? this._character.proficiencies.proficiencyBonus
      : 0;
    const wisdomModifier = AbilityHelper.getAbilityModifier(this._character.attributes.wis);
    return 10 + wisdomModifier + perceptionSkillProficiencyBonus;
  }

}
