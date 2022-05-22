import {CharacterClassName, SpellSchool} from '@app/models';

export enum Level3SpellNames {
  AURA_OF_VITALITY = 'Aura of Vitality',
  BLINDING_SMITE = 'Blinding Smite',
  CREATE_FOOD_AND_WATER = 'Create Food and Water',
  CRUSADERS_MANTLE = 'Crusader\'s Mantle',
  DAYLIGHT = 'Daylight',
  DISPEL_MAGIC = 'Dispel Magic',
  ELEMENTAL_WEAPON = 'Elemental Weapon',
  MAGIC_CIRCLE = 'Magic Circle',
  REMOVE_CURSE = 'Remove Curse',
  REVIVIFY = 'Revivify',
}

export const Level3SpellList = [
  {
    name: Level3SpellNames.AURA_OF_VITALITY,
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level3SpellNames.BLINDING_SMITE,
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level3SpellNames.CREATE_FOOD_AND_WATER,
    level: 3,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level3SpellNames.CRUSADERS_MANTLE,
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level3SpellNames.DAYLIGHT,
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level3SpellNames.DISPEL_MAGIC,
    level: 3,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level3SpellNames.ELEMENTAL_WEAPON,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level3SpellNames.MAGIC_CIRCLE,
    level: 3,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level3SpellNames.REMOVE_CURSE,
    level: 3,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level3SpellNames.REVIVIFY,
    level: 3,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },

];
