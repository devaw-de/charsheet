import {CharacterAttributes, PlayerCharacterData} from '@app/models';

export class AbilityHelper {

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
    const modifier = AbilityHelper.getAbilityModifier(abilityScore);
    return AbilityHelper.formatModifier(modifier);
  }

  public static getAttributesTotal(character: PlayerCharacterData): CharacterAttributes {
    const attributes = { ...character.baseAttributes };

    if (character.appliedRacialBonuses) {
      Object.keys(character.appliedRacialBonuses).forEach((key) => {
        if (attributes[key]) {
          attributes[key] += character.appliedRacialBonuses[key];
        }
      });
    }

    if (character.appliedAttributeIncreases) {
      Object.keys(character.appliedAttributeIncreases).forEach((key) => {
        if (attributes[key]) {
          attributes[key] += character.appliedAttributeIncreases[key];
        }
      });
    }

    return attributes;
  }

}
