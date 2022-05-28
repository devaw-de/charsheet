import {Component, Input, OnInit} from '@angular/core';
import {CharacterClassName, CharacterClassSpellSlots, CharacterClassSpellSlotsPerLevel, PlayerCharacterData} from '@app/models';
import {AbilityHelper, SpellHelper} from '@app/helpers';

@Component({
  selector: 'app-spell-slot-table',
  templateUrl: './spell-slot-table.component.html',
  styleUrls: []
})
export class SpellSlotTableComponent {

  private _character: PlayerCharacterData;

  @Input() public set character(c: PlayerCharacterData) {
    console.log('c update');
    this._character = c;
    this.characterSpellSlots = SpellHelper.getSpellSlots(this.character.className, this.character.level);
    this.spellDC = this._getSpellDc();
  }

  public get character(): PlayerCharacterData {
    return this._character;
  }

  public characterSpellSlots: CharacterClassSpellSlotsPerLevel;
  public spellDC: number;


  private _getSpellDc(): number {
    let castingAbilityModifier: number;

    switch (this.character.className) {
      case CharacterClassName.BARD:
      case CharacterClassName.PALADIN:
      case CharacterClassName.SORCERER:
      case CharacterClassName.WARLOCK:
        castingAbilityModifier = AbilityHelper.getAbilityModifier(this.character.attributes.cha);
        break;
      case CharacterClassName.CLERIC:
      case CharacterClassName.DRUID:
        castingAbilityModifier = AbilityHelper.getAbilityModifier(this.character.attributes.wis);
        break;
      case CharacterClassName.WIZARD:
        castingAbilityModifier = AbilityHelper.getAbilityModifier(this.character.attributes.int);
        break;
      default:
        return 0;
    }

    return 8 + this.character.proficiencies.proficiencyBonus + castingAbilityModifier;
  }

}
