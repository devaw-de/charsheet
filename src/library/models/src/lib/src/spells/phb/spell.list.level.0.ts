import {Spell, SpellSchool} from '@app/models';

export enum CantripSpellNames {
  ACID_SPLASH = 'Acid Splash',
  BLADE_WARD = 'Blade Ward',
  CHILL_TOUCH = 'Chill Touch',
  DANCING_LIGHTS = 'Dancing Lights',
  DRUIDCRAFT = 'Druidcraft',
  ELDRITCH_BLAST = 'Eldritch Blast',
  FIRE_BOLT = 'Fire Bolt',
  FRIENDS = 'Friends',
  GUIDANCE = 'Guidance',
  LIGHT = 'Light',
  MAGE_HAND = 'Mage Hand',
  MENDING = 'Mending',
  MESSAGE = 'Message',
  MINOR_ILLUSION = 'Minor Illusion',
  POISON_SPRAY = 'Poison Spray',
  PRESTIDIGITATION = 'Prestidigitation',
  PRODUCE_FLAME = 'Produce Flame',
  RAY_OF_FROST = 'Ray of Frost',
  RESISTANCE = 'Resistance',
  SACRED_FLAME = 'Sacred Flame',
  SHILLELAGH = 'Shillelagh',
  SHOCKING_GRASP = 'Shocking Grasp',
  SPARE_THE_DYING = 'Spare the Dying',
  THAUMATURGY = 'Thaumaturgy',
  THORN_WHIP = 'Thorn Whip',
  TRUE_STRIKE = 'True Strike',
  VICIOUS_MOCKERY = 'Vicious Mockery'
}

export const CantripSpellList: Array<Spell> = [
  {
    name: CantripSpellNames.ACID_SPLASH,
    level: 0,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.BLADE_WARD,
    level: 0,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.CHILL_TOUCH,
    level: 0,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.DANCING_LIGHTS,
    level: 0,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: CantripSpellNames.DRUIDCRAFT,
    level: 0,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.ELDRITCH_BLAST,
    level: 0,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.FIRE_BOLT,
    level: 0,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.FRIENDS,
    level: 0,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: CantripSpellNames.GUIDANCE,
    level: 0,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: CantripSpellNames.LIGHT,
    level: 0,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.MAGE_HAND,
    level: 0,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.MENDING,
    level: 0,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.MESSAGE,
    level: 0,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.MINOR_ILLUSION,
    level: 0,
    school: SpellSchool.ILLUSION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.POISON_SPRAY,
    level: 0,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.PRESTIDIGITATION,
    level: 0,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.PRODUCE_FLAME,
    level: 0,
    school: SpellSchool.CONJURATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.RAY_OF_FROST,
    level: 0,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.RESISTANCE,
    level: 0,
    school: SpellSchool.ABJURATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: CantripSpellNames.SACRED_FLAME,
    level: 0,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.SHILLELAGH,
    level: 0,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.SHOCKING_GRASP,
    level: 0,
    school: SpellSchool.EVOCATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.SPARE_THE_DYING,
    level: 0,
    school: SpellSchool.NECROMANCY,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.THAUMATURGY,
    level: 0,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.THORN_WHIP,
    level: 0,
    school: SpellSchool.TRANSMUTATION,
    ritual: false,
    concentration: false,
    availableTo: []
  },
  {
    name: CantripSpellNames.TRUE_STRIKE,
    level: 0,
    school: SpellSchool.DIVINATION,
    ritual: false,
    concentration: true,
    availableTo: []
  },
  {
    name: CantripSpellNames.VICIOUS_MOCKERY,
    level: 0,
    school: SpellSchool.ENCHANTMENT,
    ritual: false,
    concentration: false,
    availableTo: []
  },
];
