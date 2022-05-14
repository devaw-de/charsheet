import {SkillName} from '../model/abilities';
import {Attribute} from '../model/attributes';
import {CharacterBackground} from '../model/backgrounds';
import {CharacterClass, CharacterClassesList, CharacterClassName} from '../model/characterClasses';
import {
  CharacterRace,
  CharacterRaceDetails,
  CharacterRacesList,
  CharacterSubRaceDetails,
  CharacterSubRaceName,
  CharacterSubRacesList
} from '../model/characterRaces';
import {Language} from '../model/language';
import {Dice} from '../model/dice';
import {Alignment} from '../model/alignments';

export class Utils {

  /* Ability-modifier related methods */

  public static formatModifier(modifier: number): string {
    if (modifier > 0) {
      return '+' + modifier.toString(10);
    }
    return modifier.toString(10);
  }

  public static getAbilityModifier(abilityScore: number): number {
    return Math.floor((abilityScore - 10) / 2);
  }

  public static getAbilityModifierAsString(abilityScore: number): string {
    const modifier = Utils.getAbilityModifier(abilityScore);
    return Utils.formatModifier(modifier);
  }

  /* Enum-related methods */
  private static _enumToArray(e: any): Array<any> {
    const arr = [];
    Object.values(e).forEach(item => arr.push(item));
    return arr;
  }

  public static getAlignmentsList(): Array<Alignment> {
    return Utils._enumToArray(Alignment);
  }

  public static getAttributesList(): Array<Attribute> {
    return Utils._enumToArray(Attribute);
  }

  public static getBackgroundList(): Array<CharacterBackground> {
    return Utils._enumToArray(CharacterBackground);
  }

  public static getClassesList(): Array<CharacterClassName> {
    return Utils._enumToArray(CharacterClassName);
  }

  public static getLanguagesList(): Array<Language> {
    return Utils._enumToArray(Language);
  }

  public static getRacesList(): Array<CharacterRace> {
    return Utils._enumToArray(CharacterRace);
  }

  public static getSkillList(): Array<SkillName> {
    return Utils._enumToArray(SkillName);
  }

  /* Race-related methods */
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

  /* Class-related methods */
  public static getClassDetailsByName(ccn: CharacterClassName): CharacterClass {
    return CharacterClassesList.find(c => c.name === ccn);
  }

  /* Dice-related methods */
  public static getRandomDieValue(dice: Dice): number {
    return Math.floor(Math.random() * Utils.getMaxDieValue(dice)) + 1;
  }

  public static getAverageDieValue(dice: Dice): number {
    return Math.floor((Utils.getMaxDieValue(dice) + 1) / 2 + 1);
  }

  public static getMaxDieValue(dice: Dice): number {
    return parseInt(dice.substring(1), 10);
  }

}
