import { Component, Input } from '@angular/core';
import { Utils } from 'src/app/lib/utils';
import { CharacterSkillList, CharacterSkill, Skill } from '../../model/abilities';
import { PlayerCharacterData } from '../../model/character';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  public skills: Array<CharacterSkill> = CharacterSkillList;
  @Input() character: PlayerCharacterData;

  public getSkillModifier(skill: CharacterSkill): string {
    const bonus = this.character.proficiencies.proficiencyBonus;
    const relatedAttribute = this.character.attributes[skill.relatedAttribute.substring(0, 3).toLocaleLowerCase()];
    const attributeModifier = Utils.getAbilityModifier(relatedAttribute);
    const skillModifier = this.character.proficiencies.skills.includes(skill.name) ? bonus : 0;
    // TODO: handle Expertise

    return Utils.formatModifier(attributeModifier + skillModifier);
  }

  public isProficient(skillName: Skill): boolean {
    return this.character.proficiencies.skills.includes(skillName);
  }

}
