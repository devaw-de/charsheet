import {CharacterClassName, SpellSchool} from '@app/models';

export enum Level1SpellNames {
  ABSORB_ELEMENTS = 'Absorb Elements',
  ALARM = 'Alarm',
  ANIMAL_FRIENDSHIP = 'Animal Friendship',
  ARMOR_OF_AGATHYS = 'Armor of Agathys',
  ARMS_OF_HADAR = 'Arms of Hadar',
  BANE = 'Bane',
  BLESS = 'Bless',
  BURNING_HANDS = 'Burning Hands',
  CEREMONY = 'Ceremony',
  CHARM_PERSON = 'Charm Person',
  CHROMATIC_ORB = 'Chromatic Orb',
  COLOR_SPRAY = 'Color Spray',
  COMMAND = 'Command',
  COMPELLED_DUEL = 'Compelled Duel',
  COMPREHEND_LANGUAGES = 'Comprehend Languages',
  CREATE_OR_DESTROY_WATER = 'Create or Destroy Water',
  CURE_WOUNDS = 'Cure Wounds',
  DETECT_EVIL_AND_GOOD = 'Detect Evil and Good',
  DETECT_MAGIC = 'Detect Magic',
  DETECT_POISON_AND_DISEASE = 'Detect Poison and Disease',
  DISGUISE_SELF = 'Disguise Self',
  DISSONANT_WHISPERS = 'Dissonant Whispers',
  DIVINE_FAVOR = 'Divine Favor',
  ENSNARING_STRIKE = 'Ensnaring Strike',
  ENTANGLE = ' Entangle',
  EXPEDITIOUS_RETREAT = 'Expeditious Retreat',
  FAERIE_FIRE = 'Faerie Fire',
  FALSE_LIFE = 'False Life',
  FEATHER_FALL = 'Feather Fall',
  FIND_FAMILIAR = 'Find Familiar',
  FOG_CLOUD = 'Fog Cloud',
  GOODBERRY = 'Goodberry',
  GREASE = 'Grease',
  GUIDING_BOLT = 'Guiding Bolt',
  HAIL_OF_THORNS = 'Hail of  Thorns',
  HEALING_WORD = 'Healing Word',
  HELLISH_REBUKE = 'Hellish Rebuke',
  HEROISM = 'Heroism',
  HEX = 'Hex',
  HUNTERS_MARK = 'Hunter\'s Mark',
  IDENTIFY = 'Identify',
  ILLUSORY_SCRIPT = 'Illusory Script',
  INFLICT_WOUNDS = 'Inflict Wounds',
  JUMP = 'Jump',
  LONGSTRIDER = 'Longstrider',
  MAGE_ARMOR = 'Mage Armor',
  MAGIC_MISSILE = 'Magic Missile',
  PROTECTION_FROM_EVIL_AND_GOOD = 'Protection from Evil and Good',
  PURIFY_FOOD_AND_DRINK = 'Purify Food and Drink',
  RAY_OF_SICKNESS = 'Ray of Sickness',
  SANCTUARY = 'Sanctuary',
  SEARING_SMITE = 'Searing Smite',
  SHIELD = 'Shield',
  SHIELD_OF_FAITH = 'Shield of Faith',
  SILENT_IMAGE = 'Silent Image',
  SLEEP = 'Sleep',
  SPEAK_WITH_ANIMALS = 'Speak with Animals',
  TASHAS_HIDEOUS_LAUGHTER = 'Tasha\'s Hideous Laughter',
  TENSERS_FLOATING_DISK = 'Tenser’s Floating Disk',
  THUNDERWAVE = 'Thunderwave',
  THUNDEROUS_SMITE = 'Thunderous Smite',
  UNSEEN_SERVANT = 'Unseen Servant',
  WITCH_BOLT = 'Witch Bolt',
  WRATHFUL_SMITE = 'Wrathful Smite'
}

export const Level1SpellList = [
  {
    name: Level1SpellNames.ABSORB_ELEMENTS,
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.RANGER]
  },
  {
    name: Level1SpellNames.ALARM,
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: true,
    concentration: false,
    availableTo: [CharacterClassName.RANGER]
  },
  {
    name: Level1SpellNames.ANIMAL_FRIENDSHIP,
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.RANGER]
  },
  {
    name: Level1SpellNames.ARMOR_OF_AGATHYS,
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.ARMS_OF_HADAR,
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.BANE,
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level1SpellNames.BLESS,
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.BURNING_HANDS,
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.CEREMONY,
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: true,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.CHARM_PERSON,
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.CHROMATIC_ORB,
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false
  },
  {
    name: Level1SpellNames.COLOR_SPRAY,
    level: 1,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.COMMAND,
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.COMPELLED_DUEL,
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.COMPREHEND_LANGUAGES,
    level: 1,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.CREATE_OR_DESTROY_WATER,
    level: 1,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.CURE_WOUNDS,
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.DETECT_EVIL_AND_GOOD,
    level: 1,
    school: SpellSchool.DIVINATION,
    ritual:  false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.DETECT_MAGIC,
    level: 1,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.DETECT_POISON_AND_DISEASE,
    level: 1,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.DISGUISE_SELF,
    level: 1,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.DISSONANT_WHISPERS,
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.DIVINE_FAVOR,
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.ENSNARING_STRIKE,
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level1SpellNames.ENTANGLE,
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level1SpellNames.EXPEDITIOUS_RETREAT,
    level: 1,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level1SpellNames.FAERIE_FIRE,
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level1SpellNames.FALSE_LIFE,
    level: 1,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.FEATHER_FALL,
    level: 1,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.FIND_FAMILIAR,
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: true,
    concentration: false,
    availableTo: [],
  },
  {
    name: Level1SpellNames.FOG_CLOUD,
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level1SpellNames.GOODBERRY,
    level: 1,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.GREASE,
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.GUIDING_BOLT,
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.HAIL_OF_THORNS,
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level1SpellNames.HEALING_WORD,
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.HELLISH_REBUKE,
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.HEROISM,
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.HEX,
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level1SpellNames.HUNTERS_MARK,
    level: 1,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level1SpellNames.IDENTIFY,
    level: 1,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.ILLUSORY_SCRIPT,
    level: 1,
    school: SpellSchool.ILLUSION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.INFLICT_WOUNDS,
    level: 1,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.JUMP,
    level: 1,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.LONGSTRIDER,
    level: 1,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.MAGE_ARMOR,
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.MAGIC_MISSILE,
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.PROTECTION_FROM_EVIL_AND_GOOD,
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.PURIFY_FOOD_AND_DRINK,
    level: 1,
    school: SpellSchool.TRANSMUTATION,
    ritual: true,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.RAY_OF_SICKNESS,
    level: 1,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.SANCTUARY,
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.SEARING_SMITE,
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.SHIELD,
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.SHIELD_OF_FAITH,
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual:	false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.SILENT_IMAGE,
    level: 1,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level1SpellNames.SLEEP,
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.SPEAK_WITH_ANIMALS,
    level: 1,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.TASHAS_HIDEOUS_LAUGHTER,
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level1SpellNames.TENSERS_FLOATING_DISK,
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.THUNDERWAVE,
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level1SpellNames.THUNDEROUS_SMITE,
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level1SpellNames.UNSEEN_SERVANT,
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: true,
    concentration: false
  },
  {
    name: Level1SpellNames.WITCH_BOLT,
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level1SpellNames.WRATHFUL_SMITE,
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },

];
