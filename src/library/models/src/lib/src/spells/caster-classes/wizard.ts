import {CharacterClassSpellSlots, CharacterClassSpellSlotsPerLevel} from '@app/models';

export const WizardSpellSlotsCharacterLevel1: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 2
};
export const WizardSpellSlotsCharacterLevel2: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 3
};
export const WizardSpellSlotsCharacterLevel3: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 4,
  spellLevel2: 2
};
export const WizardSpellSlotsCharacterLevel4: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel3,
  spellLevel2: 3
};
export const WizardSpellSlotsCharacterLevel5: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel4,
  spellLevel3: 2
};
export const WizardSpellSlotsCharacterLevel6: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel5,
  spellLevel3: 3
};
export const WizardSpellSlotsCharacterLevel7: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel6,
  spellLevel4: 1
};
export const WizardSpellSlotsCharacterLevel8: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel7,
  spellLevel4: 2
};
export const WizardSpellSlotsCharacterLevel9: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel8,
  spellLevel4: 3,
  spellLevel5: 1
};
export const WizardSpellSlotsCharacterLevel10: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel9,
  spellLevel5: 2
};
export const WizardSpellSlotsCharacterLevel11: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel10,
  spellLevel6: 1
};
export const WizardSpellSlotsCharacterLevel12: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel11
};
export const WizardSpellSlotsCharacterLevel13: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel12,
  spellLevel7: 1
};
export const WizardSpellSlotsCharacterLevel14: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel13
};
export const WizardSpellSlotsCharacterLevel15: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel14,
  spellLevel8: 1,
};
export const WizardSpellSlotsCharacterLevel16: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel15
};
export const WizardSpellSlotsCharacterLevel17: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel16,
  spellLevel9: 1
};
export const WizardSpellSlotsCharacterLevel18: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel7,
  spellLevel5: 3
};
export const WizardSpellSlotsCharacterLevel19: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel8,
  spellLevel6: 2
};
export const WizardSpellSlotsCharacterLevel20: CharacterClassSpellSlotsPerLevel = {
  ...WizardSpellSlotsCharacterLevel9,
  spellLevel7: 2
};

export const WizardSpellSlotsMap = new Map<number, CharacterClassSpellSlotsPerLevel>();
WizardSpellSlotsMap.set(1, WizardSpellSlotsCharacterLevel1);
WizardSpellSlotsMap.set(2, WizardSpellSlotsCharacterLevel2);
WizardSpellSlotsMap.set(3, WizardSpellSlotsCharacterLevel3);
WizardSpellSlotsMap.set(4, WizardSpellSlotsCharacterLevel4);
WizardSpellSlotsMap.set(5, WizardSpellSlotsCharacterLevel5);
WizardSpellSlotsMap.set(6, WizardSpellSlotsCharacterLevel6);
WizardSpellSlotsMap.set(7, WizardSpellSlotsCharacterLevel7);
WizardSpellSlotsMap.set(8, WizardSpellSlotsCharacterLevel8);
WizardSpellSlotsMap.set(9, WizardSpellSlotsCharacterLevel9);
WizardSpellSlotsMap.set(10, WizardSpellSlotsCharacterLevel10);
WizardSpellSlotsMap.set(11, WizardSpellSlotsCharacterLevel11);
WizardSpellSlotsMap.set(12, WizardSpellSlotsCharacterLevel12);
WizardSpellSlotsMap.set(13, WizardSpellSlotsCharacterLevel13);
WizardSpellSlotsMap.set(14, WizardSpellSlotsCharacterLevel14);
WizardSpellSlotsMap.set(15, WizardSpellSlotsCharacterLevel15);
WizardSpellSlotsMap.set(16, WizardSpellSlotsCharacterLevel16);
WizardSpellSlotsMap.set(17, WizardSpellSlotsCharacterLevel17);
WizardSpellSlotsMap.set(18, WizardSpellSlotsCharacterLevel18);
WizardSpellSlotsMap.set(19, WizardSpellSlotsCharacterLevel19);
WizardSpellSlotsMap.set(20, WizardSpellSlotsCharacterLevel20);

export function WizardCantripsKnownPerLevel(level: number): number {
  switch (true) {
    case level < 4:
      return 3;
    case level < 9:
      return 4;
    default:
      return 5;
  }
}
