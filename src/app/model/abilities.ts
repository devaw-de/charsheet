import { Attribute } from "./attributes";

export enum Skill {
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
};

export interface CharacterSkill {
  name: Skill;
  relatedAttribute: Attribute;
  proficient?: boolean;
  expertise?: boolean;
}

export const CharacterSkillList: Array<CharacterSkill> = [
  {
    name: Skill.ACROBATICS,
    relatedAttribute: Attribute.DEX
  },
  {
    name: Skill.ANIMAL_HANDLING,
    relatedAttribute: Attribute.WIS
  },
  {
    name: Skill.ARCANA,
    relatedAttribute: Attribute.INT
  },
  {
    name: Skill.ATHLETICS,
    relatedAttribute: Attribute.STR
  },
  {
    name: Skill.DECEPTION,
    relatedAttribute: Attribute.CHA
  },
  {
    name: Skill.HISTORY,
    relatedAttribute: Attribute.INT
  },
  {
    name: Skill.INSIGHT,
    relatedAttribute: Attribute.WIS
  },
  {
    name: Skill.INTIMIDATION,
    relatedAttribute: Attribute.CHA
  },
  {
    name: Skill.INVESTIGATION,
    relatedAttribute: Attribute.INT
  },
  {
    name: Skill.MEDICINE,
    relatedAttribute: Attribute.WIS
  },
  {
    name: Skill.NATURE,
    relatedAttribute: Attribute.INT
  },
  {
    name: Skill.PERCEPTION,
    relatedAttribute: Attribute.WIS
  },
  {
    name: Skill.PERFORMANCE,
    relatedAttribute: Attribute.CHA
  },
  {
    name: Skill.PERSUASION,
    relatedAttribute: Attribute.CHA
  },
  {
    name: Skill.RELIGION,
    relatedAttribute: Attribute.INT
  },
  {
    name: Skill.SLEIGHT_OF_HAND,
    relatedAttribute: Attribute.DEX
  },
  {
    name: Skill.STEALTH,
    relatedAttribute: Attribute.DEX
  },
  {
    name: Skill.SURVIVAL,
    relatedAttribute: Attribute.WIS
  }
];