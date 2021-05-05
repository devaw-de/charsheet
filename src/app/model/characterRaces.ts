import { Skill } from "./abilities";
import { Language } from "./base";
import { Tool } from "./equipment";
import { CharacterFeats } from "./skills";

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
};

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
};

export interface CharacterSubraceDetails {
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
  feats?: Array<CharacterFeats>;
  speed?: number;
  pickableLanguages?: number;
  extraProficiencies?: {
    skill?: number;
    tools?: Tool;
  };
  pickableFeats?: number;
}

export const CharacterSubracesList: Array<CharacterSubraceDetails> = [
  {
    name: CharacterSubRaceName.HILL_DWARF,
    extendsRace: CharacterRace.DWARF,
    attributeBonus: { wis: 1 },
    feats: [CharacterFeats.DWARVEN_TOUGHNESS]
  },
  {
    name: CharacterSubRaceName.MOUNTAIN_DWARF,
    extendsRace: CharacterRace.DWARF,
    attributeBonus: { str: 2 },
    feats: [CharacterFeats.DWARVEN_ARMOR_TRAINING]
  },
  {
    name: CharacterSubRaceName.HIGH_ELF,
    extendsRace: CharacterRace.ELF,
    attributeBonus: { int: 1 },
    feats: [CharacterFeats.ELF_WEAPON_TRAINING, CharacterFeats.ELVEN_CANTRIP],
    pickableLanguages: 1
  },
  {
    name: CharacterSubRaceName.WOOD_ELF,
    extendsRace: CharacterRace.ELF,
    attributeBonus: { wis: 1 },
    feats: [CharacterFeats.ELF_WEAPON_TRAINING],
    speed: 35
  },
  {
    name: CharacterSubRaceName.DROW,
    extendsRace: CharacterRace.ELF,
    attributeBonus: { cha: 1 },
    feats: [CharacterFeats.DROW_WEAPON_TRAINING, CharacterFeats.SUPERIOR_DARKVISION, CharacterFeats.SUNLIGHT_SENSITIVITY]
  },
  {
    name: CharacterSubRaceName.LIGHTFOOT,
    extendsRace: CharacterRace.HALFLING,
    attributeBonus: { cha: 1 },
    feats: [CharacterFeats.NATURALLY_STEALTHY]
  },
  {
    name: CharacterSubRaceName.STOUT,
    extendsRace: CharacterRace.HALFLING,
    attributeBonus: { con: 1 },
    feats: [CharacterFeats.STOUT_RESILIENCE]
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
    feats: [CharacterFeats.SPEAK_WITH_SMALL_BEASTS, CharacterFeats.NATURAL_ILLUSIONIST]
  },
  {
    name: CharacterSubRaceName.ROCK_GNOME,
    extendsRace: CharacterRace.GNOME,
    attributeBonus: { con: 1 },
    feats: [CharacterFeats.ARTIFICERS_LORE, CharacterFeats.TINKER],
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
  feats?: Array<CharacterFeats>;
  subrace?: boolean; // TODO: change this to the list of matching subraces
  proficiencies?: {
    skills?: Array<Skill>,
    tools?: Array<string>,
    weapons?: Array<string>
  }
};

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
      CharacterFeats.BREATH_WEAPON,
      CharacterFeats.DRACONIC_ANCESTRY,
      CharacterFeats.DAMAGE_RESISTANCE_DRACONIC,
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
        CharacterFeats.DARKVISION,
        CharacterFeats.DWARVEN_RESILIENCE,
        CharacterFeats.STONECUNNING
      ],
      proficiencies: {
        tools: ['Smiths tools'],
        weapons: ['Battleaxe', 'Handaxe', 'Throwing hammer', 'Warhammer']
      },
      speed: 25,
      subrace: true
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
      CharacterFeats.DARKVISION,
      CharacterFeats.KEEN_SENSES,
    ],
    proficiencies: {
      skills: [Skill.PERCEPTION]
    },
    subrace: true
  },
  {
    // ------- GNOME -------
    name: CharacterRace.GNOME,
    attributeBonus: {
      int: 2
    },
    languages: [Language.GNOMISH, Language.COMMON],
    feats: [CharacterFeats.GNOME_CUNNING],
    speed: 25,
    subrace: true
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
      CharacterFeats.BRAVE,
      CharacterFeats.HALFLING_NIMBLENESS,
      CharacterFeats.LUCKY
    ],
    subrace: true
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
      CharacterFeats.DARKVISION,
      CharacterFeats.FEY_ANCESTRY,
      CharacterFeats.SKILL_VERSATILIY
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
      CharacterFeats.DARKVISION,
      CharacterFeats.MENACING,
      CharacterFeats.RELENTLESS_ENDURANCE,
      CharacterFeats.SAVAGE_ATTACKS
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
      CharacterFeats.DARKVISION,
      CharacterFeats.HELLISH_RESISTANCE,
      CharacterFeats.INFERNAL_LEGACY
    ],
    speed: 30
  }
];