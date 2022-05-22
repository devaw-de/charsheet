import {CharacterClassName, SpellSchool} from '@app/models';

export const Level4SpellList = [
  {
    name: 'Aura of Purity',
    level: 4,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Banishment',
    level: 4,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Death Ward',
    level: 4,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Find Greater Steed',
    level: 4,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Locate Creature',
    level: 4,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Staggering Smite',
    level: 4,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
];
