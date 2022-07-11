import {ChangeDetectorRef, Component} from '@angular/core';
import {CharacterService} from 'src/library/services/src/character.service';
import {Attribute} from '@app/models';
import {AbilityHelper, EnumHelper} from '@app/helpers';
import {CharacterSheetBaseComponent} from '../_base/character-sheet-base.component';

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.scss']
})
export class SavingThrowsComponent extends CharacterSheetBaseComponent {

  public attributes = EnumHelper.getAttributesList();

  constructor(
    protected _characterService: CharacterService,
    protected _changeDetectorRef: ChangeDetectorRef
  ) {
    super(_characterService, _changeDetectorRef);
  }

  public getSavingThrowModifier(attribute: Attribute): string {
    if (!this.characterLoaded) {
      return '';
    }

    const attributeValue = this.characterAttributes[attribute.substring(0, 3).toLowerCase()];
    const proficiencyBonus = this.characterClassDetails.proficiencies.savingThrows.includes(attribute)
                             ? this._character.proficiencies.proficiencyBonus
                             : 0;
    const attributeBonus = AbilityHelper.getAbilityModifier(attributeValue);

    return AbilityHelper.formatModifier(proficiencyBonus + attributeBonus);
  }

  public isProficient(attribute: Attribute): boolean {
    return this.characterClassDetails.proficiencies.savingThrows.includes(attribute);
  }

}
