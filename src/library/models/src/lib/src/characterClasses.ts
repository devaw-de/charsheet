import {Attribute} from './attributes';
import {Armor, ArmorType, EquipmentSets, Tool} from './equipment';
import {CharacterTraits} from './traits';
import {Ammunition, CASTER_WEAPON_PROFICIENCIES, Weapon, WeaponType} from './weapons';
import {Language} from './language';
import {Dice} from './dice';

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
}

export const CasterClasses: Array<CharacterClassName> = [
  CharacterClassName.BARD,
  CharacterClassName.CLERIC,
  CharacterClassName.DRUID,
  CharacterClassName.PALADIN,
  CharacterClassName.SORCERER,
  CharacterClassName.WARLOCK,
  CharacterClassName.WIZARD
];

export interface CharacterClass {
  name: CharacterClassName;
  hitDie: Dice;
  proficiencies: {
    skillsToChoose: number,
    languages?: Array<Language>,
    armor?: Array<string>,
    tools?: Array<string>,
    weapons: Array<string>,
    savingThrows: Array<Attribute>
  };
  feats: Array<CharacterTraits>;
  equipment: Array<string>;
}


export const CharacterClassesList: Array<CharacterClass> = [
  // ------ BARBARIAN ------
  {
    name: CharacterClassName.BARBARIAN,
    hitDie: Dice.D12,
    proficiencies: {
      skillsToChoose: 2,
      armor: [ArmorType.LIGHT_ARMOR, ArmorType.MEDIUM_ARMOR, ArmorType.SHIELDS],
      weapons: [WeaponType.SIMPLE, WeaponType.MARTIAL],
      savingThrows: [Attribute.STR, Attribute.CON]
    },
    equipment: [Weapon.GREAT_AXE, 'Two handaxes', 'Four javelins', EquipmentSets.EXPLORER_PACK],
    feats: [CharacterTraits.RAGE, CharacterTraits.UNARMORED_DEFENSE_BARBARIAN]
  },
  // ------ BARD ------
  {
    name: CharacterClassName.BARD,
    hitDie: Dice.D8,
    proficiencies: {
      armor: [ArmorType.LIGHT_ARMOR],
      weapons: [WeaponType.SIMPLE, WeaponType.HAND_CROSSBOWS, WeaponType.LONG_SWORDS, WeaponType.RAPIERS, WeaponType.SHORT_SWORDS],
      tools: ['Three musical instruments'],
      savingThrows: [Attribute.DEX, Attribute.CHA],
      skillsToChoose: 3,
    },
    equipment: [EquipmentSets.ENTERTAINER_PACK, Weapon.RAPIER, 'A musical instrument', Weapon.DAGGER, Armor.LEATHER_ARMOR],
    feats: [CharacterTraits.BARDIC_INSPIRATION]
  },
  // ------ CLERIC ------
  {
    name: CharacterClassName.CLERIC,
    hitDie: Dice.D8,
    proficiencies: {
      skillsToChoose: 2,
      savingThrows: [Attribute.WIS, Attribute.CHA],
      armor: [ArmorType.LIGHT_ARMOR, ArmorType.MEDIUM_ARMOR, ArmorType.SHIELDS],
      weapons: [WeaponType.SIMPLE],
      tools: [],
    },
    equipment: [Weapon.MACE, Armor.SCALE_MAIL, Weapon.LIGHT_CROSSBOW, Ammunition.BOLTS, Armor.SHIELD, 'Holy Symbol'],
    feats: [CharacterTraits.DIVINE_DOMAIN]
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
      skillsToChoose: 2,
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
      skillsToChoose: 2,
      armor: [ArmorType.LIGHT_ARMOR, ArmorType.MEDIUM_ARMOR, ArmorType.HEAVY_ARMOR, ArmorType.SHIELDS],
      weapons: [WeaponType.SIMPLE, WeaponType.MARTIAL],
      savingThrows: [Attribute.STR, Attribute.CON]
    },
    equipment: [Armor.CHAIN_MAIL, 'A martial weapon', Armor.SHIELD, Weapon.LIGHT_CROSSBOW, Ammunition.BOLTS, EquipmentSets.EXPLORER_PACK],
    feats: [CharacterTraits.FIGHTING_STYLE, CharacterTraits.SECOND_WIND]
  },
  // ------ MONK ------
  {
    name: CharacterClassName.MONK,
    hitDie: Dice.D8,
    proficiencies: {
      savingThrows: [Attribute.STR, Attribute.DEX],
      skillsToChoose: 2,
      weapons: [WeaponType.SIMPLE, WeaponType.SHORT_SWORDS],
      tools: ['One instrument or one type of artisans tools']
    },
    equipment: [Weapon.SHORT_SWORD, EquipmentSets.EXPLORER_PACK, Ammunition.DARTS],
    feats: [
      CharacterTraits.UNARMORED_DEFENSE_MONK,
      CharacterTraits.MARTIAL_ARTS
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
      skillsToChoose: 2,
    },
    equipment: ['A martial weapon', Armor.SHIELD, EquipmentSets.EXPLORER_PACK, Armor.CHAIN_MAIL, 'Holy symbol', '5 Javelins'],
    feats: [CharacterTraits.LAY_ON_HANDS, CharacterTraits.DIVINE_SENSE]
  },
  // ------ RANGER ------
  {
    name: CharacterClassName.RANGER,
    hitDie: Dice.D10,
    proficiencies: {
      skillsToChoose: 3,
      savingThrows: [Attribute.DEX, Attribute.STR],
      armor: [ArmorType.LIGHT_ARMOR, ArmorType.MEDIUM_ARMOR, ArmorType.SHIELDS],
      weapons: [WeaponType.SIMPLE, WeaponType.MARTIAL]
    },
    equipment: [
      Armor.LEATHER_ARMOR,
      Weapon.SHORT_SWORD,
      Weapon.SHORT_SWORD,
      Weapon.LONGBOW,
      EquipmentSets.EXPLORER_PACK,
      Ammunition.ARROWS
    ],
    feats: [CharacterTraits.NATURAL_EXPLORER, CharacterTraits.FAVORED_ENEMY]
  },
  // ------ ROGUE ------
  {
    name: CharacterClassName.ROGUE,
    hitDie: Dice.D8,
    proficiencies: {
      savingThrows: [Attribute.DEX, Attribute.INT],
      weapons: [WeaponType.SIMPLE, WeaponType.RAPIERS, WeaponType.SHORT_SWORDS, WeaponType.LONG_SWORDS, WeaponType.HAND_CROSSBOWS],
      tools: [Tool.THIEVES_TOOLS],
      skillsToChoose: 4
    },
    equipment: [
      Weapon.RAPIER,
      Weapon.SHORT_BOW,
      Ammunition.ARROWS,
      EquipmentSets.BURGLAR_PACK,
      Weapon.DAGGER,
      Weapon.DAGGER,
      Tool.THIEVES_TOOLS,
      Armor.LEATHER_ARMOR
    ],
    feats: [CharacterTraits.EXPERTISE, CharacterTraits.SNEAK_ATTACK]
  },
  // ------ SORCERER ------
  {
    name: CharacterClassName.SORCERER,
    hitDie: Dice.D6,
    proficiencies: {
      weapons: [...CASTER_WEAPON_PROFICIENCIES],
      savingThrows: [Attribute.CON, Attribute.CHA],
      skillsToChoose: 2
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
      skillsToChoose: 2
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
      weapons: [...CASTER_WEAPON_PROFICIENCIES],
      skillsToChoose: 2
    },
    equipment: [Weapon.QUARTER_STAFF, 'Component pouch', EquipmentSets.EXPLORER_PACK, 'Spellbook'],
    feats: []
  },
];
