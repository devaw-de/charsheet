import {Spell, SpellSchool} from '../spells';
import {Level8SpellNames} from './spell-names';
import {CharacterClassName} from '@app/models';

export const Level8SpellList: Array<Spell> = [
  {
    name: Level8SpellNames.ANIMAL_SHAPES,
    level: 8,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level8SpellNames.ANTIMAGIC_FIELD,
    level: 8,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level8SpellNames.ANTIPATHY_SYMPATHY,
    level: 8,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level8SpellNames.CLONE,
    level: 8,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level8SpellNames.CONTROL_WEATHER,
    level: 8,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level8SpellNames.DEMIPLANE,
    level: 8,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level8SpellNames.DOMINATE_MONSTER,
    level: 8,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level8SpellNames.EARTHQUAKE,
    level: 8,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level8SpellNames.FEEBLEMIND,
    level: 8,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level8SpellNames.GLIBNESS,
    level: 8,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level8SpellNames.HOLY_AURA,
    level: 8,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level8SpellNames.INCENDIARY_CLOUD,
    level: 8,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level8SpellNames.MAZE,
    level: 8,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level8SpellNames.MIND_BLANK,
    level: 8,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level8SpellNames.POWER_WORD_STUN,
    level: 8,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level8SpellNames.SUNBURST,
    level: 8,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level8SpellNames.TELEPATHY,
    level: 8,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level8SpellNames.TSUNAMI,
    level: 8,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  }
];
