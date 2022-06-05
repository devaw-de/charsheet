import {Alignment, Attribute, CharacterBackground, CharacterClassName, CharacterRace, Language, SkillName} from '@app/models';

export class EnumHelper {

  public static enumToArray(e: any): Array<any> {
    const arr = [];
    Object.values(e).forEach(item => arr.push(item));
    return arr;
  }

  public static getAlignmentsList(): Array<Alignment> {
    return EnumHelper.enumToArray(Alignment);
  }

  public static getAttributesList(): Array<Attribute> {
    return EnumHelper.enumToArray(Attribute);
  }

  public static getBackgroundList(): Array<CharacterBackground> {
    return EnumHelper.enumToArray(CharacterBackground);
  }

  public static getClassesList(): Array<CharacterClassName> {
    return EnumHelper.enumToArray(CharacterClassName);
  }

  public static getLanguagesList(): Array<Language> {
    return EnumHelper.enumToArray(Language);
  }

  public static getRacesList(): Array<CharacterRace> {
    return EnumHelper.enumToArray(CharacterRace);
  }

  public static getSkillList(): Array<SkillName> {
    return EnumHelper.enumToArray(SkillName);
  }

}
