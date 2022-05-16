import {Dice} from './dice';

export enum WeaponProperty {
  LIGHT = 'Light',
  FINESSE = 'Finesse',
  TWO_HANDED = 'Two handed',
  THROWN = 'Thrown',
  VERSATILE = 'Versatile',
  HEAVY = 'Heavy',
  REACH = 'Reach',
  SPECIAL = 'Special'
}

export enum WeaponType {
  SIMPLE = 'Simple Weapons',
  MARTIAL = 'Martial Weapons',
  SHORT_SWORDS = 'Shortswords',
  SHORT_BOWS = 'Shortbows',
  LONG_SWORDS = 'Longswords',
  LONG_BOWS = 'Longbows',
  RAPIERS = 'Rapiers',
  HAND_CROSSBOWS = 'Hand crossbows'
}

export enum WeaponProficiencies {
  SIMPLE = 'Simple Weapons',
  MARTIAL = 'Martial Weapons',
  DAGGERS = 'Daggers',
  DARTS = 'Darts',
  SLINGS = 'Slings',
  QUARTER_STAFFS = 'Quarterstaffs',
  LIGHT_CROSSBOWS = 'Light crossbows',
  CLUBS = 'Clubs',
  LONG_SWORDS = 'Longswords',
  LONG_BOWS = 'Longbows',
  BATTLE_AXE = 'Battle axes',
  HAND_AXE = 'Hand axes',
  WAR_HAMMER = 'War hammers',
  THROWING_HAMMER = 'Throwing hammers',
  SHORT_BOWS = 'Shortbows',
  SHORT_SWORDS = 'Shortswords'
}

export const DWARVEN_WEAPON_PROFICIENCIES: Array<WeaponProficiencies> = [
  WeaponProficiencies.BATTLE_AXE,
  WeaponProficiencies.HAND_AXE,
  WeaponProficiencies.THROWING_HAMMER,
  WeaponProficiencies.WAR_HAMMER
];

export const ELVISH_WEAPON_PROFICIENCIES: Array<WeaponProficiencies> = [
  WeaponProficiencies.LONG_BOWS,
  WeaponProficiencies.LONG_SWORDS,
  WeaponProficiencies.SHORT_SWORDS,
  WeaponProficiencies.SHORT_BOWS
];

export const CASTER_WEAPON_PROFICIENCIES: Array<WeaponProficiencies> = [
  WeaponProficiencies.DAGGERS,
  WeaponProficiencies.DARTS,
  WeaponProficiencies.SLINGS,
  WeaponProficiencies.QUARTER_STAFFS,
  WeaponProficiencies.LIGHT_CROSSBOWS
];

export enum WeaponRange {
  MELEE = 'Melee',
  RANGED = 'Ranged'
}

export enum DamageType {
  PIERCING = 'Piercing',
  SLASHING = 'Slashing',
  BLUDGEONING = 'Bludgeoning'
}

export enum Ammunition {
  ARROWS = '20 Arrows',
  BOLTS = '20 Bolts',
  DARTS = '10 Darts'
}

export enum Weapon {
  DAGGER = 'Dagger',
  SHORT_SWORD = 'Shortsword',
  LONGSWORD = 'Longsword',
  RAPIER = 'Rapier',
  LIGHT_CROSSBOW = 'Light crossbow',
  MACE = 'Mace',
  GREAT_AXE = 'Greataxe',
  SHORT_BOW = 'Shortbow',
  LONGBOW = 'Longbow',
  QUARTER_STAFF = 'Quarterstaff'
}

export interface WeaponDetails {
  name: string;
  type: WeaponType;
  range: WeaponRange;
  damage: Dice;
  damageType: DamageType;
  properties?: Array<WeaponProperty>;
  requiredProficiency: Array<WeaponProficiencies>;
}

export const Weapons: Array<WeaponDetails> = [
  {
    name: 'Club',
    type: WeaponType.SIMPLE,
    range: WeaponRange.MELEE,
    damage: Dice.D4,
    damageType: DamageType.BLUDGEONING,
    properties: [WeaponProperty.LIGHT],
    requiredProficiency: [WeaponProficiencies.SIMPLE, WeaponProficiencies.CLUBS]
  },
  {
    name: 'Dagger',
    type: WeaponType.SIMPLE,
    range: WeaponRange.MELEE,
    damage: Dice.D4,
    damageType: DamageType.PIERCING,
    properties: [WeaponProperty.LIGHT, WeaponProperty.THROWN, WeaponProperty.FINESSE],
    requiredProficiency: [WeaponProficiencies.SIMPLE, WeaponProficiencies.DAGGERS]
  },
  {
    name: 'Mace',
    type: WeaponType.SIMPLE,
    range: WeaponRange.MELEE,
    damage: Dice.D6,
    damageType: DamageType.BLUDGEONING,
    properties: [],
    requiredProficiency: [WeaponProficiencies.SIMPLE]
  },
  {
    name: 'Longsword',
    type: WeaponType.MARTIAL,
    range: WeaponRange.MELEE,
    damage: Dice.D8,
    damageType: DamageType.SLASHING,
    properties: [WeaponProperty.VERSATILE],
    requiredProficiency: [WeaponProficiencies.MARTIAL, WeaponProficiencies.LONG_SWORDS]
  },
  {
    name: 'Longbow',
    type: WeaponType.MARTIAL,
    range: WeaponRange.RANGED,
    damage: Dice.D8,
    damageType: DamageType.PIERCING,
    properties: [WeaponProperty.HEAVY, WeaponProperty.TWO_HANDED],
    requiredProficiency: [WeaponProficiencies.MARTIAL, WeaponProficiencies.LONG_BOWS]
  },
];
