import {
  CharacterClass,
  CharacterClassesList,
  CharacterClassName,
  CharacterRace,
  CharacterRaceDetails,
  CharacterRacesList,
  CharacterSubRaceDetails,
  CharacterSubRaceName,
  CharacterSubRacesList,
  Dice
} from '@app/models';

export class ClassHelper {

  public static getClassDetailsByName(className: CharacterClassName): CharacterClass {
    return CharacterClassesList.find(c => c.name === className);
  }

  public static getRaceDetailsByName(race: CharacterRace): CharacterRaceDetails {
    return CharacterRacesList.find(r => r.name === race);
  }

  public static getSubRaceDetailsByName(subRace: CharacterSubRaceName): CharacterSubRaceDetails {
    return CharacterSubRacesList.find(s => s.name === subRace);
  }

  public static subRaceSelectionRequired(race: CharacterRace): boolean {
    return CharacterSubRacesList.find(sub => sub.extendsRace === race) !== undefined;
  }

  public static getHitDieByClassName(className: CharacterClassName): Dice {
    switch (className) {
      case CharacterClassName.BARBARIAN:
        return Dice.D12;
      case CharacterClassName.FIGHTER:
      case CharacterClassName.PALADIN:
      case CharacterClassName.RANGER:
        return Dice.D10;
      case CharacterClassName.BARD:
      case CharacterClassName.CLERIC:
      case CharacterClassName.DRUID:
      case CharacterClassName.MONK:
      case CharacterClassName.ROGUE:
      case CharacterClassName.WARLOCK:
        return Dice.D8;
      case CharacterClassName.SORCERER:
      case CharacterClassName.WIZARD:
        return Dice.D6;
      default:
        throw new Error('unhandled CharacterClass');
    }
  }

}
