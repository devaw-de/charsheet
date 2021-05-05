import { Skill } from "../model/abilities";
import { Attribute } from "../model/attributes";
import { CharacterBackground } from "../model/backgrounds";
import { Alignment, Dice, Language } from "../model/base";
import { CharacterClassName } from "../model/characterClasses";
import { CharacterRace, CharacterRaceDetails, CharacterRacesList, CharacterSubraceDetails, CharacterSubRaceName, CharacterSubracesList } from "../model/characterRaces";
import { LevelUpStrategy } from "../model/settings";

export class Utils {

  /* Ability-modifier related methods */

  public static formatModifier(modifier: number): string {
    if(modifier > 0) return '+' + modifier.toString(10);
    return modifier.toString(10);
  }

  public static getAbilityModifier(abilityScore: number): number {
    return Math.floor((abilityScore - 10) / 2);
  }

  public static getAbilityModifierAstring(abilityScore: number): string {
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

  public static getSkillList(): Array<Skill> {
    return Utils._enumToArray(Skill);
  }

  public static getLevelUpStrategyList(): Array<LevelUpStrategy> {
    return Utils._enumToArray(LevelUpStrategy);
  }

  /* Race-related methods */

  public static getRaceDetailsByName(race: CharacterRace): CharacterRaceDetails {
    return CharacterRacesList.find(r => r.name === race);
  }

  public static getSubraceDetailsByName(subrace: CharacterSubRaceName): CharacterSubraceDetails {
    return CharacterSubracesList.find(s => s.name === subrace);
  }

  public static subraceSelectionRequired(race: CharacterRace) {
    const subRace = CharacterSubracesList.find(subrace => subrace.extendsRace === race);
    return subRace !== undefined;
  }

  /* Dice-related methods */
  public static getRandomDieValue(dice: Dice): number {
    return Math.floor(Math.random() * Utils.getMaxDieValue(dice)) + 1;
  }

  public static getAverageDieValue(dice: Dice): number {
    return Math.floor((Utils.getMaxDieValue(dice) + 1) / 2 + 1);
  }

  public static getMaxDieValue(dice: Dice): number {
    const v = parseInt(dice.substring(1), 10);
    return v;
  }

}