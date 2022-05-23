import {CharacterClassName, Spell, SpellSchool} from '@app/models';

export enum Level4SpellNames {
  ARCANE_EYE = 'Arcane Eye',
  AURA_OF_LIFE = 'Aura of Life',
  AURA_OF_PURITY = 'Aura of Purity',
  BANISHMENT = 'Banishment',
  BLIGHT = 'Blight',
  CHARM_MONSTER = 'Charm Monster',
  COMPULSION = 'Compulsion',
  CONFUSION = 'Confusion',
  CONJURE_MINOR_ELEMENTALS = 'Conjure Minor Elementals',
  CONJURE_WOODLAND_BEINGS = 'Conjure Woodland Beings',
  CONTROL_WATER = 'Control Water',
  DEATH_WARD = 'Death Ward',
  DIMENSION_DOOR = 'Dimension Door',
  DIVINATION = 'Divination',
  DOMINATE_BEAST = 'Dominate Beast',
  ELEMENTAL_BANE = 'Elemental Bane',
  EVARDS_BLACK_TENTACLES = 'Evard\'s Black Tentacles',
  FABRICATE = 'Fabricate',
  FIND_GREATER_STEED = 'Find Greater Steed',
  FIRE_SHIELD = 'Fire Shield',
  FREEDOM_OF_MOVEMENT = 'Freedom of Movement',
  GIANT_INSECT = 'Giant Insect',
  GRASPING_VINE = 'Grasping Vine',
  GREATER_INVISIBILITY = 'Greater Invisibility',
  GUARDIAN_OF_FAITH = 'Guardian of Faith',
  GUARDIAN_OF_NATURE = 'Guardian of Nature',
  HALLUCINATORY_TERRAIN = 'Hallucinatory Terrain',
  ICE_STORM = 'Ice Storm',
  LEOMUNDS_SECRET_CHEST = 'Leomund\'s Secret Chest',
  LOCATE_CREATURE = 'Locate Creature',
  MORDEKAINENS_FAITHFUL_HOUND = 'Mordenkainen\'s Faithful Hound',
  MORDEKAINENS_PRIVATE_SANCTUM = 'Mordenkainen\'s Private Sanctum',
  OTILUKES_RESILIENT_SPHERE = 'Otiluke\'s Resilient Sphere',
  PHANTASMAL_KILLER = 'Phantasmal Killer',
  POLYMORPH = 'Polymorph',
  SHADOW_OF_MOIL = 'Shadow of Moil',
  SICKENING_RADIANCE = 'Sickening Radiance',
  STAGGERING_SMITE = 'Staggering Smite',
  STONE_SHAPE = 'Stone Shape',
  STONESKIN = 'Stoneskin',
  STORM_SPHERE = 'Storm Sphere',
  SUMMON_GREATER_DEMON = 'Summon Greater Demon',
  VITRIOLIC_SPHERE = 'Vitriolic Sphere',
  WALL_OF_FIRE = 'Wall of Fire',
  WATERY_SPHERE = 'Watery Sphere'

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
  {
    name: Level4SpellNames.ARCANE_EYE,
    level: 4,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.BLIGHT,
    level: 4,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level4SpellNames.CHARM_MONSTER,
    level: 4,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level4SpellNames.COMPULSION,
    level: 4,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.CONFUSION,
    level: 4,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.CONJURE_MINOR_ELEMENTALS,
    level: 4,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.CONJURE_WOODLAND_BEINGS,
    level: 4,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.CONTROL_WATER,
    level: 4,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.DIMENSION_DOOR,
    level: 4,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.DIVINATION,
    level: 4,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.DOMINATE_BEAST,
    level: 4,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.ELEMENTAL_BANE,
    level: 4,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.EVARDS_BLACK_TENTACLES,
    level: 4,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.FABRICATE,
    level: 4,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level4SpellNames.FIRE_SHIELD,
    level: 4,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level4SpellNames.FREEDOM_OF_MOVEMENT,
    level: 4,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level4SpellNames.GIANT_INSECT,
    level: 4,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.GRASPING_VINE,
    level: 4,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.GREATER_INVISIBILITY,
    level: 4,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.GUARDIAN_OF_FAITH,
    level: 4,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level4SpellNames.GUARDIAN_OF_NATURE,
    level: 4,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.HALLUCINATORY_TERRAIN,
    level: 4,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level4SpellNames.ICE_STORM,
    level: 4,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level4SpellNames.LEOMUNDS_SECRET_CHEST,
    level: 4,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level4SpellNames.MORDEKAINENS_FAITHFUL_HOUND,
    level: 4,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level4SpellNames.MORDEKAINENS_PRIVATE_SANCTUM,
    level: 4,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level4SpellNames.OTILUKES_RESILIENT_SPHERE,
    level: 4,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.PHANTASMAL_KILLER,
    level: 4,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.POLYMORPH,
    level: 4,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.SHADOW_OF_MOIL,
    level: 4,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.SICKENING_RADIANCE,
    level: 4,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.STONE_SHAPE,
    level: 4,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level4SpellNames.STONESKIN,
    level: 4,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.STORM_SPHERE,
    level: 4,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.SUMMON_GREATER_DEMON,
    level: 4,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.VITRIOLIC_SPHERE,
    level: 4,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level4SpellNames.WALL_OF_FIRE,
    level: 4,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level4SpellNames.WATERY_SPHERE,
    level: 4,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  }
];
