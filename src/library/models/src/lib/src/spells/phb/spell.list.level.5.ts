import {CharacterClassName, Spell, SpellSchool} from '@app/models';

export enum Level5SpellNames {
  CIRCLE_OF_POWER = 'Circle of Power',
  DESTRUCTIVE_WAVE = 'Destructive Wave',
  DISPEL_EVIL_AND_GOOD = 'Dispel Evil and Good',
  GEAS = 'Geas',
  HOLY_WEAPON = 'Holy Weapon',
  RAISE_DEAD = 'Raise Dead',
}

export const Level5SpellList: Array<Spell> = [
  {
    name: Level5SpellNames.CIRCLE_OF_POWER,
    level: 5,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level5SpellNames.DESTRUCTIVE_WAVE,
    level: 5,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level5SpellNames.DISPEL_EVIL_AND_GOOD,
    level: 5,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level5SpellNames.GEAS,
    level: 5,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level5SpellNames.HOLY_WEAPON,
    level: 5,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level5SpellNames.RAISE_DEAD,
    level: 5,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },

];
