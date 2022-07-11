export enum Attribute {
  STR = 'Strength',
  DEX = 'Dexterity',
  CON = 'Constitution',
  INT = 'Intelligence',
  WIS = 'Wisdom',
  CHA = 'Charisma'
}

export function AbilityScoreImprovements(level: number): number {
  switch (level) {
    case 4:
    case 5:
    case 6:
    case 7:
      return 1;
    case 8:
    case 9:
    case 10:
    case 11:
      return 2;
    case 12:
    case 13:
    case 14:
    case 15:
      return 3;
    case 16:
    case 17:
    case 18:
      return 4;
    case 19:
    case 20:
      return 5;
    default:
      return 0;
  }
}
