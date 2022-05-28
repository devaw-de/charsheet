import {Spell, SpellSchool} from '../spells';
import {Level1SpellNames} from './spell-names';
import {CharacterClassName} from '@app/models';

export const Level1SpellList: Array<Spell> = [
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
    concentration: false,
    availableTo: []
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
    concentration: false,
    availableTo: []
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
