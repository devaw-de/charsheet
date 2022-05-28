import {CantripSpellList} from './spell.list.level.0';
import {Level1SpellList} from './spell.list.level.1';
import {Level2SpellList} from './spell.list.level.2';
import {Level3SpellList} from './spell.list.level.3';
import {Level4SpellList} from './spell.list.level.4';
import {Level5SpellList} from './spell.list.level.5';
import {Level6SpellList} from './spell.list.level.6';
import {Level7SpellList} from './spell.list.level.7';
import {Level8SpellList} from './spell.list.level.8';
import {Level9SpellList} from './spell.list.level.9';
import {Spell} from '../spells';

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
