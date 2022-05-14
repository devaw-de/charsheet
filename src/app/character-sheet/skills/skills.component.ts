import {Component, Input} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {Utils} from 'src/app/lib/utils';
import {CharacterSkillList, CharacterSkill, SkillName} from '../../model/abilities';
import {PlayerCharacterData} from '../../model/character';
import {SkillProficiencySelectionComponent} from './skill-proficiency-selection/skill-proficiency-selection.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  public skills: Array<CharacterSkill> = CharacterSkillList;
  @Input() character: PlayerCharacterData;

  constructor(
    private _dialogService: DialogService
  ) {}

  public getSkillModifier(skill: CharacterSkill): string {
    const bonus = this.character.proficiencies.proficiencyBonus;
    const relatedAttribute = this.character.attributes[skill.relatedAttribute.substring(0, 3).toLocaleLowerCase()];
    const attributeModifier = Utils.getAbilityModifier(relatedAttribute);
    const skillModifier = this.character.proficiencies.skills.includes(skill.name) ? bonus : 0;
    // TODO: handle Expertise

    return Utils.formatModifier(attributeModifier + skillModifier);
  }

  public isProficient(skillName: SkillName): boolean {
    return this.character.proficiencies.skills.includes(skillName);
  }

  public startSkillProficiencySelection(): void {
    const restrictedSkills = CharacterSkillList.filter(
      skill => skill.canBeChosenByClass.includes(this.character.className)
    );

    const modal = this._dialogService.open(SkillProficiencySelectionComponent, {
      data: {
        pickableSkills: restrictedSkills ? restrictedSkills : Utils.getSkillList(),
        selectedSkills: this.character.proficiencies.skills,
        maxSelections: 3
      }
    });
    const modalSubscription = modal.afterClosed$.subscribe(result => {
      console.log(result);
      modalSubscription.unsubscribe();
    });
  }

}
