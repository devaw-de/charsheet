import {
  CharacterClass,
  CharacterClassesList,
  CharacterClassName,
  CharacterRace,
  CharacterRaceDetails,
  CharacterRacesList,
  CharacterSubRaceDetails,
  CharacterSubRaceName,
  CharacterSubRacesList
} from '@app/models';

export class ClassHelper {

  public static getClassDetailsByName(ccn: CharacterClassName): CharacterClass {
    return CharacterClassesList.find(c => c.name === ccn);
  }

  public static getRaceDetailsByName(race: CharacterRace): CharacterRaceDetails {
    return CharacterRacesList.find(r => r.name === race);
  }

  public static getSubRaceDetailsByName(subRace: CharacterSubRaceName): CharacterSubRaceDetails {
    return CharacterSubRacesList.find(s => s.name === subRace);
  }

  public static subRaceSelectionRequired(race: CharacterRace): boolean {
    const subRace = CharacterSubRacesList.find(sub => sub.extendsRace === race);
    return subRace !== undefined;
  }

}
