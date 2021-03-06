import {Spell, SpellSchool} from '../spells';
import {Level2SpellNames} from './spell-names';
import {CharacterClassName} from '@app/models';

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
  {
    name: Level2SpellNames.AGANAZZARS_SCORCHER,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.ALTER_SELF,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.ARCANE_LOCK,
    level: 2,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.AUGURY,
    level: 2,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.BARKSKIN,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.BEAST_SENSE,
    level: 2,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.BLINDNESS_DEAFNESS,
    level: 2,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.BLUR,
    level: 2,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.CALM_EMOTIONS,
    level: 2,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.CLOUD_OF_DAGGERS,
    level: 2,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.CONTINUAL_FLAME,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.CORDON_OF_ARROWS,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.CROWN_OF_MADNESS,
    level: 2,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.DARKNESS,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.DARKVISION,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.DETECT_THOUGHTS,
    level: 2,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.DRAGON_BREATH,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.DUST_DEVIL,
    level: 2,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.EARTHBIND,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.ENHANCE_ABILITY,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.ENLARGE_REDUCE,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.ENTHRALL,
    level: 2,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.FIND_TRAPS,
    level: 2,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.FLAME_BLADE,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.FLAMING_SPHERE,
    level: 2,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.GENTLE_REPOSE,
    level: 2,
    school: SpellSchool.NECROMANCY,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.GUST_OF_WIND,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.HEALING_SPIRIT,
    level: 2,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.HEAT_METAL,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.HOLD_PERSON,
    level: 2,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.INVISIBILITY,
    level: 2,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.KNOCK,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.LEVITATE,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.LOCATE_ANIMALS_OR_PLANTS,
    level: 2,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.MAGIC_MOUTH,
    level: 2,
    school: SpellSchool.ILLUSION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.MAXIMILIANS_EARTHEN_GRASP,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.MELFS_ACID_ARROW,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.MIND_SPIKE,
    level: 2,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.MIRROR_IMAGE,
    level: 2,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.MISTY_STEP,
    level: 2,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.MOONBEAM,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.NYSTULS_MAGIC_AURA,
    level: 2,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.PASS_WITHOUT_TRACE,
    level: 2,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.PHANTASMAL_FORCE,
    level: 2,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.PRAYER_OF_HEALING,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.PYROTECHNICS,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.RAY_OF_ENFEEBLEMENT,
    level: 2,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.ROPE_TRICK,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.SCORCHING_RAY,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.SEE_INVISIBILITY,
    level: 2,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.SHADOW_BLADE,
    level: 2,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.SHATTER,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.SILENCE,
    level: 2,
    school: SpellSchool.ILLUSION,
    ritual: true,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.SKYWRITE,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: true,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.SNILLOCS_SNOWBALL_SWARM,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.SPIDER_CLIMB,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.SPIKE_GROWTH,
    level: 2,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.SPIRITUAL_WEAPON,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.SUGGESTION,
    level: 2,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.WARDING_BOND,
    level: 2,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level2SpellNames.WARDING_WIND,
    level: 2,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level2SpellNames.WEB,
    level: 2,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  }
];
