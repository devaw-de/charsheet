import {CharacterClassName, SpellSchool} from '@app/models';
import {SpellNames} from './spell.names';

export const Level2SpellList = [
  {
    name: SpellNames.AID,
    level: 2,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: SpellNames.ANIMAL_MESSENGER,
    level: 2,
    school: SpellSchool.ENCHANTMENT,
    ritual: true,
    concentration: false,
    availableTo: [CharacterClassName.RANGER]
  },
  {
    name: SpellNames.BRANDING_SMITE,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: SpellNames.FIND_STEED,
    level: 2,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: SpellNames.LESSER_RESTORATION,
    level: 2,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name:  SpellNames.LOCATE_OBJECT,
    level: 2,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: SpellNames.MAGIC_WEAPON,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: SpellNames.PROTECTION_FROM_POISON,
    level: 2,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: SpellNames.ZONE_OF_TRUTH,
    level: 2,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
];
