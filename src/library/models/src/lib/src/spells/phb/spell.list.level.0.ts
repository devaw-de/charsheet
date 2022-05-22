import {CharacterClassName, Spell, SpellSchool} from '@app/models';

export enum CantripSpellNames {
  AURA_OF_LIFE = 'Aura of Life',
}

export const CantripSpellList: Array<Spell> = [
  {
    name: 'Aura of Life',
    level: 0,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
];
