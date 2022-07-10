import {Component, OnInit} from '@angular/core';
import {CharacterService} from 'src/library/services/src/character.service';
import {Attribute, CharacterClass} from '@app/models';
import {AbilityHelper, EnumHelper} from '@app/helpers';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.scss']
})
export class SavingThrowsComponent extends CharacterSheetBaseComponent implements OnInit {

  public attributes = EnumHelper.getAttributesList();
  private _characterClass: CharacterClass;

  constructor(
    protected _characterService: CharacterService
  ) {
    super(_characterService);
  }

  ngOnInit(): void {
    this._characterClass = this._characterService.getClass();
  }

  public getSavingThrowModifier(attribute: Attribute): string {
    const attributeValue = this.characterAttributes[attribute.substring(0, 3).toLowerCase()];
    const proficiencyBonus = this._characterClass.proficiencies.savingThrows.includes(attribute)
                             ? this._character.proficiencies.proficiencyBonus : 0;
    const attributeBonus = AbilityHelper.getAbilityModifier(attributeValue);

    return AbilityHelper.formatModifier(proficiencyBonus + attributeBonus);
  }

  public isProficient(attribute: Attribute): boolean {
    return this._characterClass.proficiencies.savingThrows.includes(attribute);
  }

}
