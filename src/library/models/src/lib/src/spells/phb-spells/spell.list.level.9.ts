import {Spell, SpellSchool} from '../spells';
import {CharacterClassName} from '@app/models';
import {Level9SpellNames} from './spell-names';

export const Level9SpellList: Array<Spell> = [
  {
    name: Level9SpellNames.ASTRAL_PROJECTION,
    level: 9,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level9SpellNames.FORESIGHT,
    level: 9,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level9SpellNames.GATE,
    level: 9,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level9SpellNames.IMPRISONMENT,
    level: 9,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level9SpellNames.MASS_HEAL,
    level: 9,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level9SpellNames.METEOR_SWARM,
    level: 9,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level9SpellNames.POWER_WORD_HEAL,
    level: 9,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level9SpellNames.POWER_WORD_KILL,
    level: 9,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level9SpellNames.PRISMATIC_WALL,
    level: 9,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level9SpellNames.SHAPECHANGE,
    level: 9,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level9SpellNames.STORM_OF_VENGEANCE,
    level: 9,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level9SpellNames.TIME_STOP,
    level: 9,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level9SpellNames.TRUE_POLYMORPH,
    level: 9,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level9SpellNames.TRUE_RESURRECTION,
    level: 9,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level9SpellNames.WEIRD,
    level: 9,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level9SpellNames.WISH,
    level: 9,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  }
];
