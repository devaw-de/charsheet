import { NumberSymbol } from "@angular/common";

export const LevelLimits: Array<number> = [
  0, // Level 0
  0, // Level 1
  300, // Level 2
  900, // Level 3
  2700, // Level 4
  6500, // Level 5
  14000, // Level 6
  23000, // Level 7
  34000, // Level 8
  48000, // Level 9
  64000, // Level 10
  85000, // Level 11
  100000, // Level 12
  120000, // Level 13
  140000, // Level 14
  165000, // Level 15
  195000, // Level 16
  225000, // Level 17
  265000, // Level 18
  305000, // Level 19
  355000, // Level 20
];

export interface CharacterClassLevel {
  level: number,
  requiredXp: number,
  profBonus: number
}

export const CharacterClassLevelList: Array<CharacterClassLevel> = [
  {
    level: 1,
    requiredXp: LevelLimits[1],
    profBonus: 2
  },
  {
    level: 2,
    requiredXp: LevelLimits[2],
    profBonus: 2
  },
  {
    level: 3,
    requiredXp: LevelLimits[3],
    profBonus: 2
  },
  {
    level: 4,
    requiredXp: LevelLimits[4],
    profBonus: 2
  },
  {
    level: 5,
    requiredXp: LevelLimits[5],
    profBonus: 3
  },
  {
    level: 6,
    requiredXp: LevelLimits[6],
    profBonus: 3
  },
  {
    level: 7,
    requiredXp: LevelLimits[7],
    profBonus: 3
  },
  {
    level: 8,
    requiredXp: LevelLimits[8],
    profBonus: 3
  },
  {
    level: 9,
    requiredXp: LevelLimits[9],
    profBonus: 4
  },
  {
    level: 10,
    requiredXp: LevelLimits[10],
    profBonus: 4
  },
  {
    level: 11,
    requiredXp: LevelLimits[11],
    profBonus: 4
  },
  {
    level: 12,
    requiredXp: LevelLimits[12],
    profBonus: 4
  },
  {
    level: 13,
    requiredXp: LevelLimits[13],
    profBonus: 5
  },
  {
    level: 14,
    requiredXp: LevelLimits[14],
    profBonus: 5
  },
  {
    level: 15,
    requiredXp: LevelLimits[15],
    profBonus: 5
  },
  {
    level: 16,
    requiredXp: LevelLimits[16],
    profBonus: 5
  },
  {
    level: 17,
    requiredXp: LevelLimits[17],
    profBonus: 6
  },
  {
    level: 18,
    requiredXp: LevelLimits[14],
    profBonus: 6
  },
  {
    level: 19,
    requiredXp: LevelLimits[14],
    profBonus: 6
  },
  {
    level: 20,
    requiredXp: LevelLimits[20],
    profBonus: 6
  }
];
