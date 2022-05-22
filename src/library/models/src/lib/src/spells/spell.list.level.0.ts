import {CharacterClassName, SpellSchool} from '@app/models';

export const CantripSpellList = [
  {
    name: 'Aura of Life',
    level: 0,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
];
