import {SkillName} from './abilities';
import {Tool} from './equipment';
import {CharacterTraits} from './traits';
import {Language} from './language';
import {DWARVEN_WEAPON_PROFICIENCIES, ELVISH_WEAPON_PROFICIENCIES} from './weapons';

export enum CharacterRace {
  DRAGONBORN = 'Dragonborn',
  DWARF = 'Dwarf',
  ELF = 'Elf',
  GNOME = 'Gnome',
  HALF_ELF = 'Half-Elf',
  HALF_ORC = 'Half-Orc',
  HALFLING = 'Halfling',
  HUMAN = 'Human',
  TIEFLING = 'Tiefling'
}

export enum CharacterSubRaceName {
  HILL_DWARF = 'Hill Dwarf',
  MOUNTAIN_DWARF = 'Moutain Dwarf',
  WOOD_ELF = 'Woodelf',
  HIGH_ELF = 'High Elf',
  DROW = 'Drow',
  STOUT = 'Stout Halfling',
  LIGHTFOOT = 'Lightfoot Halfling',
  HUMAN = 'Human',
  VARIANT = 'Human (Variant)',
  FOREST_GNOME = 'Forest gnome',
  ROCK_GNOME = 'Rock gnome'
}

export interface CharacterSubRaceDetails {
  name: CharacterSubRaceName;
  extendsRace: CharacterRace;
  attributeBonus?: {
    pickable?: number;
    str?: number;
    dex?: number;
    con?: number;
    int?: number;
    wis?: number;
    cha?: number;
  };
  feats?: Array<CharacterTraits>;
  speed?: number;
  pickableLanguages?: number;
  extraProficiencies?: {
    skill?: number;
    tools?: Tool;
  };
  pickableFeats?: number;
}

export const CharacterSubRacesList: Array<CharacterSubRaceDetails> = [
  {
    name: CharacterSubRaceName.HILL_DWARF,
    extendsRace: CharacterRace.DWARF,
    attributeBonus: { wis: 1 },
    feats: [CharacterTraits.DWARVEN_TOUGHNESS]
  },
  {
    name: CharacterSubRaceName.MOUNTAIN_DWARF,
    extendsRace: CharacterRace.DWARF,
    attributeBonus: { str: 2 },
    feats: [CharacterTraits.DWARVEN_ARMOR_TRAINING]
  },
  {
    name: CharacterSubRaceName.HIGH_ELF,
    extendsRace: CharacterRace.ELF,
    attributeBonus: { int: 1 },
    feats: [CharacterTraits.ELF_WEAPON_TRAINING, CharacterTraits.ELVEN_CANTRIP],
    pickableLanguages: 1
  },
  {
    name: CharacterSubRaceName.WOOD_ELF,
    extendsRace: CharacterRace.ELF,
    attributeBonus: { wis: 1 },
    feats: [CharacterTraits.ELF_WEAPON_TRAINING],
    speed: 35
  },
  {
    name: CharacterSubRaceName.DROW,
    extendsRace: CharacterRace.ELF,
    attributeBonus: { cha: 1 },
    feats: [CharacterTraits.DROW_WEAPON_TRAINING, CharacterTraits.SUPERIOR_DARK_VISION, CharacterTraits.SUNLIGHT_SENSITIVITY]
  },
  {
    name: CharacterSubRaceName.LIGHTFOOT,
    extendsRace: CharacterRace.HALFLING,
    attributeBonus: { cha: 1 },
    feats: [CharacterTraits.NATURALLY_STEALTHY]
  },
  {
    name: CharacterSubRaceName.STOUT,
    extendsRace: CharacterRace.HALFLING,
    attributeBonus: { con: 1 },
    feats: [CharacterTraits.STOUT_RESILIENCE]
  },
  {
    name: CharacterSubRaceName.HUMAN,
    extendsRace: CharacterRace.HUMAN,
    attributeBonus: {
      str: 1,
      dex: 1,
      con: 1,
      int: 1,
      wis: 1,
      cha: 1
    },
  },
  {
    name: CharacterSubRaceName.VARIANT,
    extendsRace: CharacterRace.HUMAN,
    attributeBonus: { pickable: 2 },
    extraProficiencies: { skill: 1 },
    pickableFeats: 1
  },
  {
    name: CharacterSubRaceName.FOREST_GNOME,
    extendsRace: CharacterRace.GNOME,
    attributeBonus: { dex: 1 },
    feats: [CharacterTraits.SPEAK_WITH_SMALL_BEASTS, CharacterTraits.NATURAL_ILLUSIONIST]
  },
  {
    name: CharacterSubRaceName.ROCK_GNOME,
    extendsRace: CharacterRace.GNOME,
    attributeBonus: { con: 1 },
    feats: [CharacterTraits.ARTIFICERS_LORE, CharacterTraits.TINKER],
    extraProficiencies: { tools: Tool.ARTISAN_TOOLS }
  }
];

export interface CharacterRaceDetails {
  name: CharacterRace;
  attributeBonus: {
    pickable?: number;
    str?: number;
    dex?: number;
    con?: number;
    int?: number;
    wis?: number;
    cha?: number;
  };
  languages: Array<Language>;
  pickableLanguages?: number;
  speed: number;
  feats?: Array<CharacterTraits>;
  subRace?: boolean; // TODO: change this to the list of matching subraces
  proficiencies?: {
    skills?: Array<SkillName>,
    tools?: Array<string>,
    weapons?: Array<string>
  };
}

export const CharacterRacesList: Array<CharacterRaceDetails> = [
  {
    // ------- DRAGONBORN -------
    name: CharacterRace.DRAGONBORN,
    attributeBonus: {
      str: 2,
      cha: 1,
    },
    languages: [Language.DRACONIC, Language.COMMON],
    feats: [
      CharacterTraits.BREATH_WEAPON,
      CharacterTraits.DRACONIC_ANCESTRY,
      CharacterTraits.DAMAGE_RESISTANCE_DRACONIC,
    ],
    speed: 30
  },
    {
      // ------- DWARF -------
      name: CharacterRace.DWARF,
      attributeBonus: {
        con: 2
      },
      languages: [Language.DWARVISH, Language.COMMON],
      feats: [
        CharacterTraits.DARK_VISION,
        CharacterTraits.DWARVEN_RESILIENCE,
        CharacterTraits.STONE_CUNNING
      ],
      proficiencies: {
        tools: ['Smiths tools'],
        weapons: DWARVEN_WEAPON_PROFICIENCIES
      },
      speed: 25,
      subRace: true
    },

   {
    // ------- ELF -------
   name: CharacterRace.ELF,
    attributeBonus: {
      dex: 2
    },
    languages: [Language.ELVISH, Language.COMMON],
    speed: 30,
    feats: [
      CharacterTraits.DARK_VISION,
      CharacterTraits.KEEN_SENSES,
    ],
    proficiencies: {
      skills: [SkillName.PERCEPTION],
      weapons: ELVISH_WEAPON_PROFICIENCIES
    },
    subRace: true
  },
  {
    // ------- GNOME -------
    name: CharacterRace.GNOME,
    attributeBonus: {
      int: 2
    },
    languages: [Language.GNOMISH, Language.COMMON],
    feats: [CharacterTraits.GNOME_CUNNING],
    speed: 25,
    subRace: true
  },
  {
    // ------- HALFLING -------
    name: CharacterRace.HALFLING,
    attributeBonus: {
      dex: 2
    },
    languages: [Language.COMMON],
    speed: 25,
    feats: [
      CharacterTraits.BRAVE,
      CharacterTraits.HALFLING_NIMBLENESS,
      CharacterTraits.LUCKY
    ],
    subRace: true
  },
  {
    // ------- HALF-ELF -------
    name: CharacterRace.HALF_ELF,
    attributeBonus: {
      pickable: 2,
      cha: 2
    },
    languages: [Language.COMMON],
    pickableLanguages: 1,
    feats: [
      CharacterTraits.DARK_VISION,
      CharacterTraits.FEY_ANCESTRY,
      CharacterTraits.SKILL_VERSATILITY
    ],
    speed: 30,
  },
  {
    // ------- HALF-ORC -------
    name: CharacterRace.HALF_ORC,
    attributeBonus: {
      str: 2,
      con: 1
    },
    languages: [Language.COMMON, Language.ORCISH],
    feats: [
      CharacterTraits.DARK_VISION,
      CharacterTraits.MENACING,
      CharacterTraits.RELENTLESS_ENDURANCE,
      CharacterTraits.SAVAGE_ATTACKS
    ],
    speed: 30
  },
  {
    // ------- HUMAN -------
    name: CharacterRace.HUMAN,
    attributeBonus: {
      str: 1,
      dex: 1,
      con: 1,
      int: 1,
      wis: 1,
      cha: 1
    },
    languages: [Language.COMMON],
    pickableLanguages: 1,
    speed: 30
  },
  {
    name: CharacterRace.TIEFLING,
    attributeBonus: {
      int: 1,
      cha: 2
    },
    languages: [Language.INFERNAL, Language.COMMON],
    feats: [
      CharacterTraits.DARK_VISION,
      CharacterTraits.HELLISH_RESISTANCE,
      CharacterTraits.INFERNAL_LEGACY
    ],
    speed: 30
  }
];
