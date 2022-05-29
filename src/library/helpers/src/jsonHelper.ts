import {PlayerCharacterData} from '@app/models';

export class JsonHelper {

  public static stringifyCharacter(character: PlayerCharacterData): string {
    return JSON.stringify(character, JsonHelper._replacer);
  }

  public static parseCharacter(stringifiedCharacter: string): PlayerCharacterData {
    return JSON.parse(stringifiedCharacter, JsonHelper._reviver);
  }

  private static _replacer(key, value): any {
    if (value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()),
      };
    } else {
      return value;
    }
  }

  private static _reviver(key, value): any {
    if (typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value);
      }
    }
    return value;
  }

}
