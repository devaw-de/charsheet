import {Spell, SpellSchool} from '../spells';
import {Level5SpellNames} from './spell-names';
import {CharacterClassName} from '@app/models';

export const Level5SpellList: Array<Spell> = [
  {
    name: Level5SpellNames.ANIMATE_OBJECTS,
    level: 5,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level5SpellNames.ANTILIFE_SHELL,
    level: 5,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level5SpellNames.AWAKEN,
    level: 5,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.BANISHING_SMITE,
    level: 5,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level5SpellNames.BIGBYS_HAND,
    level: 5,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level5SpellNames.CIRCLE_OF_POWER,
    level: 5,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level5SpellNames.CLOUDKILL,
    level: 5,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level5SpellNames.COMMUNE,
    level: 5,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.COMMUNE_WITH_NATURE,
    level: 5,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.CONE_OF_COLD,
    level: 5,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.CONJURE_ELEMENTAL,
    level: 5,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level5SpellNames.CONJURE_VOLLEY,
    level: 5,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.CONTACT_OTHER_PLANE,
    level: 5,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.CONTAGION,
    level: 5,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.CREATION,
    level: 5,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.DESTRUCTIVE_WAVE,
    level: 5,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level5SpellNames.DISPEL_EVIL_AND_GOOD,
    level: 5,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level5SpellNames.DOMINATE_PERSON,
    level: 5,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.DREAM,
    level: 5,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.FLAME_STRIKE,
    level: 5,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.GEAS,
    level: 5,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level5SpellNames.GREATER_RESTORATION,
    level: 5,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.HALLOW,
    level: 5,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.HOLD_MONSTER,
    level: 5,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level5SpellNames.HOLY_WEAPON,
    level: 5,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level5SpellNames.INSECT_PLAGUE,
    level: 5,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level5SpellNames.LEGEND_LORE,
    level: 5,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.MASS_CURE_WOUNDS,
    level: 5,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.MISLEAD,
    level: 5,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level5SpellNames.MODIFY_MEMORY,
    level: 5,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level5SpellNames.PASSWALL,
    level: 5,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.PLANAR_BINDING,
    level: 5,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.RAISE_DEAD,
    level: 5,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: [CharacterClassName.PALADIN]
  },
  {
    name: Level5SpellNames.RARYS_TELEPATHIC_BOND,
    level: 5,
    school: SpellSchool.DIVINATION,
    ritual: true,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.REINCARNATE,
    level: 5,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.SCRYING,
    level: 5,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level5SpellNames.SEEMING,
    level: 5,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.SWIFT_QUIVER,
    level: 5,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level5SpellNames.TELEKINESIS,
    level: 5,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level5SpellNames.TELEPORTATION_CIRCLE,
    level: 5,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.TREE_STRIDE,
    level: 5,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: Level5SpellNames.WALL_OF_FORCE,
    level: 5,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: Level5SpellNames.WALL_OF_STONE,
    level: 5,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  }

];
