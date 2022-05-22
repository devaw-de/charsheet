import {CharacterClassName} from './characterClasses';
import {CantripSpellList} from './spells/spell.list.level.0';
import {Level1SpellList} from './spells/spell.list.level.1';
import {Level2SpellList} from './spells/spell.list.level.2';
import {Level3SpellList} from './spells/spell.list.level.3';
import {Level4SpellList} from './spells/spell.list.level.4';
import {Level5SpellList} from './spells/spell.list.level.5';
import {Level6SpellList} from './spells/spell.list.level.6';
import {Level7SpellList} from './spells/spell.list.level.7';
import {Level8SpellList} from './spells/spell.list.level.8';
import {Level9SpellList} from './spells/spell.list.level.9';
import {SpellNames} from './spells/spell.names';

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

export interface Spell {
  name: SpellNames;
  level: number;
  school: SpellSchool;
  ritual: boolean;
  concentration: boolean;
  availableTo: Array<CharacterClassName>;
}

export const spellList: Array<Spell> = [
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
