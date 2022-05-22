import {CharacterClassName} from '../characterClasses';
import {CantripSpellList, CantripSpellNames} from './phb/spell.list.level.0';
import {Level1SpellList, Level1SpellNames} from './phb/spell.list.level.1';
import {Level2SpellList, Level2SpellNames} from './phb/spell.list.level.2';
import {Level3SpellList, Level3SpellNames} from './phb/spell.list.level.3';
import {Level4SpellList, Level4SpellNames} from './phb/spell.list.level.4';
import {Level5SpellList, Level5SpellNames} from './phb/spell.list.level.5';
import {Level6SpellList, Level6SpellNames} from './phb/spell.list.level.6';
import {Level7SpellList, Level7SpellNames} from './phb/spell.list.level.7';
import {Level8SpellList, Level8SpellNames} from './phb/spell.list.level.8';
import {Level9SpellList, Level9SpellNames} from './phb/spell.list.level.9';


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

export const SpellList: Array<Spell> = [
  ...CantripSpellList,
  ...Level1SpellList,
  ...Level2SpellList,
  ...Level3SpellList,
  ...Level4SpellList,
  ...Level5SpellList,
  ...Level6SpellList,
  ...Level7SpellList,
  ...Level8SpellList,
  ...Level9SpellList
];
