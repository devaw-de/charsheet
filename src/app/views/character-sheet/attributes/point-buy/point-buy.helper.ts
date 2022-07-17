import {QueryList} from '@angular/core';
import {CustomNumberInputComponent} from '../../../../components/custom-number-input/custom-number-input.component';

export class PointBuyHelper {

  public static getPointCost(scoreValue: number): number {
    switch (true) {
      case scoreValue > 7 && scoreValue < 14:
        return scoreValue - 8;
      case scoreValue === 14:
        return 7;
      case scoreValue === 15:
        return 9;
      default:
        return 0;
    }
  }

  /**
   * Calculate the sum of the current values of the supplied list of input components
   */
  public static getInputValueSum(inputs: QueryList<CustomNumberInputComponent>): number {
    return inputs?.length
           ? inputs
             .toArray()
             .map(input => input.currentValue)
             .reduce((previousValue, currentValue) => previousValue + currentValue)
           : 0;
  }

  /**
   * Calculate the cost for the current values for the supplied list of input components
   */
  public static getInputValueCostSum(inputs: QueryList<CustomNumberInputComponent>): number {
    return inputs?.length
           ? inputs
             .toArray()
             .map(input => PointBuyHelper.getPointCost(input.currentValue))
             .reduce((previousValue, currentValue) => previousValue + currentValue)
           : 0;
  }

  /**
   * Calculate the cost to increase the current base value by 1
   */
  public static getIncreaseCost(currentAttributeValue: number): number {
    const currentAttributeCost = PointBuyHelper.getPointCost(currentAttributeValue);
    const nextAttributeCost = currentAttributeValue === 15
                              ? currentAttributeCost
                              : PointBuyHelper.getPointCost(currentAttributeValue + 1);
    return nextAttributeCost - currentAttributeCost;
  }

  /**
   * Calculate the [max] param for an input.
   * The form should limit each base number input to a max of 15 while at the same time preventing the individual costs
   * exceeding the maximum points.
   * This is achieved by manipulating the max param according to the current value of an input and the remaining points.
   */
  public static getDistributedMaxValue(currentValue: number, remainingPoints: number, defaultMaxValue: number): number {
    switch (true) {
      case !isNaN(currentValue) && remainingPoints < 1:
      case !isNaN(currentValue) &&  remainingPoints < PointBuyHelper.getIncreaseCost(currentValue):
        return currentValue;
      default:
        return defaultMaxValue;
    }
  }

}
