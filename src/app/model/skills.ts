export enum CharacterFeats {
  ARTIFICERS_LORE = 'Artificer Lore',
  BARDIC_INSPIRATION = 'Bardic Inspiration',
  BRAVE = 'Brave',
  BREATH_WEAPON = 'Vreath weapon',
  DAMAGE_RESISTANCE_DRACONIC = 'Damage Resistance (Draconic)',
  DARKVISION = 'Darkvision',
  DIVINE_DOMAIN = 'Divine Domain',
  DIVINE_SENSE = 'Divine Sense',
  DRACONIC_ANCESTRY = 'Draconic ancestry',
  DROW_MAGIC = 'Drow magic',
  DROW_WEAPON_TRAINING = 'Drow weapon training',
  DWARVEN_ARMOR_TRAINING = 'Dwarven armor training',
  DWARVEN_RESILIENCE = 'Dwarven resilience',
  DWARVEN_TOUGHNESS = 'Dwarven toughness',
  ELF_WEAPON_TRAINING = 'Elf weapon training',
  ELVEN_CANTRIP = 'One Wizard-Cantrip',
  EXPERTISE = 'Expertise',
  FAVORED_ENEMY = 'Favored Enemy',
  FEY_ANCESTRY = 'Fey ancestry',
  FIGHTING_STYLE = 'Fighting style',
  GNOME_CUNNING = 'Gnome cunning',
  HALFLING_NIMBLENESS = 'Halfling nimbleness',
  HELLISH_RESISTANCE = 'Hellish Resistance',
  INFERNAL_LEGACY = 'Infernal Legacy',
  KEEN_SENSES = 'Keen Senses',
  LAY_ON_HANDS = 'Lay on Hands',
  LUCKY = 'Lucky',
  MASK_OF_THE_WILD = 'Mask of the wild',
  MARTIAL_ARTS = 'MArtial Arts',
  MENACING = 'Menacing',
  NATURAL_EXPLORER = 'Natural Explorer',
  NATURAL_ILLUSIONIST = 'Natural Illusionist',
  NATURALLY_STEALTHY = 'Naturally Stealthy',
  RAGE = 'Rage',
  RELENTLESS_ENDURANCE = 'Relentless Endurance',
  SAVAGE_ATTACKS = 'Savage Attacks',
  SECOND_WIND = 'Second Wind',
  SNEAK_ATTACK = 'Sneak Attack',
  SKILL_VERSATILIY = 'Skill Versatility',
  SPEAK_WITH_SMALL_BEASTS = 'Speak with small beasts',
  STONECUNNING = 'Stonecunning',
  STOUT_RESILIENCE = 'Stout resilience',
  SUNLIGHT_SENSITIVITY = 'Sensitivity to sunlight',
  SUPERIOR_DARKVISION = 'Superior Darkvision',
  TINKER = 'Tinker',
  UNARMORED_DEFENSE_BARBARIAN = 'Unarmored Defense (Barbarian)',
  UNARMORED_DEFENSE_MONK = 'Unarmored Defense (Monk)'
};

export interface CharacterFeatDetails {
  name: CharacterFeats;
  description?: string;
  result?: any;
};


/**
 * Alphabetically sorted PARTIAL List of Character Feats / Traits
 * as described in the PHB
 */
export const SkillList: Array<CharacterFeatDetails> = [
  {
    name: CharacterFeats.BRAVE,
    description: 'Halfling trait'
  },
  {
    name: CharacterFeats.DROW_MAGIC,
    description: 'Dancing lights cantrip; At 3rd level: cast Faerie Fire once per day; At 5th level: cast Darkness once per day.'
  },
  {
    name: CharacterFeats.HALFLING_NIMBLENESS,
    description: 'Halfling trait'
  },
  {
    name: CharacterFeats.HELLISH_RESISTANCE,
    description: 'Tiefling trait'
  },
  {
    name: CharacterFeats.INFERNAL_LEGACY,
    description: 'Tiefling trait'
  },
  {
    name: CharacterFeats.KEEN_SENSES,
    description: 'Proficiency in Perception'
  },
  {
    name: CharacterFeats.LUCKY,
    description: 'Halfling trait'
  },
  {
    name: CharacterFeats.MENACING,
    description: 'Half-Orc trait'
  },
  {
    name: CharacterFeats.RELENTLESS_ENDURANCE,
    description: 'Half-Orc trait'
  },
  {
    name: CharacterFeats.SAVAGE_ATTACKS,
    description: 'Half-Orc trait'
  },
  {
    name: CharacterFeats.SKILL_VERSATILIY,
    description: 'Half-Elf trait'
  },
  {
    name: CharacterFeats.UNARMORED_DEFENSE_BARBARIAN,
    description: 'When not wearing armor, your AC equals 10 + your constiution modifier + your dexterity modifier'
  },
  {
    name: CharacterFeats.UNARMORED_DEFENSE_MONK,
    description: 'When not wearing armor, your AC equals 10 + your wisdom modifier + your dexterity modifier'
  }
];