import {SkillName} from './abilities';
import {Clothes, Currency, Tool} from './equipment';

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
}

export interface CharacterBackgroundDetails {
  name: CharacterBackground;
  equipment?: Array<string>;
  proficiencies?: Array<SkillName>;
  currency?: Currency;
  toolProficiencies?: Array<Tool>;
  instrumentProficiencies?: Array<string>;
  pickableLanguages?: number;
}

export const CharacterBackgroundsList: Array<CharacterBackgroundDetails> = [
  {
    name: CharacterBackground.ACOLYTE,
    proficiencies: [SkillName.INSIGHT, SkillName.RELIGION],
    equipment: [Tool.HOLY_SYMBOL, Tool.INCENSE],
    currency: {gold: 15}
  },
  {
    name: CharacterBackground.CHARLATAN,
    proficiencies: [SkillName.SLEIGHT_OF_HAND, SkillName.DECEPTION],
    toolProficiencies: [Tool.DISGUISE_KIT, Tool.FORGERY_KIT],
    equipment: [Clothes.FINE_CLOTHES, Tool.DISGUISE_KIT],
    currency: {gold: 15}
  },
  {
    name: CharacterBackground.CRIMINAL,
    proficiencies: [SkillName.DECEPTION, SkillName.STEALTH],
    toolProficiencies: [Tool.THIEVES_TOOLS],
    equipment: [Tool.CROWBAR, Clothes.DARK_CLOTHES],
    currency: {gold: 15}
  },
  {
    name: CharacterBackground.ENTERTAINER,
    proficiencies: [SkillName.ACROBATICS, SkillName.PERFORMANCE],
    toolProficiencies: [Tool.DISGUISE_KIT],
    instrumentProficiencies: ['Choose one'],
    equipment: ['Musical instrument', Clothes.COSTUME],
    currency: {gold: 15}
  },
  {
    name: CharacterBackground.FOLK_HERO,
    proficiencies: [SkillName.ANIMAL_HANDLING, SkillName.SURVIVAL],
    toolProficiencies: [Tool.ARTISAN_TOOLS],
    equipment: [Tool.ARTISAN_TOOLS, Clothes.COMMON_CLOTHES, Tool.SHOVEL, Tool.IRON_POT],
    currency: {gold: 10}
  },
  {
    name: CharacterBackground.GUILD_ARTISAN,
    proficiencies: [SkillName.INSIGHT, SkillName.PERSUASION],
    toolProficiencies: [Tool.ARTISAN_TOOLS],
    pickableLanguages: 1,
    equipment: ['Letter from your guild', Clothes.TRAVELERS_CLOTHES],
    currency: {gold: 15}
  },
  {
    name: CharacterBackground.HERMIT,
    proficiencies: [SkillName.MEDICINE, SkillName.RELIGION],
    toolProficiencies: [Tool.HERBALISM_KIT],
    pickableLanguages: 1,
    equipment: ['Notebook', 'Winter blanket', Tool.HERBALISM_KIT],
    currency: {gold: 5}
  },
  {
    name: CharacterBackground.NOBLE,
    proficiencies: [SkillName.HISTORY, SkillName.PERSUASION],
    toolProficiencies: [Tool.GAMING_SET],
    pickableLanguages: 1,
    equipment: ['Gaming set', Clothes.FINE_CLOTHES, 'Signet ring', 'Scroll of pedigree'],
    currency: {gold: 25}
  },
  {
    name: CharacterBackground.OUTLANDER,
    proficiencies: [SkillName.ATHLETICS, SkillName.SURVIVAL],
    instrumentProficiencies: ['Choose one'],
    pickableLanguages: 1,
    equipment: ['Staff', 'Hunting trap', 'Trophy from a killed animal', Clothes.TRAVELERS_CLOTHES],
    currency: {gold: 10}
  },
  {
    name: CharacterBackground.SAGE,
    proficiencies: [SkillName.ARCANA, SkillName.HISTORY],
    pickableLanguages: 2,
    equipment: ['Ink and quill', 'small knife', 'Letter from a dead colleague', Clothes.COMMON_CLOTHES],
    currency: {gold: 10}
  },
  {
    name: CharacterBackground.SAILOR,
    proficiencies: [SkillName.ATHLETICS, SkillName.PERCEPTION],
    toolProficiencies: [Tool.VEHICLE_WATER, Tool.NAVIGATORS_TOOLS],
    equipment: ['Balying pin', Tool.ROPE_SILK, 'Lucky charm', Clothes.COMMON_CLOTHES],
    currency: {gold: 10}
  },
  {
    name: CharacterBackground.SOLDIER,
    proficiencies: [SkillName.ATHLETICS, SkillName.INTIMIDATION],
    toolProficiencies: [Tool.GAMING_SET, Tool.VEHICLE_LAND ],
    equipment: ['Insignia of rank', 'Trophy from a fallen enemy', 'Gaming set', Clothes.COMMON_CLOTHES],
    currency: {gold: 10}
  },
  {
    name: CharacterBackground.URCHIN,
    proficiencies: [SkillName.SLEIGHT_OF_HAND, SkillName.STEALTH],
    toolProficiencies: [Tool.DISGUISE_KIT, Tool.THIEVES_TOOLS],
    equipment: ['Small knife', 'City map', 'Pet mouse', 'Token from your parents', Clothes.COMMON_CLOTHES],
    currency: {gold: 10}
  }
];
