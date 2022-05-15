import {Attribute} from './attributes';
import {CharacterClassName} from './characterClasses';

export enum SkillName {
  ACROBATICS = 'Acrobatics',
  ANIMAL_HANDLING = 'Animal handling',
  ARCANA = 'Arcana',
  ATHLETICS = 'Athletics',
  DECEPTION = 'Deception',
  HISTORY = 'History',
  INSIGHT = 'Insight',
  INTIMIDATION = 'Intimidation',
  INVESTIGATION = 'Investigation',
  MEDICINE = 'Medicine',
  NATURE = 'Nature',
  PERCEPTION = 'Perception',
  PERFORMANCE = 'Performance',
  PERSUASION = 'Persuasion',
  RELIGION = 'Religion',
  SLEIGHT_OF_HAND = 'Sleight of hand',
  STEALTH = 'Stealth',
  SURVIVAL = 'Survival'
}

export interface CharacterSkill {
  name: SkillName;
  relatedAttribute: Attribute;
  canBeChosenByClass: Array<CharacterClassName>;
  proficient?: boolean;
  expertise?: boolean;
}

export const CharacterSkillList: Array<CharacterSkill> = [
  {
    name: SkillName.ACROBATICS,
    relatedAttribute: Attribute.DEX,
    canBeChosenByClass: [
      CharacterClassName.BARD,
      CharacterClassName.FIGHTER,
      CharacterClassName.MONK,
      CharacterClassName.ROGUE
    ]
  },
  {
    name: SkillName.ANIMAL_HANDLING,
    relatedAttribute: Attribute.WIS,
    canBeChosenByClass: [
      CharacterClassName.BARD,
      CharacterClassName.BARBARIAN,
      CharacterClassName.DRUID,
      CharacterClassName.FIGHTER,
      CharacterClassName.RANGER
    ]
  },
  {
    name: SkillName.ARCANA,
    relatedAttribute: Attribute.INT,
    canBeChosenByClass: [
      CharacterClassName.BARD,
      CharacterClassName.DRUID,
      CharacterClassName.SORCERER,
      CharacterClassName.WARLOCK,
      CharacterClassName.WIZARD
    ]
  },
  {
    name: SkillName.ATHLETICS,
    relatedAttribute: Attribute.STR,
    canBeChosenByClass: [
      CharacterClassName.BARBARIAN,
      CharacterClassName.BARD,
      CharacterClassName.FIGHTER,
      CharacterClassName.MONK,
      CharacterClassName.PALADIN,
      CharacterClassName.RANGER,
      CharacterClassName.ROGUE
    ]
  },
  {
    name: SkillName.DECEPTION,
    relatedAttribute: Attribute.CHA,
    canBeChosenByClass: [
      CharacterClassName.BARD,
      CharacterClassName.ROGUE,
      CharacterClassName.SORCERER,
      CharacterClassName.WARLOCK,
    ]
  },
  {
    name: SkillName.HISTORY,
    relatedAttribute: Attribute.INT,
    canBeChosenByClass: [
      CharacterClassName.BARD,
      CharacterClassName.CLERIC,
      CharacterClassName.FIGHTER,
      CharacterClassName.MONK,
      CharacterClassName.WARLOCK,
      CharacterClassName.WIZARD
    ]
  },
  {
    name: SkillName.INSIGHT,
    relatedAttribute: Attribute.WIS,
    canBeChosenByClass: [
      CharacterClassName.BARD,
      CharacterClassName.CLERIC,
      CharacterClassName.DRUID,
      CharacterClassName.FIGHTER,
      CharacterClassName.MONK,
      CharacterClassName.PALADIN,
      CharacterClassName.RANGER,
      CharacterClassName.ROGUE,
      CharacterClassName.SORCERER,
      CharacterClassName.WIZARD
    ]
  },
  {
    name: SkillName.INTIMIDATION,
    relatedAttribute: Attribute.CHA,
    canBeChosenByClass: [
      CharacterClassName.BARBARIAN,
      CharacterClassName.BARD,
      CharacterClassName.FIGHTER,
      CharacterClassName.PALADIN,
      CharacterClassName.ROGUE,
      CharacterClassName.SORCERER,
      CharacterClassName.WARLOCK,
    ]
  },
  {
    name: SkillName.INVESTIGATION,
    relatedAttribute: Attribute.INT,
    canBeChosenByClass: [
      CharacterClassName.BARD,
      CharacterClassName.RANGER,
      CharacterClassName.ROGUE,
      CharacterClassName.WARLOCK,
      CharacterClassName.WIZARD
    ]
  },
  {
    name: SkillName.MEDICINE,
    relatedAttribute: Attribute.WIS,
    canBeChosenByClass: [
      CharacterClassName.BARD,
      CharacterClassName.CLERIC,
      CharacterClassName.DRUID,
      CharacterClassName.PALADIN,
      CharacterClassName.WIZARD
    ]
  },
  {
    name: SkillName.NATURE,
    relatedAttribute: Attribute.INT,
    canBeChosenByClass: [
      CharacterClassName.BARBARIAN,
      CharacterClassName.BARD,
      CharacterClassName.DRUID,
      CharacterClassName.WARLOCK,
    ]
  },
  {
    name: SkillName.PERCEPTION,
    relatedAttribute: Attribute.WIS,
    canBeChosenByClass: [
      CharacterClassName.BARBARIAN,
      CharacterClassName.BARD,
      CharacterClassName.DRUID,
      CharacterClassName.FIGHTER,
      CharacterClassName.RANGER,
      CharacterClassName.ROGUE
    ]
  },
  {
    name: SkillName.PERFORMANCE,
    relatedAttribute: Attribute.CHA,
    canBeChosenByClass: [
      CharacterClassName.BARD,
      CharacterClassName.ROGUE
    ]
  },
  {
    name: SkillName.PERSUASION,
    relatedAttribute: Attribute.CHA,
    canBeChosenByClass: [
      CharacterClassName.BARD,
      CharacterClassName.CLERIC,
      CharacterClassName.PALADIN,
      CharacterClassName.ROGUE,
      CharacterClassName.SORCERER
    ]
  },
  {
    name: SkillName.RELIGION,
    relatedAttribute: Attribute.INT,
    canBeChosenByClass: [
      CharacterClassName.BARD,
      CharacterClassName.CLERIC,
      CharacterClassName.DRUID,
      CharacterClassName.MONK,
      CharacterClassName.PALADIN,
      CharacterClassName.SORCERER,
      CharacterClassName.WARLOCK,
      CharacterClassName.WIZARD
      ]
  },
  {
    name: SkillName.SLEIGHT_OF_HAND,
    relatedAttribute: Attribute.DEX,
    canBeChosenByClass: [
      CharacterClassName.BARD,
      CharacterClassName.ROGUE
    ]
  },
  {
    name: SkillName.STEALTH,
    relatedAttribute: Attribute.DEX,
    canBeChosenByClass: [
      CharacterClassName.BARD,
      CharacterClassName.MONK,
      CharacterClassName.RANGER,
      CharacterClassName.ROGUE
    ]
  },
  {
    name: SkillName.SURVIVAL,
    relatedAttribute: Attribute.WIS,
    canBeChosenByClass: [
      CharacterClassName.BARBARIAN,
      CharacterClassName.BARD,
      CharacterClassName.DRUID,
      CharacterClassName.FIGHTER,
      CharacterClassName.RANGER
    ]
  }
];
