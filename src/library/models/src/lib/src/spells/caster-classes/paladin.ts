import {CharacterClassSpellSlots, CharacterClassSpellSlotsPerLevel} from '@app/models';

export const PaladinSpellSlotsCharacterLevel1: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 0
};
export const PaladinSpellSlotsCharacterLevel2: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 2
};
export const PaladinSpellSlotsCharacterLevel3: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 3
};
export const PaladinSpellSlotsCharacterLevel4: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel3
};
export const PaladinSpellSlotsCharacterLevel5: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 4,
  spellLevel2: 2
};
export const PaladinSpellSlotsCharacterLevel6: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel5
};
export const PaladinSpellSlotsCharacterLevel7: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 4,
  spellLevel2: 3
};
export const PaladinSpellSlotsCharacterLevel8: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel7
};
export const PaladinSpellSlotsCharacterLevel9: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel7,
  spellLevel3: 2
};
export const PaladinSpellSlotsCharacterLevel10: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel9
};
export const PaladinSpellSlotsCharacterLevel11: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel9,
  spellLevel3: 3
};
export const PaladinSpellSlotsCharacterLevel12: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel11
};
export const PaladinSpellSlotsCharacterLevel13: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel11,
  spellLevel4: 1
};
export const PaladinSpellSlotsCharacterLevel14: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel13
};
export const PaladinSpellSlotsCharacterLevel15: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel13,
  spellLevel4: 2
};
export const PaladinSpellSlotsCharacterLevel16: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel15
};
export const PaladinSpellSlotsCharacterLevel17: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel15,
  spellLevel4: 3,
  spellLevel5: 1
};
export const PaladinSpellSlotsCharacterLevel18: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel17
};
export const PaladinSpellSlotsCharacterLevel19: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel17,
  spellLevel5: 2
};
export const PaladinSpellSlotsCharacterLevel20: CharacterClassSpellSlotsPerLevel = {
  ...PaladinSpellSlotsCharacterLevel19
};

export const PaladinSpellSlotsMap = new Map<number, CharacterClassSpellSlotsPerLevel>();
PaladinSpellSlotsMap.set(1, PaladinSpellSlotsCharacterLevel1);
PaladinSpellSlotsMap.set(2, PaladinSpellSlotsCharacterLevel2);
PaladinSpellSlotsMap.set(3, PaladinSpellSlotsCharacterLevel3);
PaladinSpellSlotsMap.set(4, PaladinSpellSlotsCharacterLevel4);
PaladinSpellSlotsMap.set(5, PaladinSpellSlotsCharacterLevel5);
PaladinSpellSlotsMap.set(6, PaladinSpellSlotsCharacterLevel6);
PaladinSpellSlotsMap.set(7, PaladinSpellSlotsCharacterLevel7);
PaladinSpellSlotsMap.set(8, PaladinSpellSlotsCharacterLevel8);
PaladinSpellSlotsMap.set(9, PaladinSpellSlotsCharacterLevel9);
PaladinSpellSlotsMap.set(10, PaladinSpellSlotsCharacterLevel10);
PaladinSpellSlotsMap.set(11, PaladinSpellSlotsCharacterLevel11);
PaladinSpellSlotsMap.set(12, PaladinSpellSlotsCharacterLevel12);
PaladinSpellSlotsMap.set(13, PaladinSpellSlotsCharacterLevel13);
PaladinSpellSlotsMap.set(14, PaladinSpellSlotsCharacterLevel14);
PaladinSpellSlotsMap.set(15, PaladinSpellSlotsCharacterLevel15);
PaladinSpellSlotsMap.set(16, PaladinSpellSlotsCharacterLevel16);
PaladinSpellSlotsMap.set(17, PaladinSpellSlotsCharacterLevel17);
PaladinSpellSlotsMap.set(18, PaladinSpellSlotsCharacterLevel18);
PaladinSpellSlotsMap.set(19, PaladinSpellSlotsCharacterLevel19);
PaladinSpellSlotsMap.set(20, PaladinSpellSlotsCharacterLevel20);
