export enum EquipmentSets {
  BURGLAR_PACK = 'Burglar Pack',
  EXPLORER_PACK = 'EXPLORER_PACK',
  DUNGEONEERING_PACK = 'DUNGEONEERING_PACK',
  DIPLOMAT_PACK = 'DIPLOMAT_PACK',
  ENTERTAINER_PACK = 'ENTERTAINER_PACK'
};

export interface Currency {
  copper?: number;
  gold?: number;
  silver?: number;
  platinum?: number;
};

export enum ArmorType {
  LIGHT_ARMOR = 'Light armor',
  MEDIUM_ARMOR = 'Medium armor',
  HEAVY_ARMOR = 'Heavy armor' ,
  SHIELDS = 'Shields'
};

export enum Armor {
  BREASTPLATE = 'Breastplate',
  CHAIN_MAIL = 'Chain mail',
  LEATHER_ARMOR = 'Leather armor',
  SCALE_MAIL = 'Scale mail',
  SHIELD = 'Shield'
}

export enum Tool {
  THIEVES_TOOLS = 'Thieves tools',
  HERBALISM_KIT = 'Herbalism kit',
  SMITH_TOOLS = 'Smith tools',
  DISGUISE_KIT = 'Disguise kit',
  FORGERY_KIT = 'Forgery kit',
  ARTISAN_TOOLS = 'Artisan tools',
  GAMING_SET = 'Gaming set',
  VEHICLE_WATER = 'Vehicles(water)',
  VEHICLE_LAND = 'Vehicles(land)',
  NAVIGATORS_TOOLS = 'Navigators tools'
}