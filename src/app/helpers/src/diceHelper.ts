import {Dice} from '@app/models';

export class DiceHelper {

  public static getAverageDieValue(dice: Dice): number {
    return Math.floor((DiceHelper.getMaxDieValue(dice) + 1) / 2 + 1);
  }

  public static getMaxDieValue(dice: Dice): number {
    return parseInt(dice.substring(1), 10);
  }

  public static getRandomDieValue(dice: Dice): number {
    return Math.floor(Math.random() * DiceHelper.getMaxDieValue(dice)) + 1;
  }

}
