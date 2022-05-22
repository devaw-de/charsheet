import {CharacterClassName, SpellSchool} from '@app/models';

export const Level5SpellList = [
  {
    name: 'Circle of Power',
    level: 5,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Destructive Wave',
    level: 5,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Dispel Evil and Good',
    level: 5,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Geas',
    level: 5,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Holy Weapon',
    level: 5,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Raise Dead',
    level: 5,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },

];
