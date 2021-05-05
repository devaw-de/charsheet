import { Dice } from "./base";

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
  SHORTSWORDS = 'Shortswords',
  SHORTBOWS = 'Shortbows',
  LONGSWORDS = 'Longswords',
  LONGBOWS = 'Longbows',
  RAPIERS = 'Rapiers',
  HAND_CROSSBOWS = 'Hand crossbows'
};

export const SPELLCASTER_WEAPONS = ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light crossbows'];

export enum WeaponRange {
  MELEE = 'Melee',
  RANGED = 'Ranged'
};

export enum DamageType {
  PIERCING = 'Piercing',
  SLASHING = 'Slashing',
  BLUDGEONING = 'Bludgeoning'
};

export enum Ammunition {
  ARROWS = '20 Arrows',
  BOLTS = '20 Bolts',
  DARTS = '10 Darts'
};

export enum Weapon {
  DAGGER = 'Dagger',
  SHORTSWORD = 'Shortsword',
  LONGSWORD = 'Longsword',
  RAPIER = 'Rapier',
  LIGHT_CROSSBOW = 'Light crossbow',
  MACE = 'Mace',
  GREATAXE = 'Greataxe',
  SHORTBOW = 'Shortbow',
  LONGBOW = 'Longbow',
  QUARTERSTAFF = 'Quarterstaff'
};

export interface WeaponDetails {
  name: string;
  type: WeaponType;
  range: WeaponRange;
  damage: Dice;
  damageType: DamageType;
  properties?: Array<WeaponProperty>
};

export const Weapons: Array<WeaponDetails> = [
  {
    name: 'Club',
    type: WeaponType.SIMPLE,
    range: WeaponRange.MELEE,
    damage: Dice.D4,
    damageType: DamageType.BLUDGEONING,
    properties: [WeaponProperty.LIGHT]
  },
  {
    name: 'Dagger',
    type: WeaponType.SIMPLE,
    range: WeaponRange.MELEE,
    damage: Dice.D4,
    damageType: DamageType.PIERCING,
    properties: [WeaponProperty.LIGHT, WeaponProperty.THROWN, WeaponProperty.FINESSE]
  },
  {
    name: 'Mace',
    type: WeaponType.SIMPLE,
    range: WeaponRange.MELEE,
    damage: Dice.D6,
    damageType: DamageType.BLUDGEONING,
    properties: []
  },
  {
    name: 'Longsword',
    type: WeaponType.MARTIAL,
    range: WeaponRange.MELEE,
    damage: Dice.D8,
    damageType: DamageType.SLASHING,
    properties: [WeaponProperty.VERSATILE]
  },
  {
    name: 'Longbow',
    type: WeaponType.MARTIAL,
    range: WeaponRange.RANGED,
    damage: Dice.D8,
    damageType: DamageType.PIERCING,
    properties: [WeaponProperty.HEAVY, WeaponProperty.TWO_HANDED]
  },
];
