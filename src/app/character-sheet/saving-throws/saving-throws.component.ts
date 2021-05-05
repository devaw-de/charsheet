import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/lib/character.service';
import { Utils } from 'src/app/lib/utils';
import { Attribute } from 'src/app/model/attributes';
import { PlayerCharacterData } from 'src/app/model/character';
import { CharacterClass } from 'src/app/model/characterClasses';

@Component({
  selector: 'app-saving-throws',
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.scss']
})
export class SavingThrowsComponent implements OnInit {

  public attributes = Utils.getAttributesList();
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
    const profifiencyBonus = this._characterClass.proficiencies.savingThrows.includes(attribute)
                             ? this.character.proficiencies.proficiencyBonus : 0;
    const attributeBonus = Utils.getAbilityModifier(attributeValue);

    return Utils.formatModifier(profifiencyBonus + attributeBonus);
  }

  public isProficient(attribute: Attribute): boolean {
    return this._characterClass.proficiencies.savingThrows.includes(attribute);
  }

}
