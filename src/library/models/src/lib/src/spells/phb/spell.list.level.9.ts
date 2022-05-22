import {Spell, SpellSchool} from '@app/models';

export enum Level9SpellNames {
  ASTRAL_PROJECTION = 'Astral Projection',
  FORESIGHT = 'Foresight',
  GATE = 'Gate',
  IMPRISONMENT = 'Imprisonment',
  MASS_HEAL = 'Mass Heal',
  METEOR_SWARM = 'Meteor Swarm',
  POWER_WORD_HEAL = 'Power Word Heal',
  POWER_WORD_KILL = 'Power Word Kill',
  PRISMATIC_WALL = 'Prismatic Wall',
  SHAPECHANGE = 'Shapechange',
  STORM_OF_VENGEANCE = 'Storm of Vengeance',
  TIME_STOP = 'Time Stop',
  TRUE_POLYMORPH = 'True Polymorph',
  TRUE_RESURRECTION = 'True Resurrection',
  WEIRD = 'Weird',
  WISH = 'Wish'
}

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
