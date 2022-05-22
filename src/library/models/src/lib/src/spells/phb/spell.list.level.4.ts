import {CharacterClassName, Spell, SpellSchool} from '@app/models';

export enum Level4SpellNames {
  AURA_OF_LIFE = 'Aura of Life',
  AURA_OF_PURITY = 'Aura of Purity',
  BANISHMENT = 'Banishment',
  DEATH_WARD = 'Death Ward',
  FIND_GREATER_STEED = 'Find Greater Steed',
  LOCATE_CREATURE = 'Locate Creature',
  STAGGERING_SMITE = 'Staggering Smite',
}

export const Level4SpellList: Array<Spell> = [
  {
    name: Level4SpellNames.AURA_OF_LIFE,
    level: 4,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level4SpellNames.AURA_OF_PURITY,
    level: 4,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level4SpellNames.BANISHMENT,
    level: 4,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level4SpellNames.DEATH_WARD,
    level: 4,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level4SpellNames.FIND_GREATER_STEED,
    level: 4,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level4SpellNames.LOCATE_CREATURE,
    level: 4,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level4SpellNames.STAGGERING_SMITE,
    level: 4,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
];
