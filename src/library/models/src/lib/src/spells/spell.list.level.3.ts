import {CharacterClassName, SpellSchool} from '@app/models';

export const Level3SpellList = [
  {
    name: 'Aura of Vitality',
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Blinding Smite',
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Create Food and Water',
    level: 3,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Crusader\'s Mantle',
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Daylight',
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Dispel Magic',
    level: 3,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Elemental Weapon',
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Magic Circle',
    level: 3,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Remove Curse',
    level: 3,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Revivify',
    level: 3,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },

];
