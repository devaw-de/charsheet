import {CharacterClassSpellSlotsPerLevel} from '../spells';

const DruidSpellSlotsCharacterLevel1: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 2
};
const DruidSpellSlotsCharacterLevel2: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 3
};
const DruidSpellSlotsCharacterLevel3: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 4,
  spellLevel2: 2
};
const DruidSpellSlotsCharacterLevel4: CharacterClassSpellSlotsPerLevel = {
  spellLevel1: 4,
  spellLevel2: 3
};
const DruidSpellSlotsCharacterLevel5: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel4,
  spellLevel3: 2
};
const DruidSpellSlotsCharacterLevel6: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel4,
  spellLevel3: 3
};
const DruidSpellSlotsCharacterLevel7: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel6,
  spellLevel4: 1
};
const DruidSpellSlotsCharacterLevel8: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel4,
  spellLevel4: 2
};
const DruidSpellSlotsCharacterLevel9: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel8,
  spellLevel4: 3,
  spellLevel5: 1
};
const DruidSpellSlotsCharacterLevel10: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel9,
  spellLevel5: 2
};
const DruidSpellSlotsCharacterLevel11: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel10
};
const DruidSpellSlotsCharacterLevel12: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel10,
  spellLevel6: 1
};
const DruidSpellSlotsCharacterLevel13: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel12,
  spellLevel7: 1
};
const DruidSpellSlotsCharacterLevel14: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel13
};
const DruidSpellSlotsCharacterLevel15: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel14,
  spellLevel8: 1
};
const DruidSpellSlotsCharacterLevel16: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel15
};
const DruidSpellSlotsCharacterLevel17: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel15,
  spellLevel9: 1
};
const DruidSpellSlotsCharacterLevel18: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel17,
  spellLevel5: 3
};
const DruidSpellSlotsCharacterLevel19: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel18,
  spellLevel6: 2
};
const DruidSpellSlotsCharacterLevel20: CharacterClassSpellSlotsPerLevel = {
  ...DruidSpellSlotsCharacterLevel19,
  spellLevel7: 2
};
export const DruidSpellSlotsMap = new Map<number, CharacterClassSpellSlotsPerLevel>();
DruidSpellSlotsMap.set(1, DruidSpellSlotsCharacterLevel1);
DruidSpellSlotsMap.set(2, DruidSpellSlotsCharacterLevel2);
DruidSpellSlotsMap.set(3, DruidSpellSlotsCharacterLevel3);
DruidSpellSlotsMap.set(4, DruidSpellSlotsCharacterLevel4);
DruidSpellSlotsMap.set(5, DruidSpellSlotsCharacterLevel5);
DruidSpellSlotsMap.set(6, DruidSpellSlotsCharacterLevel6);
DruidSpellSlotsMap.set(7, DruidSpellSlotsCharacterLevel7);
DruidSpellSlotsMap.set(8, DruidSpellSlotsCharacterLevel8);
DruidSpellSlotsMap.set(9, DruidSpellSlotsCharacterLevel9);
DruidSpellSlotsMap.set(10, DruidSpellSlotsCharacterLevel10);
DruidSpellSlotsMap.set(11, DruidSpellSlotsCharacterLevel11);
DruidSpellSlotsMap.set(12, DruidSpellSlotsCharacterLevel12);
DruidSpellSlotsMap.set(13, DruidSpellSlotsCharacterLevel13);
DruidSpellSlotsMap.set(14, DruidSpellSlotsCharacterLevel14);
DruidSpellSlotsMap.set(15, DruidSpellSlotsCharacterLevel15);
DruidSpellSlotsMap.set(16, DruidSpellSlotsCharacterLevel16);
DruidSpellSlotsMap.set(17, DruidSpellSlotsCharacterLevel17);
DruidSpellSlotsMap.set(18, DruidSpellSlotsCharacterLevel18);
DruidSpellSlotsMap.set(19, DruidSpellSlotsCharacterLevel19);
DruidSpellSlotsMap.set(20, DruidSpellSlotsCharacterLevel20);

export function DruidCantripsKnownPerLevel(level: number): number {
  switch (true) {
    case level < 4:
      return 2;
    case level < 10:
      return 3;
    default:
      return 4;
  }
}
