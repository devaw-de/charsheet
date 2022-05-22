import {Alignment, Attribute, CharacterBackground, CharacterClassName, CharacterRace, Language, SkillName} from '@app/models';

export class EnumHelper {

  private static _enumToArray(e: any): Array<any> {
    const arr = [];
    Object.values(e).forEach(item => arr.push(item));
    return arr;
  }

  public static getAlignmentsList(): Array<Alignment> {
    return EnumHelper._enumToArray(Alignment);
  }

  public static getAttributesList(): Array<Attribute> {
    return EnumHelper._enumToArray(Attribute);
  }

  public static getBackgroundList(): Array<CharacterBackground> {
    return EnumHelper._enumToArray(CharacterBackground);
  }

  public static getClassesList(): Array<CharacterClassName> {
    return EnumHelper._enumToArray(CharacterClassName);
  }

  public static getLanguagesList(): Array<Language> {
    return EnumHelper._enumToArray(Language);
  }

  public static getRacesList(): Array<CharacterRace> {
    return EnumHelper._enumToArray(CharacterRace);
  }

  public static getSkillList(): Array<SkillName> {
    return EnumHelper._enumToArray(SkillName);
  }

}
