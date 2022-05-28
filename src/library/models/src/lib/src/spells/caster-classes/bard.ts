import {
  WizardSpellSlotsCharacterLevel1,
  WizardSpellSlotsCharacterLevel2,
  WizardSpellSlotsCharacterLevel3,
  WizardSpellSlotsCharacterLevel4,
  WizardSpellSlotsCharacterLevel5,
  WizardSpellSlotsCharacterLevel6,
  WizardSpellSlotsCharacterLevel7,
  WizardSpellSlotsCharacterLevel8,
  WizardSpellSlotsCharacterLevel9,
  WizardSpellSlotsCharacterLevel10,
  WizardSpellSlotsCharacterLevel11,
  WizardSpellSlotsCharacterLevel12,
  WizardSpellSlotsCharacterLevel13,
  WizardSpellSlotsCharacterLevel14,
  WizardSpellSlotsCharacterLevel15,
  WizardSpellSlotsCharacterLevel16,
  WizardSpellSlotsCharacterLevel17,
  WizardSpellSlotsCharacterLevel18,
  WizardSpellSlotsCharacterLevel19,
  WizardSpellSlotsCharacterLevel20
} from './wizard';
import {CharacterClassSpellSlotsPerLevel} from '@app/models';

export const BardSpellSlotsMap = new Map<number, CharacterClassSpellSlotsPerLevel>();
BardSpellSlotsMap.set(1, WizardSpellSlotsCharacterLevel1);
BardSpellSlotsMap.set(2, WizardSpellSlotsCharacterLevel2);
BardSpellSlotsMap.set(3, WizardSpellSlotsCharacterLevel3);
BardSpellSlotsMap.set(4, WizardSpellSlotsCharacterLevel4);
BardSpellSlotsMap.set(5, WizardSpellSlotsCharacterLevel5);
BardSpellSlotsMap.set(6, WizardSpellSlotsCharacterLevel6);
BardSpellSlotsMap.set(7, WizardSpellSlotsCharacterLevel7);
BardSpellSlotsMap.set(8, WizardSpellSlotsCharacterLevel8);
BardSpellSlotsMap.set(9, WizardSpellSlotsCharacterLevel9);
BardSpellSlotsMap.set(10, WizardSpellSlotsCharacterLevel10);
BardSpellSlotsMap.set(11, WizardSpellSlotsCharacterLevel11);
BardSpellSlotsMap.set(12, WizardSpellSlotsCharacterLevel12);
BardSpellSlotsMap.set(13, WizardSpellSlotsCharacterLevel13);
BardSpellSlotsMap.set(14, WizardSpellSlotsCharacterLevel14);
BardSpellSlotsMap.set(15, WizardSpellSlotsCharacterLevel15);
BardSpellSlotsMap.set(16, WizardSpellSlotsCharacterLevel16);
BardSpellSlotsMap.set(17, WizardSpellSlotsCharacterLevel17);
BardSpellSlotsMap.set(18, WizardSpellSlotsCharacterLevel18);
BardSpellSlotsMap.set(19, WizardSpellSlotsCharacterLevel19);
BardSpellSlotsMap.set(20, WizardSpellSlotsCharacterLevel20);


export function BardSpellsKnownPerLevel(level: number): number {
  switch (true) {
    case level < 1:
      return 0;
    case level < 10 || level === 12:
      return level + 3;
    case level < 12:
      return level + 4;
    case level < 14:
      return 15;
    case level < 17:
      return 19;
    case level === 17:
      return 20;
    case level < 21:
      return 22;
    default:
      return 0;
  }
}

export function BardCantripsKnownPerLevel(level: number): number {
  switch (true) {
    case level < 1:
      return 0;
    case level < 4:
      return 2;
    case level < 10:
      return 3;
    case level < 21:
      return 4;
    default:
      return 0;
  }
}
