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
  level: number;
  school: SpellSchool;
  ritual: boolean;
  concentration: boolean;
  availableTo: Array<CharacterClassName>;
}

export interface SpellSlotsPerLevel {
  max: number;
  current: number;
}

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
