import {ChangeDetectorRef, Component} from '@angular/core';
import {DialogService} from '@ngneat/dialog';
import {CharacterSkillList, CharacterSkill, SkillName} from '@app/models';
import {SkillProficiencySelectionComponent} from '../../../components/modals/skill-proficiency-selection/skill-proficiency-selection.component';
import {AbilityHelper, EnumHelper} from '@app/helpers';
import {CharacterService} from '@app/services';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent extends CharacterSheetBaseComponent {

  public skills: Array<CharacterSkill> = CharacterSkillList;

  constructor(
    protected _characterService: CharacterService,
    protected _changeDetectorRef: ChangeDetectorRef,
    private _dialogService: DialogService
  ) {
    super(_characterService, _changeDetectorRef);
  }

  public getSkillModifier(skill: CharacterSkill): string {
    const bonus = this._character.proficiencies.proficiencyBonus;
    const relatedAttribute = this.characterAttributes[skill.relatedAttribute.substring(0, 3).toLocaleLowerCase()];
    const attributeModifier = AbilityHelper.getAbilityModifier(relatedAttribute);
    const skillModifier = this._character.proficiencies.skills.includes(skill.name) ? bonus : 0;
    // TODO: handle Expertise

    return AbilityHelper.formatModifier(attributeModifier + skillModifier);
  }

  public isProficient(skillName: SkillName): boolean {
    return this._character.proficiencies.skills.includes(skillName);
  }

  public startSkillProficiencySelection(): void {
    const restrictedSkills = CharacterSkillList.filter(
      skill => skill.canBeChosenByClass.includes(this._character.className)
    );

    const modal = this._dialogService.open(SkillProficiencySelectionComponent, {
      data: {
        pickableSkills: restrictedSkills ? restrictedSkills : EnumHelper.getSkillList(),
        selectedSkills: this._character.proficiencies.skills,
        maxSelections: 3
      }
    });
    const modalSubscription = modal.afterClosed$.subscribe(result => {
      console.log(result);
      modalSubscription.unsubscribe();
    });
  }

}
