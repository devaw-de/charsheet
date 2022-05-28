export function WarlockCantripsKnowPerLevel(level: number): number {
  switch (true) {
    case level < 1:
    case level > 20:
      return 0;
    case level < 4:
      return 2;
    case level < 10:
      return 3;
    default:
      return 4;
  }
}
export function WarlockSpellsKnownPerLevel(level: number): number {
  switch (true) {
    case level < 1:
    case level > 20:
      return 0;
    case level < 10:
      return level + 1;
    default:
      return Math.ceil(10 + ((level - 10) / 2));
  }
}

export function WarlockInvocationsKnownPerLevel(level: number): number {
  switch (level) {
    case 2:
    case 3:
    case 4:
      return 2;
    case 5:
    case 6:
      return 3;
    case 7:
    case 8:
      return 4;
    case 9:
    case 10:
    case 11:
      return 5;
    case 12:
    case 13:
    case 14:
      return 6;
    case 15:
    case 16:
    case 17:
      return 7;
    case 18:
    case 19:
    case 20:
      return 8;
    default:
      return 0;
  }
}

export function WarlockMaxSpellLevelPerLevel(level: number): number {
  switch (true) {
    case level < 2:
      return 0;
    case level < 11:
      return Math.floor(level / 2);
    case level === 11:
      return 5;
    case level === 12:
    case level === 13:
    case level === 14:
      return 6;
    case level === 15:
    case level === 16:
    case level === 17:
      return 7;
    case level === 18:
    case level === 19:
    case level === 20:
      return 8;
    default:
      return 0;
  }
}
