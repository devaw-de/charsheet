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
  WizardSpellSlotsCharacterLevel20,
} from './wizard';

export const SorcererSpellSlotsMap = new Map<number, Map<number, number>>();
SorcererSpellSlotsMap.set(1, WizardSpellSlotsCharacterLevel1);
SorcererSpellSlotsMap.set(2, WizardSpellSlotsCharacterLevel2);
SorcererSpellSlotsMap.set(3, WizardSpellSlotsCharacterLevel3);
SorcererSpellSlotsMap.set(4, WizardSpellSlotsCharacterLevel4);
SorcererSpellSlotsMap.set(5, WizardSpellSlotsCharacterLevel5);
SorcererSpellSlotsMap.set(6, WizardSpellSlotsCharacterLevel6);
SorcererSpellSlotsMap.set(7, WizardSpellSlotsCharacterLevel7);
SorcererSpellSlotsMap.set(8, WizardSpellSlotsCharacterLevel8);
SorcererSpellSlotsMap.set(9, WizardSpellSlotsCharacterLevel9);
SorcererSpellSlotsMap.set(10, WizardSpellSlotsCharacterLevel10);
SorcererSpellSlotsMap.set(11, WizardSpellSlotsCharacterLevel11);
SorcererSpellSlotsMap.set(12, WizardSpellSlotsCharacterLevel12);
SorcererSpellSlotsMap.set(13, WizardSpellSlotsCharacterLevel13);
SorcererSpellSlotsMap.set(14, WizardSpellSlotsCharacterLevel14);
SorcererSpellSlotsMap.set(15, WizardSpellSlotsCharacterLevel15);
SorcererSpellSlotsMap.set(16, WizardSpellSlotsCharacterLevel16);
SorcererSpellSlotsMap.set(17, WizardSpellSlotsCharacterLevel17);
SorcererSpellSlotsMap.set(18, WizardSpellSlotsCharacterLevel18);
SorcererSpellSlotsMap.set(19, WizardSpellSlotsCharacterLevel19);
SorcererSpellSlotsMap.set(20, WizardSpellSlotsCharacterLevel20);

export function SorcererSpellsKnownPerLevel(level: number): number {
  switch (true) {
    case level < 1:
      return 0;
    case level < 12:
      return level + 1;
    case level === 12:
      return 12;
    case level < 15:
      return 13;
    case level < 17:
      return 14;
    case level < 21:
      return 15;
    default:
      return 0;
  }
}

export function SorcererCantripsKnownPerLevel(level: number): number {
  if (level < 1 || level > 20) {
    return 0;
  }

  switch (true) {
    case level < 4:
      return 4;
    case level < 10:
      return 5;
    default:
      return 6;
  }
}

export function SorcererSorceryPointsPerLevel(level: number): number {
  if (level < 2 || level > 20) {
    return 0;
  }
  return level;
}
