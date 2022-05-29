import {CharacterClassName} from '../characterClasses';
import {
  CantripSpellNames,
  Level1SpellNames,
  Level2SpellNames,
  Level3SpellNames,
  Level4SpellNames,
  Level5SpellNames,
  Level6SpellNames,
  Level7SpellNames,
  Level8SpellNames,
  Level9SpellNames
} from './phb-spells/spell-names';

export enum SpellSchool {
  ABJURATION = 'Abjuration',
  CONJURATION = 'Conjuration',
  DIVINATION = 'Divination',
  ENCHANTMENT = 'Enchantment',
  EVOCATION = 'Evocation',
  ILLUSION = 'Illusion',
  NECROMANCY = 'Necromancy',
  TRANSMUTATION = 'Transmutation'
}

export type SpellLevel =  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type SpellNames = CantripSpellNames
    | Level1SpellNames
    | Level2SpellNames
    | Level3SpellNames
    | Level4SpellNames
    | Level5SpellNames
    | Level6SpellNames
    | Level7SpellNames
    | Level8SpellNames
    | Level9SpellNames;

export interface Spell {
  name: SpellNames;
  level: SpellLevel;
  school: SpellSchool;
  ritual: boolean;
  concentration: boolean;
  availableTo: Array<CharacterClassName>;
}

export interface SpellSlotsPerLevel {
  max: number;
  current: number;
}

export type SpellSlots = {
  [key in SpellLevel]: SpellSlotsPerLevel;
};

export interface SpellBookPerLevel {
  learned: Array<Spell>;
  memorized: Array<Spell>;
}

export interface SpellBook {
  cantrips: SpellBookPerLevel;
  level1?: SpellBookPerLevel;
  level2?: SpellBookPerLevel;
  level3?: SpellBookPerLevel;
  level4?: SpellBookPerLevel;
  level5?: SpellBookPerLevel;
  level6?: SpellBookPerLevel;
  level7?: SpellBookPerLevel;
  level8?: SpellBookPerLevel;
  level9?: SpellBookPerLevel;
}

export interface CharacterClassSpellSlotsPerLevel {
  spellLevel1?: number;
  spellLevel2?: number;
  spellLevel3?: number;
  spellLevel4?: number;
  spellLevel5?: number;
  spellLevel6?: number;
  spellLevel7?: number;
  spellLevel8?: number;
  spellLevel9?: number;
}
