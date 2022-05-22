import {Spell, SpellSchool} from '@app/models';

export enum Level6SpellNames {
  ARCANE_GATE = 'Arcane Gate',
  BLADE_BARRIER = 'Blade Barrier',
  CHAIN_LIGHTNING = 'Chain Lightning',
  CIRCLE_OF_DEATH = 'Circle of Death',
  CONJURE_FEY = 'Conjure Fey',
  CONTINGENCY = 'Contingency',
  CREATE_UNDEAD = 'Create Undead',
  DISINTEGRATE = 'Disintegrate',
  DRAWMIJS_INSTANT_SUMMONS = 'Drawmij\'s Instant Summons',
  EYEBITE = 'Eyebite',
  FIND_THE_PATH = 'Find the Path',
  FLESH_TO_STONE = 'Flesh to Stone',
  FORBIDDANCE = 'Forbiddance',
  GLOBE_OF_INVULNERABILITY = 'Globe of Invulnerability',
  GUARDS_AND_WARDS = 'Guards and Wards',
  HARM = 'Harm',
  HEAL = 'Heal',
  HEROES_FEAST = 'Heroes\' Feast',
  MAGIC_JAR = 'Magic Jar',
  MASS_SUGGESTION = 'Mass Suggestion',
  MOVE_EARTH = 'Move Earth',
  OTILUKES_FREEZING_SPHERE = 'Otiluke\'s Freezing Sphere',
  OTTOS_IRRESISTIBLE_DANCE = 'Otto\'s Irresistible Dance',
  PLANAR_ALLY = 'Planar Ally',
  PROGRAMMED_ILLUSION = 'Programmed Illusion',
  SUNBEAM = 'Sunbeam',
  TRANSPORT_VIA_PLANTS = 'Transport via Plants',
  TRUE_SEEING = 'True Seeing',
  WALL_OF_ICE = 'Wall of Ice',
  WALL_OF_THORNS = 'Wall of Thorns',
  WIND_WALK = 'Wind Walk',
  WORD_OF_RECALL = 'Word of Recall'
}

export const Level6SpellList: Array<Spell> = [
  {
    name: Level6SpellNames.ARCANE_GATE,
    level: 6,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
 },
 {
    name: Level6SpellNames.BLADE_BARRIER,
    level: 6,
   school: SpellSchool.EVOCATION,
   ritual: false,
   concentration: true,
    availableTo: []
 },
 {
    name: Level6SpellNames.CHAIN_LIGHTNING,
    level: 6,
   school: SpellSchool.EVOCATION,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.CIRCLE_OF_DEATH,
    level: 6,
   school: SpellSchool.NECROMANCY,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.CONJURE_FEY,
    level: 6,
   school: SpellSchool.CONJURATION,
   ritual: false,
   concentration: true,
    availableTo: []
 },
 {
    name: Level6SpellNames.CONTINGENCY,
    level: 6,
   school: SpellSchool.EVOCATION,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.CREATE_UNDEAD,
    level: 6,
   school: SpellSchool.NECROMANCY,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.DISINTEGRATE,
    level: 6,
   school: SpellSchool.TRANSMUTATION,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.DRAWMIJS_INSTANT_SUMMONS,
    level: 6,
   school: SpellSchool.CONJURATION,
   ritual: true,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.EYEBITE,
    level: 6,
   school: SpellSchool.NECROMANCY,
   ritual: false,
   concentration: true,
    availableTo: []
 },
 {
    name: Level6SpellNames.FIND_THE_PATH,
    level: 6,
   school: SpellSchool.DIVINATION,
   ritual: false,
   concentration: true,
    availableTo: []
 },
 {
    name: Level6SpellNames.FLESH_TO_STONE,
    level: 6,
   school: SpellSchool.TRANSMUTATION,
   ritual: false,
   concentration: true,
    availableTo: []
 },
 {
    name: Level6SpellNames.FORBIDDANCE,
    level: 6,
   school: SpellSchool.ABJURATION,
   ritual: true,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.GLOBE_OF_INVULNERABILITY,
    level: 6,
   school: SpellSchool.ABJURATION,
   ritual: false,
   concentration: true,
    availableTo: []
 },
 {
    name: Level6SpellNames.GUARDS_AND_WARDS,
    level: 6,
   school: SpellSchool.ABJURATION,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.HARM,
    level: 6,
   school: SpellSchool.NECROMANCY,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.HEAL,
    level: 6,
   school: SpellSchool.EVOCATION,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.HEROES_FEAST,
    level: 6,
   school: SpellSchool.CONJURATION,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.MAGIC_JAR,
    level: 6,
   school: SpellSchool.NECROMANCY,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.MASS_SUGGESTION,
    level: 6,
   school: SpellSchool.ENCHANTMENT,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.MOVE_EARTH,
    level: 6,
   school: SpellSchool.TRANSMUTATION,
   ritual: false,
   concentration: true,
    availableTo: []
 },
 {
    name: Level6SpellNames.OTILUKES_FREEZING_SPHERE,
    level: 6,
   school: SpellSchool.EVOCATION,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.OTTOS_IRRESISTIBLE_DANCE,
    level: 6,
   school: SpellSchool.ENCHANTMENT,
   ritual: false,
   concentration: true,
    availableTo: []
 },
 {
    name: Level6SpellNames.PLANAR_ALLY,
    level: 6,
   school: SpellSchool.CONJURATION,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.PROGRAMMED_ILLUSION,
    level: 6,
   school: SpellSchool.ILLUSION,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.SUNBEAM,
    level: 6,
   school: SpellSchool.EVOCATION,
   ritual: false,
   concentration: true,
    availableTo: []
 },
 {
    name: Level6SpellNames.TRANSPORT_VIA_PLANTS,
    level: 6,
   school: SpellSchool.CONJURATION,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.TRUE_SEEING,
    level: 6,
   school: SpellSchool.DIVINATION,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.WALL_OF_ICE,
    level: 6,
   school: SpellSchool.EVOCATION,
   ritual: false,
   concentration: true,
    availableTo: []
 },
 {
    name: Level6SpellNames.WALL_OF_THORNS,
    level: 6,
   school: SpellSchool.CONJURATION,
   ritual: false,
   concentration: true,
    availableTo: []
 },
 {
    name: Level6SpellNames.WIND_WALK,
    level: 6,
   school: SpellSchool.TRANSMUTATION,
   ritual: false,
   concentration: false,
    availableTo: []
 },
 {
    name: Level6SpellNames.WORD_OF_RECALL,
    level: 6,
   school: SpellSchool.CONJURATION,
   ritual: false,
   concentration: false,
    availableTo: []
 }
];
