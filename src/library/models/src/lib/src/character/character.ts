import {SkillName} from './abilities';
import {CharacterBackground} from './backgrounds';
import {CharacterClassName} from './characterClasses';
import {CharacterRace, CharacterSubRaceName} from './characterRaces';
import {ArmorType, Currency, Tool} from './equipment';
import {Ammunition, Weapon, WeaponType} from './weapons';
import {Language} from './language';
import {Alignment} from './alignments';
import {SpellBook} from '../spells/spells';

export enum CharacterSpecialization {
  NONE = 'NONE'
}

export interface CharacterVitals {
  age?: number;
  height?: number;
  weight?: number;
  eyes?: string;
  skin?: string;
  hair?: string;
}

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
}

export interface OptionalCharacterAttributes {
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
}

export interface PointBuyDTO {
  attributes: CharacterAttributes;
  racialBonus: OptionalCharacterAttributes;
}

export interface Equipment {
  equipped?: Array<string>;
  backpack?: Array<string>;
}

export interface Proficiencies {
  proficiencyBonus: number;
  armor?: Array<ArmorType>;
  weapons?: Array<WeaponType>;
  languages: Array<Language>;
  skills: Array<SkillName>;
  expertise?: Array<SkillName>;
  tools?: Array<Tool>;
  instruments?: Array<string>;
}

export interface DeathSavingThrowState {
  successCount: number;
  failureCount: number;
}

export interface PlayerCharacterData {
  ac: number;
  alignment: Alignment;
  ammunition: Array<Ammunition>;
  attributes: CharacterAttributes;
  background: CharacterBackground;
  className: CharacterClassName;
  currency: Currency;
  deathSavingThrows?: DeathSavingThrowState;
  equipment: Equipment;
  history?: string;
  hitDice: number;
  hitPoints: HitPoints;
  level: number;
  movementSpeedInFeet: number;
  name: string;
  notes?: Array<string>;
  playerName: string;
  proficiencies: Proficiencies;
  race: CharacterRace;
  appliedRacialBonuses: OptionalCharacterAttributes;
  shield: boolean;
  specialization: CharacterSpecialization;
  subRace: CharacterSubRaceName;
  vitals: CharacterVitals;
  weapons: Array<Weapon>;
  xp: number;
  spellSlots?: Map<number, number>;
  spellBook?: SpellBook;
}

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

export const ZeroHitPoints: HitPoints = {
  current: 0,
  max: 0,
  temp: 0
};

export const InitialSavingTrowState: DeathSavingThrowState = {
  successCount: 0,
  failureCount: 0
};

export const DefaultCharacterVitals: CharacterVitals = {
  age: 100,
  height: 150,
  weight: 220,
  eyes: 'amber',
  skin: 'pale',
  hair: 'dark brown'
};

export const DefaultCharacterAttributes: CharacterAttributes = {
  str: 14,
  dex: 14,
  con: 10,
  int: 8,
  wis: 15,
  cha: 12
};

export const DefaultCharacter: PlayerCharacterData = {
  playerName: 'Char Sheet Player',
  name: 'Char Sheet Character',
  vitals: { ...DefaultCharacterVitals },
  attributes: { ...DefaultCharacterAttributes },
  appliedRacialBonuses: {
    con: 2,
    wis: 1,
  },
  xp: 200,
  level: 1,
  alignment: Alignment.CHAOTIC_EVIL,
  hitPoints: {current: 11, max: 11, temp: 0},
  className: CharacterClassName.BARBARIAN,
  background: CharacterBackground.HERMIT,
  ac: 10,
  movementSpeedInFeet: 25,
  hitDice: 1,
  proficiencies: {
    proficiencyBonus: 2,
    armor: [ArmorType.LIGHT_ARMOR, ArmorType.MEDIUM_ARMOR, ArmorType.SHIELDS],
    weapons: [WeaponType.SIMPLE, WeaponType.MARTIAL],
    skills: [SkillName.INTIMIDATION, SkillName.NATURE],
    languages: [Language.DWARVISH, Language.COMMON, Language.DEEP_SPEECH],
  },
  currency: {
    gold: 1,
    silver: 12,
    copper: 2
  },
  specialization: CharacterSpecialization.NONE,
  weapons: [Weapon.GREAT_AXE],
  shield: true,
  race: CharacterRace.DWARF,
  subRace: CharacterSubRaceName.HILL_DWARF,
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