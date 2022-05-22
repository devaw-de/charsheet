import {Spell, SpellSchool} from '@app/models';

export enum Level7SpellNames {
  CONJURE_CELESTIAL = 'Conjure Celestial',
  DELAYED_BLAST_FIREBALL = 'Delayed Blast Fireball',
  DIVINE_WORD = 'Divine Word',
  ETHEREALNESS = 'Etherealness',
  FINGER_OF_DEATH = 'Finger of Death',
  FIRE_STORM = 'Fire Storm',
  FORCECAGE = 'Forcecage',
  MIRAGE_ARCANE = 'Mirage Arcane',
  MORDEKAINENS_MANSION = 'Mordenkainen\'s Magnificent Mansion',
  MORDEKAINENS_SWORD = 'Mordenkainen\'s Sword',
  PLANE_SHIFT = 'Plane Shift',
  PRISMATIC_SPRAY = 'Prismatic Spray',
  PROJECT_IMAGE = 'Project Image',
  REGENERATE = 'Regenerate',
  RESURRECTION = 'Resurrection',
  REVERSE_GRAVITY = 'Reverse Gravity',
  SEQUESTER = 'Sequester',
  SIMULACRUM = 'Simulacrum',
  SYMBOL = 'Symbol',
  TELEPORT = 'Teleport'
}

export const Level7SpellList: Array<Spell> = [
  {
    name:  Level7SpellNames.CONJURE_CELESTIAL,
    level: 7,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name:  Level7SpellNames.DELAYED_BLAST_FIREBALL,
    level: 7,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.DIVINE_WORD,
    level: 7,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.ETHEREALNESS,
    level: 7,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.FINGER_OF_DEATH,
    level: 7,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.FIRE_STORM,
    level: 7,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.FORCECAGE,
    level: 7,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.MIRAGE_ARCANE,
    level: 7,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.MORDEKAINENS_MANSION,
    level: 7,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.MORDEKAINENS_SWORD,
    level: 7,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name:  Level7SpellNames.PLANE_SHIFT,
    level: 7,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.PRISMATIC_SPRAY,
    level: 7,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.PROJECT_IMAGE,
    level: 7,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name:  Level7SpellNames.REGENERATE,
    level: 7,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.RESURRECTION,
    level: 7,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.REVERSE_GRAVITY,
    level: 7,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name:  Level7SpellNames.SEQUESTER,
    level: 7,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.SIMULACRUM,
    level: 7,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.SYMBOL,
    level: 7,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name:  Level7SpellNames.TELEPORT,
    level: 7,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  }
];
