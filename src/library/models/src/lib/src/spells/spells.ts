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
} from './phb/spell-names';

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
