import { Skill } from "./abilities";
import { Attribute } from "./attributes";
import { CharacterBackground } from "./backgrounds";
import { Alignment, Dice, Language } from "./base";
import { CharacterClassName } from "./characterClasses";
import { CharacterRace, CharacterSubRaceName } from "./characterRaces";
import { Armor, ArmorType, Currency, Tool } from "./equipment";
import { Ammunition, Weapon, WeaponType } from "./weapons";

export enum CharacterSpecialization {
  NONE = 'NONE'
};

export interface CharacterVitals {
  age?: number;
  height?: number;
  weight?: number;
  eyes?: string;
  skin?: string;
  hair?: string;
};

export interface HitPoints {
  current: number;
  max: number;
  temp?: number;
  levelHistory?: Array<number>;
}

export interface CharacterAttributes {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
};

export interface Equipment {
  equipped?: Array<string>;
  backpack?: Array<string>;
};

export interface Profiencies {
  proficiencyBonus: number;
  armor?: Array<ArmorType>;
  weapons?: Array<WeaponType>;
  languages: Array<Language>;
  skills: Array<Skill>;
  expertise?: Array<Skill>;
  tools?: Array<Tool>;
  instruments?: Array<string>;
}

export interface PlayerCharacterData {
  ac: number;
  alignment: Alignment;
  ammunition: Array<Ammunition>;
  attributes: CharacterAttributes;
  background: CharacterBackground;
  class: CharacterClassName;
  currency: Currency;
  equipment: Equipment;
  hitDice: Array<Dice>;
  hitpoints: HitPoints;
  level: number;
  movementSpeed: number;
  name: string;
  notes?: Array<string>;
  playerName: string;
  proficiencies: Profiencies;
  race: CharacterRace;
  shield: boolean;
  specialization: CharacterSpecialization;
  subrace: CharacterSubRaceName;
  vitals: CharacterVitals;
  weapons: Array<Weapon>;
  xp: number;
};

export const StartingCharacterVitals = {
  age: 0,
  height: 0,
  weight: 0,
  eyes: '',
  skin: '',
  hair: ''
};

export const MinimumCharacterAttributes: CharacterAttributes = {
  str: 8,
  dex: 8,
  con: 8,
  int: 8,
  wis: 8,
  cha: 8
};

export const ZeroHitpoints: HitPoints = {
  current: 0,
  max: 0,
  temp: 0
};

export const StartingPlayerCharacter: PlayerCharacterData = {
  playerName: 'Player',
  name: 'Test Character',
  vitals: StartingCharacterVitals,
  attributes: MinimumCharacterAttributes,
  xp: 0,
  level: 1,
  alignment: Alignment.TRUE_NEUTRAL,
  hitpoints: ZeroHitpoints,
  class: CharacterClassName.RANGER,
  ac: 10,
  movementSpeed: 9,
  hitDice: [Dice.D6],
  proficiencies: {
    proficiencyBonus: 2,
    skills: [Skill.ACROBATICS, Skill.INSIGHT],
    expertise: [],
    tools: [Tool.SMITH_TOOLS],
    languages: [],
    instruments: ['Lute'],
  },
  currency: {},
  specialization: CharacterSpecialization.NONE,
  weapons: [Weapon.LONGSWORD],
  shield: false,
  race: undefined,
  subrace: undefined,
  background: undefined,
  ammunition: [],
  equipment: {
    equipped: [],
    backpack: []
  }
};

export const DefaultCharacter: PlayerCharacterData = {
  playerName: 'Char Sheet Player',
  name: 'Char Sheet Character',
  vitals: {
    age: 100,
    height: 150,
    weight: 220,
    eyes: 'amber',
    skin: 'pale',
    hair: 'dark brown'
  },
  attributes: {
    str: 14,
    dex: 14,
    con: 10,
    int: 8,
    wis: 15,
    cha: 12
  },
  xp: 200,
  level: 1,
  alignment: Alignment.CHAOTIC_EVIL,
  hitpoints: {current: 11, max: 11, temp: 0},
  class: CharacterClassName.BARBARIAN,
  background: CharacterBackground.HERMIT,
  ac: 10,
  movementSpeed: 7.5,
  hitDice: [Dice.D10],
  proficiencies: {
    proficiencyBonus: 2,
    armor: [ArmorType.LIGHT_ARMOR, ArmorType.MEDIUM_ARMOR, ArmorType.SHIELDS],
    weapons: [WeaponType.SIMPLE, WeaponType.MARTIAL],
    skills: [Skill.INTIMIDATION, Skill.NATURE],
    languages: [Language.DWARVISH, Language.COMMON, Language.DEEP_SPEECH],
  },
  currency: {
    gold: 1,
    silver: 12,
    copper: 2
  },
  specialization: CharacterSpecialization.NONE,
  weapons: [Weapon.GREATAXE],
  shield: true,
  race: CharacterRace.DWARF,
  subrace: CharacterSubRaceName.HILL_DWARF,
  ammunition: [Ammunition.DARTS, Ammunition.BOLTS, Ammunition.ARROWS],
  equipment: {
    backpack: ['Bedroll'],
    equipped: ['Copper ring']
  },
  notes: [
    'This is a test character. You can create your own with the Builder.',
    'Or you can edit this one. Start by clicking here to remove these pesky notes.',
    'Multiclassing is not available (yet?)',
  ]
};
