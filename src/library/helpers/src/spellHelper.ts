import {
  BardSpellSlotsMap,
  CharacterClassName,
  ClericSpellSlotsMap,
  DruidSpellSlotsMap,
  PaladinSpellSlotsMap,
  RangerSpellSlotsMap,
  SorcererSpellSlotsMap,
  WizardSpellSlotsMap
} from '@app/models';

export class SpellHelper {

  public static getMaxSpellSlots(characterClass: CharacterClassName, characterLevel: number): Map<number, number> {
    switch (characterClass) {
      case CharacterClassName.BARD:
        return new Map(BardSpellSlotsMap.get(characterLevel));
      case CharacterClassName.CLERIC:
        return new Map(ClericSpellSlotsMap.get(characterLevel));
      case CharacterClassName.DRUID:
        return new Map(DruidSpellSlotsMap.get(characterLevel));
      case CharacterClassName.PALADIN:
        return new Map(PaladinSpellSlotsMap.get(characterLevel));
      case CharacterClassName.RANGER:
        return new Map(RangerSpellSlotsMap.get(characterLevel));
      case CharacterClassName.SORCERER:
        return new Map(SorcererSpellSlotsMap.get(characterLevel));
      case CharacterClassName.WIZARD:
        return new Map(WizardSpellSlotsMap.get(characterLevel));
      default:
        return null;
    }
  }

}
