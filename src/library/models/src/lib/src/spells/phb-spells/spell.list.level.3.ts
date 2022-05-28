import {Spell, SpellSchool} from '../spells';
import {Level3SpellNames} from './spell-names';
import {CharacterClassName} from '@app/models';

export const Level3SpellList: Array<Spell> = [
  {
    name: Level3SpellNames.AURA_OF_VITALITY,
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level3SpellNames.ANIMATE_DEAD,
    level: 3,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.BEACON_OF_HOPE,
    level: 3,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.BESTOW_CURSE,
    level: 3,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: true,
    availableTo: []
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
    name: Level3SpellNames.BLINK,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.CALL_LIGHTNING,
    level: 3,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.CATNAP,
    level: 3,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.CLAIRVOYANCE,
    level: 3,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.CONJURE_ANIMALS,
    level: 3,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.CONJURE_BARRAGE,
    level: 3,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.COUNTERSPELL,
    level: 3,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
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
    name: Level3SpellNames.ERUPTING_EARTH,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.ENEMIES_ABOUND,
    level: 3,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.FEAR,
    level: 3,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.FEIGN_DEATH,
    level: 3,
    school: SpellSchool.NECROMANCY,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.FIREBALL,
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.FLAME_ARROWS,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.FLY,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.GASEOUS_FORM,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.GLYPH_OF_WARDING,
    level: 3,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.HASTE,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.HUNGER_OF_HADAR,
    level: 3,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.HYPNOTIC_PATTERN,
    level: 3,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.LEOMUNDS_TINY_HUT,
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.LIFE_TRANSFERENCE,
    level: 3,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.LIGHTNING_ARROW,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.LIGHTNING_BOLT,
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
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
    name: Level3SpellNames.MAJOR_IMAGE,
    level: 3,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.MASS_HEALING_WORD,
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.MELD_INTO_STONE,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.MELFS_MINUTE_METEORS,
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.NONDETECTION,
    level: 3,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.PHANTOM_STEED,
    level: 3,
    school: SpellSchool.ILLUSION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.PLANT_GROWTH,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.PROTECTION_FROM_ENERGY,
    level: 3,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
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
  {
    name: Level3SpellNames.SENDING,
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.SLEET_STORM,
    level: 3,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.SLOW,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.SPEAK_WITH_DEAD,
    level: 3,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.SPEAK_WITH_PLANTS,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.SPIRIT_GUARDIANS,
    level: 3,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.STINKING_CLOUD,
    level: 3,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.SUMMON_LESSER_DEMONS,
    level: 3,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.THUNDER_STEP,
    level: 3,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.TIDAL_WAVE,
    level: 3,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.TINY_SERVANT,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.TONGUES,
    level: 3,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.VAMPIRIC_TOUCH,
    level: 3,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.WALL_OF_SAND,
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.WALL_OF_WATER,
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level3SpellNames.WATER_BREATHING,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.WATER_WALK,
    level: 3,
    school: SpellSchool.TRANSMUTATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level3SpellNames.WIND_WALL,
    level: 3,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  }
];
