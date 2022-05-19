export enum Dice {
  D4 = 'D4',
  D6 = 'D6',
  D8 = 'D8',
  D10 = 'D10',
  D12 = 'D12',
  D20 = 'D20'
}

export interface DiceDetails {
  type: Dice;
  max: number;
  className: string;
}
