import {CharacterClassSpellSlotsPerLevel} from '@app/models';

const ClericSpellSlotsCharacterLevel1: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 2
};
const ClericSpellSlotsCharacterLevel2: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 3
};
const ClericSpellSlotsCharacterLevel3: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 4,
  spellLevel2: 2
};
const ClericSpellSlotsCharacterLevel4: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 4,
  spellLevel2: 3
};
const ClericSpellSlotsCharacterLevel5: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel4,
  spellLevel3: 2
};
const ClericSpellSlotsCharacterLevel6: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel4,
  spellLevel3: 3
};
const ClericSpellSlotsCharacterLevel7: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel6,
  spellLevel4: 1
};
const ClericSpellSlotsCharacterLevel8: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel6,
  spellLevel4: 2
};
const ClericSpellSlotsCharacterLevel9: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel6,
  spellLevel4: 3,
  spellLevel5: 1
};
const ClericSpellSlotsCharacterLevel10: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel9,
  spellLevel5: 2
};
const ClericSpellSlotsCharacterLevel11: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel10,
  spellLevel6: 1
};
const ClericSpellSlotsCharacterLevel12: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel11
};
const ClericSpellSlotsCharacterLevel13: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel11,
  spellLevel7: 1
};
const ClericSpellSlotsCharacterLevel14: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel13
};
const ClericSpellSlotsCharacterLevel15: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel13,
  spellLevel8: 1
};
const ClericSpellSlotsCharacterLevel16: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel15
};
const ClericSpellSlotsCharacterLevel17: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel15,
  spellLevel9: 1
};
const ClericSpellSlotsCharacterLevel18: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel17,
  spellLevel5: 3
};
const ClericSpellSlotsCharacterLevel19: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel17,
  spellLevel6: 2
};
const ClericSpellSlotsCharacterLevel20: CharacterClassSpellSlotsPerLevel = {
  ...ClericSpellSlotsCharacterLevel17,
  spellLevel7: 2
};

export const ClericSpellSlotsMap = new Map<number, CharacterClassSpellSlotsPerLevel>();
ClericSpellSlotsMap.set(1, ClericSpellSlotsCharacterLevel1);
ClericSpellSlotsMap.set(2, ClericSpellSlotsCharacterLevel2);
ClericSpellSlotsMap.set(3, ClericSpellSlotsCharacterLevel3);
ClericSpellSlotsMap.set(4, ClericSpellSlotsCharacterLevel4);
ClericSpellSlotsMap.set(5, ClericSpellSlotsCharacterLevel5);
ClericSpellSlotsMap.set(6, ClericSpellSlotsCharacterLevel6);
ClericSpellSlotsMap.set(7, ClericSpellSlotsCharacterLevel7);
ClericSpellSlotsMap.set(8, ClericSpellSlotsCharacterLevel8);
ClericSpellSlotsMap.set(9, ClericSpellSlotsCharacterLevel9);
ClericSpellSlotsMap.set(10, ClericSpellSlotsCharacterLevel10);
ClericSpellSlotsMap.set(11, ClericSpellSlotsCharacterLevel11);
ClericSpellSlotsMap.set(12, ClericSpellSlotsCharacterLevel12);
ClericSpellSlotsMap.set(13, ClericSpellSlotsCharacterLevel13);
ClericSpellSlotsMap.set(14, ClericSpellSlotsCharacterLevel14);
ClericSpellSlotsMap.set(15, ClericSpellSlotsCharacterLevel15);
ClericSpellSlotsMap.set(16, ClericSpellSlotsCharacterLevel16);
ClericSpellSlotsMap.set(17, ClericSpellSlotsCharacterLevel17);
ClericSpellSlotsMap.set(18, ClericSpellSlotsCharacterLevel18);
ClericSpellSlotsMap.set(19, ClericSpellSlotsCharacterLevel19);
ClericSpellSlotsMap.set(20, ClericSpellSlotsCharacterLevel20);

export function ClericCantripsKnownPerLevel(level: number): number {
  switch (true) {
    case level < 4:
      return 3;
    case level < 10:
      return 4;
    default:
      return 5;
  }
}
