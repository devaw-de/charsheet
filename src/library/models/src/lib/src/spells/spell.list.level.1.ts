import {CharacterClassName, SpellSchool} from '@app/models';

export const Level1SpellList = [
  {
    name: 'Absorb Elements',
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.RANGER]
  },
  {
    name: 'Alarm',
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: true,
    concentration: false,
    availableTo: [CharacterClassName.RANGER]
  },
  {
    name: 'Animal Friendship',
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.RANGER]
  },
  {
    name: 'Armor of Agathys',
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Arms of Hadar',
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Bane',
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: 'Bless',
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Burning Hands',
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Ceremony',
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: true,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Charm Person',
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Chromatic Orb',
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false
  },
  {
    name: 'Color Spray',
    level: 1,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Command',
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Compelled Duel',
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Comprehend Languages',
    level: 1,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Create or Destroy Water',
    level: 1,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Cure Wounds',
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Detect Evil and Good',
    level: 1,
    school: SpellSchool.DIVINATION,
    ritual:  false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Detect Magic',
    level: 1,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Detect Poison and Disease',
    level: 1,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Disguise Self',
    level: 1,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Dissonant Whispers',
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Divine Favor',
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Ensnaring Strike',
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: 'Entangle',
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: 'Expeditious Retreat',
    level: 1,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: 'Faerie Fire',
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: 'False Life',
    level: 1,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Feather Fall',
    level: 1,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Find Familiar',
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: true,
    concentration: false,
    availableTo: [],
  },
  {
    name: 'Fog Cloud',
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: 'Goodberry',
    level: 1,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Grease',
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Guiding Bolt',
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Hail of Thorns',
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: 'Healing Word',
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Hellish Rebuke',
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Heroism',
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Hex',
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: 'Hunter\s Mark',
    level: 1,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: 'Identify',
    level: 1,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Illusory Script',
    level: 1,
    school: SpellSchool.ILLUSION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Inflict Wounds',
    level: 1,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Jump',
    level: 1,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Longstrider',
    level: 1,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Mage Armor',
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Magic Missile',
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Protection from Evil and Good',
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Purify Food and Drink',
    level: 1,
    school: SpellSchool.TRANSMUTATION,
    ritual: true,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Ray of Sickness',
    level: 1,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Sanctuary',
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Searing Smite',
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Shield',
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Shield of Faith',
    level: 1,
    school: SpellSchool.ABJURATION,
    ritual:	false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Silent Image',
    level: 1,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: 'Sleep',
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Speak with Animals',
    level: 1,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Tasha\'s Hideous Laughter',
    level: 1,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: 'Tenser’s Floating Disk',
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Thunderwave',
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: 'Thunderous Smite',
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: 'Unseen Servant',
    level: 1,
    school: SpellSchool.CONJURATION,
    ritual: true,
    concentration: false
  },
  {
    name: 'Witch Bolt',
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: 'Wrathful Smite',
    level: 1,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },

];
