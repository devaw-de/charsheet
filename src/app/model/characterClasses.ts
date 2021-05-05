import { Skill } from "./abilities";
import { Attribute } from "./attributes";
import { Dice, Language } from "./base";
import { Armor, ArmorType, EquipmentSets, Tool } from "./equipment";
import { CharacterFeats } from "./skills";
import { Ammunition, SPELLCASTER_WEAPONS, Weapon, WeaponType } from "./weapons";

export enum CharacterClassName {
  BARBARIAN = 'Barbarian',
  BARD = 'Bard',
  CLERIC = 'Cleric',
  DRUID = 'Druid',
  FIGHTER = 'Fighter',
  MONK = 'Monk',
  PALADIN = 'Paladin',
  RANGER = 'Ranger',
  ROGUE = 'Rogue',
  SORCERER = 'Sorcerer',
  WARLOCK = 'Warlock',
  WIZARD = 'Wizard'
};

export interface CharacterClass {
  name: CharacterClassName;
  hitDie: Dice;
  proficiencies: {
    skillsToChoose: {
      amount: number,
      limitedTo?: Array<Skill>
    },
    languages?: Array<Language>,
    armor?: Array<string>,
    tools?: Array<string>,
    weapons: Array<string>,
    savingThrows: Array<Attribute>
  };
  feats: Array<CharacterFeats>;
  equipment: Array<string>;
};

export const CharacterClassesList: Array<CharacterClass> = [
  // ------ BARBARIAN ------
  {
    name: CharacterClassName.BARBARIAN,
    hitDie: Dice.D12,
    proficiencies: {
      skillsToChoose: {
        amount: 2,
        limitedTo: [Skill.ANIMAL_HANDLING, Skill.ATHLETICS, Skill.INTIMIDATION, Skill.NATURE, Skill.PERCEPTION, Skill.SURVIVAL]
      },
      armor: [ArmorType.LIGHT_ARMOR, ArmorType.MEDIUM_ARMOR, ArmorType.SHIELDS],
      weapons: [WeaponType.SIMPLE, WeaponType.MARTIAL],
      savingThrows: [Attribute.STR, Attribute.CON]
    },
    equipment: [Weapon.GREATAXE, 'Two handaxes', 'Four javelins', EquipmentSets.EXPLORER_PACK],
    feats: [CharacterFeats.RAGE, CharacterFeats.UNARMORED_DEFENSE_BARBARIAN]
  },
  // ------ BARD ------
  {
    name: CharacterClassName.BARD,
    hitDie: Dice.D8,
    proficiencies: {
      armor: [ArmorType.LIGHT_ARMOR],
      weapons: [WeaponType.SIMPLE, WeaponType.HAND_CROSSBOWS, WeaponType.LONGSWORDS, WeaponType.RAPIERS, WeaponType.SHORTSWORDS],
      tools: ['Three musical instruments'],
      savingThrows: [Attribute.DEX, Attribute.CHA],
      skillsToChoose: {
        amount: 3
      }
    },
    equipment: [EquipmentSets.ENTERTAINER_PACK, Weapon.RAPIER, 'A musical instrument', Weapon.DAGGER, Armor.LEATHER_ARMOR],
    feats: [CharacterFeats.BARDIC_INSPIRATION]
  },
  // ------ CLERIC ------
  {
    name: CharacterClassName.CLERIC,
    hitDie: Dice.D8,
    proficiencies: {
      skillsToChoose: {
        amount: 2,
        limitedTo: [Skill.HISTORY, Skill.INSIGHT, Skill.MEDICINE, Skill.PERSUASION, Skill.RELIGION]
      },
      savingThrows: [Attribute.WIS, Attribute.CHA],
      armor: [ArmorType.LIGHT_ARMOR, ArmorType.MEDIUM_ARMOR, ArmorType.SHIELDS],
      weapons: [WeaponType.SIMPLE],
      tools: [],
    },
    equipment: [Weapon.MACE, Armor.SCALE_MAIL, Weapon.LIGHT_CROSSBOW, Ammunition.BOLTS, Armor.SHIELD, 'Holy Symbol'],
    feats: [CharacterFeats.DIVINE_DOMAIN]
  },
  // ------ DRUID ------
  {
    name: CharacterClassName.DRUID,
    hitDie: Dice.D8,
    proficiencies: {
      armor: [ArmorType.LIGHT_ARMOR, ArmorType.MEDIUM_ARMOR, ArmorType.SHIELDS],
      weapons: ['Clubs', 'Daggers', 'Darts', 'Javelins', 'Maces', 'Quarterstaffs', 'Scimitars', 'Sickles', 'Slings', 'Spears'],
      tools: [Tool.HERBALISM_KIT],
      savingThrows: [Attribute.INT, Attribute.WIS],
      skillsToChoose: {
        amount: 2,
        limitedTo: [Skill.ARCANA, Skill.ANIMAL_HANDLING, Skill.INSIGHT, Skill.MEDICINE, Skill.NATURE, Skill.PERCEPTION, Skill.RELIGION, Skill.SURVIVAL]
      },
      languages: [Language.DRUIDIC]
    },
    equipment: ['Wooden shield', 'Scimitar', Armor.LEATHER_ARMOR, EquipmentSets.EXPLORER_PACK, 'Druidic Focus'],
    feats: []
  },
  // ------ FIGHTER ------
  {
    name: CharacterClassName.FIGHTER,
    hitDie: Dice.D10,
    proficiencies: {
      skillsToChoose: {
        amount: 2,
        limitedTo: [Skill.ACROBATICS, Skill.ANIMAL_HANDLING, Skill.ATHLETICS, Skill.HISTORY, Skill.INSIGHT, Skill.INTIMIDATION, Skill.PERCEPTION, Skill.SURVIVAL]
      },
      armor: [ArmorType.LIGHT_ARMOR, ArmorType.MEDIUM_ARMOR, ArmorType.HEAVY_ARMOR, ArmorType.SHIELDS],
      weapons: [WeaponType.SIMPLE, WeaponType.MARTIAL],
      savingThrows: [Attribute.STR, Attribute.CON]
    },
    equipment: [Armor.CHAIN_MAIL, 'A martial weapon', Armor.SHIELD, Weapon.LIGHT_CROSSBOW, Ammunition.BOLTS, EquipmentSets.EXPLORER_PACK],
    feats: [CharacterFeats.FIGHTING_STYLE, CharacterFeats.SECOND_WIND]
  },
  // ------ MONK ------
  {
    name: CharacterClassName.MONK,
    hitDie: Dice.D8,
    proficiencies: {
      savingThrows: [Attribute.STR, Attribute.DEX],
      skillsToChoose: {
        amount: 2,
        limitedTo: [Skill.ATHLETICS, Skill.ACROBATICS, Skill.HISTORY, Skill.INSIGHT, Skill.RELIGION, Skill.STEALTH]
      },
      weapons: [WeaponType.SIMPLE, WeaponType.SHORTSWORDS],
      tools: ['One instrument or one type of artisans tools']
    },
    equipment: [Weapon.SHORTSWORD, EquipmentSets.EXPLORER_PACK, Ammunition.DARTS],
    feats: [
      CharacterFeats.UNARMORED_DEFENSE_MONK,
      CharacterFeats.MARTIAL_ARTS
    ]
  },
  // ------ PALADIN ------
  {
    name: CharacterClassName.PALADIN,
    hitDie: Dice.D10,
    proficiencies: {
      armor: [ArmorType.LIGHT_ARMOR, ArmorType.MEDIUM_ARMOR, ArmorType.HEAVY_ARMOR, ArmorType.SHIELDS],
      weapons: [WeaponType.SIMPLE, WeaponType.MARTIAL],
      savingThrows: [Attribute.WIS, Attribute.CHA],
      skillsToChoose: {
        amount: 2,
        limitedTo: [Skill.RELIGION, Skill.INSIGHT, Skill.ATHLETICS, Skill.MEDICINE, Skill.INTIMIDATION, Skill.PERSUASION]
      }
    },
    equipment: ['A martial weapon', Armor.SHIELD, EquipmentSets.EXPLORER_PACK, Armor.CHAIN_MAIL, 'Holy symbol', '5 Javelins'],
    feats: [CharacterFeats.LAY_ON_HANDS, CharacterFeats.DIVINE_SENSE]
  },
  // ------ RANGER ------
  {
    name: CharacterClassName.RANGER,
    hitDie: Dice.D10,
    proficiencies: {
      skillsToChoose: {
        amount: 3,
        limitedTo: [Skill.ANIMAL_HANDLING, Skill.ATHLETICS, Skill.NATURE, Skill.INSIGHT, Skill.INVESTIGATION, Skill.PERCEPTION, Skill.SURVIVAL, Skill.STEALTH]
      },
      savingThrows: [Attribute.DEX, Attribute.STR],
      armor: [ArmorType.LIGHT_ARMOR, ArmorType.MEDIUM_ARMOR, ArmorType.SHIELDS],
      weapons: [WeaponType.SIMPLE, WeaponType.MARTIAL]
    },
    equipment: [Armor.LEATHER_ARMOR, Weapon.SHORTSWORD, Weapon.SHORTSWORD, Weapon.LONGBOW, EquipmentSets.EXPLORER_PACK, Ammunition.ARROWS],
    feats: [CharacterFeats.NATURAL_EXPLORER, CharacterFeats.FAVORED_ENEMY]
  },
  // ------ ROGUE ------
  {
    name: CharacterClassName.ROGUE,
    hitDie: Dice.D8,
    proficiencies: {
      savingThrows: [Attribute.DEX, Attribute.INT],
      weapons: [WeaponType.SIMPLE, WeaponType.RAPIERS, WeaponType.SHORTSWORDS, WeaponType.LONGSWORDS, WeaponType.HAND_CROSSBOWS],
      tools: [Tool.THIEVES_TOOLS],
      skillsToChoose: {
        amount: 4,
        limitedTo: [
          Skill.ACROBATICS,
          Skill.ATHLETICS,
          Skill.DECEPTION,
          Skill.INSIGHT,
          Skill.INTIMIDATION,
          Skill.INVESTIGATION,
          Skill.PERCEPTION,
          Skill.PERFORMANCE,
          Skill.PERSUASION,
          Skill.SLEIGHT_OF_HAND,
          Skill.STEALTH
        ]
      }
    },
    equipment: [Weapon.RAPIER, Weapon.SHORTBOW, Ammunition.ARROWS, EquipmentSets.BURGLAR_PACK, Weapon.DAGGER, Weapon.DAGGER, Tool.THIEVES_TOOLS, Armor.LEATHER_ARMOR],
    feats: [CharacterFeats.EXPERTISE, CharacterFeats.SNEAK_ATTACK]
  },
  // ------ SORCERER ------
  {
    name: CharacterClassName.SORCERER,
    hitDie: Dice.D6,
    proficiencies: {
      weapons: [...SPELLCASTER_WEAPONS],
      savingThrows: [Attribute.CON, Attribute.CHA],
      skillsToChoose: {
        amount: 2,
        limitedTo: [Skill.ARCANA, Skill.DECEPTION, Skill.INSIGHT, Skill.INTIMIDATION, Skill.PERSUASION, Skill.RELIGION]
      }
    },
    equipment: [Weapon.LIGHT_CROSSBOW, Ammunition.BOLTS, 'Arcane Focus', EquipmentSets.EXPLORER_PACK, Weapon.DAGGER, Weapon.DAGGER],
    feats: []
  },
  // ------ WARLOCK ------
  {
    name: CharacterClassName.WARLOCK,
    hitDie: Dice.D8,
    proficiencies: {
      savingThrows: [Attribute.CHA, Attribute.WIS],
      armor: [ArmorType.LIGHT_ARMOR],
      weapons: [WeaponType.SIMPLE],
      skillsToChoose: {
        amount: 2,
        limitedTo: [Skill.ARCANA, Skill.DECEPTION, Skill.HISTORY, Skill.INTIMIDATION, Skill.INVESTIGATION, Skill.NATURE, Skill.RELIGION]
      }
    },
    equipment: [Weapon.LIGHT_CROSSBOW, Ammunition.BOLTS],
    feats: []
  },
  // ------ WIZARD ------
  {
    name: CharacterClassName.WIZARD,
    hitDie: Dice.D6,
    proficiencies: {
      savingThrows: [Attribute.INT, Attribute.WIS],
      weapons: [...SPELLCASTER_WEAPONS],
      skillsToChoose: {
        amount: 2,
        limitedTo: [Skill.ARCANA, Skill.HISTORY, Skill.INSIGHT, Skill.INVESTIGATION, Skill.MEDICINE, Skill.RELIGION]
      }
    },
    equipment: [Weapon.QUARTERSTAFF, 'Component pouch', EquipmentSets.EXPLORER_PACK, 'Spellbook'],
    feats: []
  },
];