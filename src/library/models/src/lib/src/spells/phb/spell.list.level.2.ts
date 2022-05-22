import {CharacterClassName, Spell, SpellSchool} from '@app/models';

export enum Level2SpellNames {
  AID = 'Aid',
  ANIMAL_MESSENGER = 'Animal Messenger',
  BRANDING_SMITE = 'Branding Smite',
  FIND_STEED = 'Find Steed',
  LESSER_RESTORATION = 'Lesser Restoration',
  LOCATE_OBJECT = 'Locate Object',
  MAGIC_WEAPON = 'Magic Weapon',
  PROTECTION_FROM_POISON = 'Protection from Poison',
  ZONE_OF_TRUTH = 'Zone of Truth'
}

export const Level2SpellList: Array<Spell> = [
  {
    name: Level2SpellNames.AID,
    level: 2,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level2SpellNames.ANIMAL_MESSENGER,
    level: 2,
    school: SpellSchool.ENCHANTMENT,
    ritual: true,
    concentration: false,
    availableTo: [CharacterClassName.RANGER]
  },
  {
    name: Level2SpellNames.BRANDING_SMITE,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level2SpellNames.FIND_STEED,
    level: 2,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level2SpellNames.LESSER_RESTORATION,
    level: 2,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name:  Level2SpellNames.LOCATE_OBJECT,
    level: 2,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level2SpellNames.MAGIC_WEAPON,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level2SpellNames.PROTECTION_FROM_POISON,
    level: 2,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level2SpellNames.ZONE_OF_TRUTH,
    level: 2,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
];
