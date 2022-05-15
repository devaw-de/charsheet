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

}
