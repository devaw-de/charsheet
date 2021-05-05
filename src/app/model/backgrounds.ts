import { Skill } from "./abilities";
import { Currency, Tool } from "./equipment";

export enum CharacterBackground {
  ACOLYTE = 'Acolyte',
  CHARLATAN = 'Charlatan',
  CRIMINAL = 'Criminal',
  ENTERTAINER = 'Entertainer',
  FOLK_HERO = 'Folk hero',
  GUILD_ARTISAN = 'Guild artisan',
  HERMIT = 'Hermit',
  NOBLE = 'Noble',
  OUTLANDER = 'Outlander',
  SAGE = 'Sage',
  SAILOR = 'Sailor',
  SOLDIER = 'Soldier',
  URCHIN = 'Urchin'
};

export interface CharacterBackgroundDetails {
  name: CharacterBackground;
  equipment?: Array<string>;
  proficiencies?: Array<Skill>;
  currency?: Currency;
  toolProficiencies?: Array<Tool>;
  instrumentProficiencies?: Array<string>;
  pickableLanguages?: number;
};

export const CharacterBackgroundsList: Array<CharacterBackgroundDetails> = [
  {
    name: CharacterBackground.ACOLYTE,
    proficiencies: [Skill.INSIGHT, Skill.RELIGION],
    equipment: ['Holy Symbol', 'Incense'],
    currency: {gold: 15}
  },
  {
    name: CharacterBackground.CHARLATAN,
    proficiencies: [Skill.SLEIGHT_OF_HAND, Skill.DECEPTION],
    toolProficiencies: [Tool.DISGUISE_KIT, Tool.FORGERY_KIT],
    equipment: ['Fine clothes', 'Disguise kit'],
    currency: {gold: 15}
  },
  {
    name: CharacterBackground.CRIMINAL,
    proficiencies: [Skill.DECEPTION, Skill.STEALTH],
    toolProficiencies: [Tool.THIEVES_TOOLS],
    equipment: ['Crowbar', 'Dark clothes with hood'],
    currency: {gold: 15}
  },
  {
    name: CharacterBackground.ENTERTAINER,
    proficiencies: [Skill.ACROBATICS, Skill.PERFORMANCE],
    toolProficiencies: [Tool.DISGUISE_KIT],
    instrumentProficiencies: ['Choose one'],
    equipment: ['Musical instrument', 'Costume'],
    currency: {gold: 15}
  },
  {
    name: CharacterBackground.FOLK_HERO,
    proficiencies: [Skill.ANIMAL_HANDLING, Skill.SURVIVAL],
    toolProficiencies: [Tool.ARTISAN_TOOLS],
    equipment: ['Artisan tools', 'Common clothes', 'Shovel', 'Iron pot'],
    currency: {gold: 10}
  },
  {
    name: CharacterBackground.GUILD_ARTISAN,
    proficiencies: [Skill.INSIGHT, Skill.PERSUASION],
    toolProficiencies: [Tool.ARTISAN_TOOLS],
    pickableLanguages: 1,
    equipment: ['Letter from your guild', 'Traveler clothes'],
    currency: {gold: 15}
  },
  {
    name: CharacterBackground.HERMIT,
    proficiencies: [Skill.MEDICINE, Skill.RELIGION],
    toolProficiencies: [Tool.HERBALISM_KIT],
    pickableLanguages: 1,
    equipment: ['Notebook', 'Winter blanket', 'Herbalism kit'],
    currency: {gold: 5}
  },
  {
    name: CharacterBackground.NOBLE,
    proficiencies: [Skill.HISTORY, Skill.PERSUASION],
    toolProficiencies: [Tool.GAMING_SET],
    pickableLanguages: 1,
    equipment: ['Gaming set', 'Fine clothes', 'Signet ring', 'Scroll of pedigree'],
    currency: {gold: 25}
  },
  {
    name: CharacterBackground.OUTLANDER,
    proficiencies: [Skill.ATHLETICS, Skill.SURVIVAL],
    instrumentProficiencies: ['Choose one'],
    pickableLanguages: 1,
    equipment: ['Staff', 'Hunting trap', 'Trophy from a killed animal', 'Travelers clothes'],
    currency: {gold: 10}
  },
  {
    name: CharacterBackground.SAGE,
    proficiencies: [Skill.ARCANA, Skill.HISTORY],
    pickableLanguages: 2,
    equipment: ['Ink and quill', 'small knife', 'Letter from a dead colleague', 'Common clothes'],
    currency: {gold: 10}
  },
  {
    name: CharacterBackground.SAILOR,
    proficiencies: [Skill.ATHLETICS, Skill.PERCEPTION],
    toolProficiencies: [Tool.VEHICLE_WATER, Tool.NAVIGATORS_TOOLS],
    equipment: ['Balying pin', 'Silk rope', 'Lucky charm', 'Common clothes'],
    currency: {gold: 10}
  },
  {
    name: CharacterBackground.SOLDIER,
    proficiencies: [Skill.ATHLETICS, Skill.INTIMIDATION],
    toolProficiencies: [Tool.GAMING_SET, Tool.VEHICLE_LAND ],
    equipment: ['Insignia of rank', 'Trophy from a fallen enemy', 'Gaming set', 'Common clothes'],
    currency: {gold: 10}
  },
  {
    name: CharacterBackground.URCHIN,
    proficiencies: [Skill.SLEIGHT_OF_HAND, Skill.STEALTH],
    toolProficiencies: [Tool.DISGUISE_KIT, Tool.THIEVES_TOOLS],
    equipment: ['Small knife', 'City map', 'Pet mouse', 'Token from your parents', 'Common clothes'],
    currency: {gold: 10}
  }
];