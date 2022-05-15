import {Component, Input} from '@angular/core';
import {AbilityHelper} from '@app/helpers';
import {PlayerCharacterData, SkillName} from '@app/models';

@Component({
  selector: 'app-passive-perception',
  templateUrl: './passive-perception.component.html',
  styleUrls: ['./passive-perception.component.scss']
})
export class PassivePerceptionComponent {

  public passivePerception: number;
  @Input() character: PlayerCharacterData;

  public getPassivePerception(): number {
    const perceptionSkillProficiencyBonus: number =
      this.character.proficiencies.skills.includes(SkillName.PERCEPTION)
      ? this.character.proficiencies.proficiencyBonus
      : 0;
    const wisdomModifier = AbilityHelper.getAbilityModifier(this.character.attributes.wis);
    return 10 + wisdomModifier + perceptionSkillProficiencyBonus;
  }

}
