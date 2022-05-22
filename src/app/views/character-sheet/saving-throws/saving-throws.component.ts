import {Component, Input, OnInit} from '@angular/core';
import {CharacterService} from 'src/library/services/src/character.service';
import {Attribute, CharacterClass, PlayerCharacterData} from '@app/models';
import {AbilityHelper, EnumHelper} from '@app/helpers';

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.scss']
})
export class SavingThrowsComponent implements OnInit {

  public attributes = EnumHelper.getAttributesList();
  @Input() character: PlayerCharacterData;
  private _characterClass: CharacterClass;

  constructor(
    private _service: CharacterService
  ) { }

  ngOnInit(): void {
    this._characterClass = this._service.getClass();
  }

  public getSavingThrowModifier(attribute: Attribute): string {
    const attributeValue = this.character.attributes[attribute.substring(0, 3).toLowerCase()];
    const proficiencyBonus = this._characterClass.proficiencies.savingThrows.includes(attribute)
                             ? this.character.proficiencies.proficiencyBonus : 0;
    const attributeBonus = AbilityHelper.getAbilityModifier(attributeValue);

    return AbilityHelper.formatModifier(proficiencyBonus + attributeBonus);
  }

  public isProficient(attribute: Attribute): boolean {
    return this._characterClass.proficiencies.savingThrows.includes(attribute);
  }

}
