import {
  BardSpellSlotsMap,
  CharacterClassName,
  CharacterClassSpellSlotsPerLevel,
  ClericSpellSlotsMap,
  DruidSpellSlotsMap,
  PaladinSpellSlotsMap,
  RangerSpellSlotsMap,
  SorcererSpellSlotsMap,
  WizardSpellSlotsMap
} from '@app/models';

export class SpellHelper {

  public static getSpellSlots(characterClass: CharacterClassName, characterLevel: number): CharacterClassSpellSlotsPerLevel {
    switch (characterClass) {
      case CharacterClassName.BARD:
        return BardSpellSlotsMap.get(characterLevel);
      case CharacterClassName.CLERIC:
        return ClericSpellSlotsMap.get(characterLevel);
      case CharacterClassName.DRUID:
        return DruidSpellSlotsMap.get(characterLevel);
      case CharacterClassName.PALADIN:
        return PaladinSpellSlotsMap.get(characterLevel);
      case CharacterClassName.RANGER:
        return RangerSpellSlotsMap.get(characterLevel);
      case CharacterClassName.SORCERER:
        return SorcererSpellSlotsMap.get(characterLevel);
      case CharacterClassName.WIZARD:
        return WizardSpellSlotsMap.get(characterLevel);
      default:
        return null;
    }
  }

}
